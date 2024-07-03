import * as fs from "fs";
import { Position, TextDocument } from "vscode-languageserver-textdocument";
import { LpcFacade, getProjectFiles } from "./facade";
import { CancellationToken, Location } from "vscode-languageserver";
import {
    getFilenameForSymbol,
    lexRangeFromContext,
    lexRangeToLspRange,
} from "../utils";
import {
    isInstanceOfIReferenceSymbol,
    isInstanceOfIReferenceableSymbol,
} from "../symbols/base";

import { ParserRuleContext } from "antlr4ng";
import { LPCToken } from "../parser3/LPCToken";
import { BaseSymbol, ScopedSymbol } from "antlr4-c3";
import { URI } from "vscode-uri";
import { FunctionHeaderContext } from "../parser3/LPCParser";
import { LpcBaseMethodSymbol } from "../symbols/methodSymbol";
import { isIdentifierPart } from "./scanner-utils";

type CandidatePosition = {
    filename: string;
    position: number;
};
export class ReferenceProvider {
    constructor(private backend: LpcFacade) {}

    public async handleReferenceRequest(
        doc: TextDocument,
        position: Position,
        token: CancellationToken = CancellationToken.None
    ): Promise<Location[]> {
        const docFilename = URI.parse(doc.uri).fsPath;
        const results: Location[] = [];
        const seen: Set<BaseSymbol> = new Set();

        const sym = this.backend.symbolContainingPosition(doc.uri, position);
        if (!sym) {
            return [];
        }

        const referenceName = sym.name;

        // scan all files for candidates
        // TODO: implemenet scope check so that we don't do a full scan for things like block-scoped variables
        const projectFiles = await getProjectFiles(
            this.backend.workspaceDir,
            token
        );
        const candidatePositions: CandidatePosition[] = [];
        for (const file of projectFiles) {
            if (token.isCancellationRequested) break;

            const readPromise = new Promise<void>((resolve, reject) => {
                fs.readFile(file, "utf-8", (err, text) => {
                    const positions = searchForName(text, referenceName);
                    candidatePositions.push(
                        ...positions.map((p) => ({
                            filename: file,
                            position: p,
                        }))
                    );
                    resolve();
                });
            });

            await readPromise;
        }

        // TODO: cache this
        const candidateFiles = new Set(
            candidatePositions.map((cp) => cp.filename)
        );

        // add the symbol and its reference to the list
        const refsToScan: BaseSymbol[] = [sym];
        if (isInstanceOfIReferenceSymbol(sym))
            refsToScan.push(sym.getReference());

        // check this files inludes to see if the symbol is defined in another file
        const symFile = getFilenameForSymbol(sym);

        const files = [
            symFile, // the current file
            ...(this.backend.includeRefs.get(symFile) ?? []), // any included files
            ...(this.backend.fileRefs.get(symFile) ?? []), // any files that reference this one
            ...(candidateFiles ?? []),
        ];

        // now scan the files
        const seenFiles = new Set<string>();
        for (const file of files) {
            if (token.isCancellationRequested) break;
            if (seenFiles.has(file)) continue;
            seenFiles.add(file);

            // load files and evaluate them so that any arrow symbols will be resolved
            const refCtx = this.backend.loadLpc(file);
            refCtx.evaluateProgram();

            // look for name matches and make sure their references are filled in.
            const { symbolTable } = refCtx;
            const candidates = await symbolTable.getAllSymbolsByName(sym.name);
            candidates.forEach((c) => {
                if (!!c && isInstanceOfIReferenceSymbol(c)) {
                    // make sure the reference is filled in
                    c.getReference();
                }
            });

            // find the "definition" symbol and add any its file
            const refSym = await refCtx.symbolTable.resolve(sym.name, true);
            if (
                isInstanceOfIReferenceableSymbol(refSym) &&
                getFilenameForSymbol(refSym) === file
            ) {
                refsToScan.push(refSym);
                if (isInstanceOfIReferenceSymbol(refSym)) {
                    refsToScan.push(refSym.getReference());
                }
            }

            files.push(...(this.backend.fileRefs.get(file) ?? []));
        }

        // now, the original symbol is either a reference or referencable.
        let definitionSymbol: BaseSymbol;
        if (isInstanceOfIReferenceSymbol(sym)) {
            definitionSymbol = sym.getReference();
        } else if (isInstanceOfIReferenceableSymbol(sym)) {
            definitionSymbol = sym;
        } else {
            // this should never happen
            console.log("Unexpected symbol type in reference provider");
        }

        const finalList = [definitionSymbol];

        while (finalList.length > 0) {
            if (token.isCancellationRequested) break;

            const ref = finalList.pop();
            if (!ref || seen.has(ref)) continue;
            seen.add(ref);

            if (isInstanceOfIReferenceableSymbol(ref)) {
                finalList.push(...ref.references);
            }

            let parseInfo = ref.context as ParserRuleContext;
            if (ref instanceof LpcBaseMethodSymbol) {
                // use the name context instead
                const header = parseInfo.children.find(
                    (c) => c instanceof FunctionHeaderContext
                ) as FunctionHeaderContext;
                if (header?._functionName) {
                    parseInfo = header._functionName;
                }
            }
            const t = parseInfo.start as LPCToken;
            const filename = t.filename;
            const range = lexRangeToLspRange(lexRangeFromContext(parseInfo));

            results.push({
                uri: filename,
                range: range,
            });
        }

        // release candidate files
        for (const candidateFile of candidateFiles) {
            this.backend.releaseLpc(candidateFile);
        }

        if (token.isCancellationRequested) {
            console.log("Reference provider cancelled");
        }

        return results;
    }
}

/**
 * Determine the smallest scope in which a symbol may have references.
 * @param symbol
 * @returns undefeind if the scope cannot be determined,
 * which means a reference can be anywhere
 */
function getSymbolScope(symbol: BaseSymbol): ScopedSymbol | undefined {
    // TODO: implement this
    return undefined;
}

/**
 * Searches a file for instances of a symbol name
 * @param sourceText the source code of the file to scan
 * @param search
 * @returns an array of starting positions of the symbol name
 */
function searchForName(
    sourceText: string,
    search: string,
    containerStart: number = 0,
    containerEnd: number = sourceText.length
): readonly number[] {
    const positions: number[] = [];
    if (!search || !search.length) positions;

    const sourceLength = sourceText.length;
    const symbolNameLength = search.length;

    let position = sourceText.indexOf(search, containerStart);
    while (position >= 0) {
        // If we are past the end, stop looking
        if (position > containerEnd) break;

        // We found a match.  Make sure it's not part of a larger word (i.e. the char
        // before and after it have to be a non-identifier char).
        const endPosition = position + symbolNameLength;

        if (
            (position === 0 ||
                !isIdentifierPart(sourceText.charCodeAt(position - 1))) &&
            (endPosition === sourceLength ||
                !isIdentifierPart(sourceText.charCodeAt(endPosition)))
        ) {
            // Found a real match.  Keep searching.
            positions.push(position);
        }
        position = sourceText.indexOf(search, position + symbolNameLength + 1);
    }

    return positions;
}

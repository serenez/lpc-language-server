import { BaseSymbol, IType, ScopedSymbol } from "antlr4-c3";
import {
    IEvaluatableSymbol,
    getSymbolsOfTypeSync,
    isInstanceOfIEvaluatableSymbol,
} from "./base";
import { addDiagnostic } from "./Symbol";
import { normalizeFilename, rangeFromTokens } from "../utils";
import { MethodInvocationSymbol } from "./methodSymbol";
import { ContextSymbolTable } from "../backend/ContextSymbolTable";
import { SourceContext } from "../backend/SourceContext";

import { ParserRuleContext } from "antlr4ng";
import { DiagnosticSeverity } from "vscode-languageserver";

export class ObjectReferenceInfo {
    filename: string;
    isLoaded: boolean;
    context: SourceContext;
}

export class CloneObjectSymbol
    extends ScopedSymbol
    implements IEvaluatableSymbol
{
    public isLoaded = false;
    private sourceContext: SourceContext;

    constructor(name: string, public filename?: string) {
        super(name);
    }

    eval() {
        // first evaluate the filename
        let filename = "";
        for (const child of this.children) {
            if (isInstanceOfIEvaluatableSymbol(child)) {
                filename = child.eval(filename);
            } else {
                throw "not evaluable";
            }
        }

        // try to load the source context and store the info in this symbol
        const backend = (this.symbolTable as ContextSymbolTable).owner.backend;
        this.filename = backend.filenameToAbsolutePath(
            normalizeFilename(filename)
        );
        this.loadSource();

        const info = new ObjectReferenceInfo();
        info.filename = filename;
        info.isLoaded = this.isLoaded;
        info.context = this.sourceContext;
        return info;
    }

    private loadSource() {
        if (!this.isLoaded) {
            const backend = (this.symbolTable as ContextSymbolTable).owner
                .backend;
            this.sourceContext = backend.loadLpc(this.filename);
            if (!!this.sourceContext) {
                this.isLoaded = true;
            } else {
                const ctx = this.context as ParserRuleContext;
                addDiagnostic(this, {
                    message: "could not load source for: " + this.filename,
                    range: rangeFromTokens(ctx.start, ctx.stop),
                    type: DiagnosticSeverity.Warning,
                });
            }
        }
    }

    /**
     * intercept the resolve and resolve only from this objects source context
     * @param name
     * @param localOnly
     * @returns
     */
    override resolveSync(name: string, localOnly?: boolean): BaseSymbol {
        this.loadSource(); // load if needed
        return this.sourceContext.resolveSymbol(name);
    }
}

export class CallOtherSymbol
    extends ScopedSymbol
    implements IEvaluatableSymbol
{
    public objectRef: ObjectReferenceInfo;

    constructor(name: string, public functionName?: string) {
        super(name);
    }

    eval(obj: any) {
        if (!(obj instanceof ObjectReferenceInfo)) {
            // TODO report this as a diagnostic?
            return undefined;
        }

        // store for later
        this.objectRef = obj;

        // this will handle expressions & string literals
        if (!this.functionName) {
            for (const child of this.children) {
                if (isInstanceOfIEvaluatableSymbol(child)) {
                    this.functionName = child.eval();
                } else {
                    throw "not evaluable: " + child.name;
                }
            }
        }

        if (!this.functionName) {
            throw "could not determine function name for arrow: " + this.name;
        }

        // at this point we've figured out the function name and now need to find the actual function.
        const symTbl = (obj as ObjectReferenceInfo).context?.symbolTable;
        const funSym = symTbl?.resolveSync(
            this.functionName,
            false
        ) as IEvaluatableSymbol;

        if (!funSym) {
            return null; // semantic analysis will log this diagnostic
        }

        // the next sibling should be the method invocation
        const methodInvok = this.nextSibling as MethodInvocationSymbol;
        if (!(methodInvok instanceof MethodInvocationSymbol))
            throw "expected a method invocation";

        // evaluate the argumnents
        const argVals = methodInvok.getArguments().map((a) => {
            a.eval();
        });

        return funSym.eval(argVals);
    }
}
import {
    Diagnostic,
    DiagnosticRelatedInformation,
    DiagnosticSeverity,
    Location,
} from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { lexRangeToLspRange } from "../utils";
import { LpcFacade } from "./facade";
import { IDiagnosticEntry } from "../types";
import { URI } from "vscode-uri";

type DocDiagnostics = {
    uri: string;
    version?: number;
    diagnostics: Diagnostic[];
};

export class DiagnosticProvider {
    // static entries: IDiagnosticEntry[]=[];

    constructor(private facade: LpcFacade) {}

    // public static addDiagnosticEntry(entry: IDiagnosticEntry) {
    //     this.entries.push(entry);
    // }

    // public static clearDiagnosticEntries() {
    //     this.entries = [];
    // }

    /**
     * Processes diangostics for the given document and sends back to the language client.
     * @param document
     */
    public processDiagnostic(document: TextDocument): DocDiagnostics[] {
        const entries = this.facade.getDiagnostics(document.uri);
        const results: DocDiagnostics[] = [];

        // if diag for the doc is undefined, that means diags failed
        // so send a blank array - we don't want to clear out any existing diags
        // for this doc
        if (!entries) {
            return [];
        }

        results.push({
            version: document.version,
            uri: document.uri,
            diagnostics: this.convertDiagnosticEntries(document.uri, entries),
        });

        // if any dependencies need validation, reprocess them as well
        const deps = this.facade.getDependencies(document.uri) ?? [];
        for (const dep of deps) {
            const depDiagEntries = this.facade.getDiagnostics(dep);
            const depUri = URI.file(dep).toString();
            if (!!depDiagEntries) {
                results.push({
                    uri: depUri,
                    diagnostics: this.convertDiagnosticEntries(
                        depUri,
                        depDiagEntries
                    ),
                });
            }
        }

        return results;
    }

    private convertDiagnosticEntries(
        uri: string,
        entries: IDiagnosticEntry[]
    ): Diagnostic[] {
        const diags: Diagnostic[] = [];
        for (const entry of entries) {
            const range = lexRangeToLspRange(entry.range);
            const diagnostic = Diagnostic.create(
                range,
                entry.message,
                entry.type,
                undefined,
                uri
            );

            const { related } = entry;
            if (!!related) {
                diagnostic.relatedInformation = [
                    DiagnosticRelatedInformation.create(
                        Location.create(uri, lexRangeToLspRange(related.range)),
                        related.message
                    ),
                ];
            }

            diags.push(diagnostic);
        }
        return diags;
    }
}

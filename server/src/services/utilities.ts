import {
    Symbol,
    getTextOfIdentifierOrLiteral,
    IScriptSnapshot,
    PropertyName,
    firstOrUndefined,
    findAncestor,
    isParameter,
    isBindingElement,
    isArrayBindingPattern,
    createTextSpanFromBounds,
    Node,
    SourceFile,
    TextSpan,
    SyntaxKind,
    BinaryExpression,
    ForEachStatement,
    some,
} from "./_namespaces/lpc.js";

/** @internal */
export function getNameFromPropertyName(
    name: PropertyName
): string | undefined {
    return getTextOfIdentifierOrLiteral(name);
    // return name.kind === SyntaxKind.ComputedPropertyName
    //     // treat computed property names where expression is string/numeric literal as just string/numeric literal
    //     ? isStringOrNumericLiteralLike(name.expression) ? name.expression.text : undefined
    //     : isPrivateIdentifier(name) ? idText(name) : getTextOfIdentifierOrLiteral(name);
}

/** @internal */
export function getSnapshotText(snap: IScriptSnapshot): string {
    return snap.getText(0, snap.getLength());
}

// Display-part writer helpers
// #region
/** @internal */
export function isFirstDeclarationOfSymbolParameter(symbol: Symbol) {
    const declaration = symbol.declarations ? firstOrUndefined(symbol.declarations) : undefined;
    return !!findAncestor(declaration, n => isParameter(n) ? true : isBindingElement(n) || isArrayBindingPattern(n) ? false : "quit");
}


/** @internal */
export function createTextSpanFromNode(node: Node, sourceFile?: SourceFile, endNode?: Node): TextSpan {
    return createTextSpanFromBounds(node.getStart(sourceFile), (endNode || node).getEnd());
}

/** @internal */
export function isArrayLiteralOrObjectLiteralDestructuringPattern(node: Node) {
    if (
        node.kind === SyntaxKind.ArrayLiteralExpression ||
        node.kind === SyntaxKind.ObjectLiteralExpression
    ) {
        // [a,b,c] from:
        // [a, b, c] = someExpression;
        if (
            node.parent.kind === SyntaxKind.BinaryExpression &&
            (node.parent as BinaryExpression).left === node &&
            (node.parent as BinaryExpression).operatorToken.kind === SyntaxKind.EqualsToken
        ) {
            return true;
        }

        // [a, b, c] from:
        // for([a, b, c] of expression)
        if (
            node.parent.kind === SyntaxKind.ForEachStatement &&
            some((node.parent as ForEachStatement).initializer, n => n === node)
        ) {
            return true;
        }

        // [a, b, c] of
        // [x, [a, b, c] ] = someExpression
        // or
        // {x, a: {a, b, c} } = someExpression
        if (isArrayLiteralOrObjectLiteralDestructuringPattern(node.parent.kind === SyntaxKind.PropertyAssignment ? node.parent.parent : node.parent)) {
            return true;
        }
    }

    return false;
}
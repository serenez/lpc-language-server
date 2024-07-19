import { ArrayBindingElement, AssignmentDeclarationKind, BinaryExpression, BindingElement, BindingPattern, Block, BreakOrContinueStatement, CallChain, CallExpression, CallLikeExpression, canHaveJSDoc, ConciseBody, Debug, Declaration, DeclarationName, emptyArray, EntityName, Expression, find, flatMap, ForEachStatement, FunctionLikeDeclaration, GeneratedIdentifier, getAssignmentDeclarationKind, getEffectiveModifierFlags, getJSDocCommentsAndTags, HasExpressionInitializer, HasInitializer, HasLocals, HasModifiers, hasProperty, Identifier, isBinaryExpression, isBindingElement, isBlock, isCallExpression, isFunctionBlock, isFunctionExpression, isIdentifier, isInlineClosureExpression, isJSDoc, isJSDocDeprecatedTag, isJSDocParameterTag, isJSDocSignature, isKeyword, isSourceFile, isTypeNodeKind, isVariableDeclaration, isWhiteSpaceLike, IterationStatement, JSDocDeprecatedTag, JSDocParameterTag, JSDocSignature, JSDocTag, KeywordSyntaxKind, lastOrUndefined, LeftHandSideExpression, LiteralExpression, LiteralToken, MemberName, ModifierFlags, NamedDeclaration, Node, NodeArray, NodeFlags, OuterExpressionKinds, ParameterDeclaration, PropertyAccessExpression, PropertyName, QualifiedName, SignatureDeclaration, skipOuterExpressions, Statement, stringToToken, Symbol, SyntaxKind, TextRange, TextSpan, tryCast, TypeNode, UnaryExpression, VariableDeclaration } from "./_namespaces/lpc.js";

/** @internal */
export function isNodeArray<T extends Node>(array: readonly T[]): array is NodeArray<T> {
    return hasProperty(array, "pos") && hasProperty(array, "end");
}

export function symbolName(symbol: Symbol): string {    
    return symbol.name;
}

export function idText(identifierOrPrivateName: Identifier): string {
    return (identifierOrPrivateName.text);
}

/**
 * Gets a value indicating whether a node originated in the parse tree.
 *
 * @param node The node to test.
 */
export function isParseTreeNode(node: Node): boolean {
    return (node.flags & NodeFlags.Synthesized) === 0;
}

export function canHaveModifiers(node: Node): node is HasModifiers {
    const kind = node.kind;
    return kind === SyntaxKind.TypeParameter
        || kind === SyntaxKind.Parameter
        // || kind === SyntaxKind.PropertySignature
        // || kind === SyntaxKind.PropertyDeclaration
        // || kind === SyntaxKind.MethodSignature
        // || kind === SyntaxKind.MethodDeclaration
        // || kind === SyntaxKind.Constructor
        // || kind === SyntaxKind.GetAccessor
        // || kind === SyntaxKind.SetAccessor
        // || kind === SyntaxKind.IndexSignature
        // || kind === SyntaxKind.ConstructorType
        || kind === SyntaxKind.FunctionExpression
        || kind === SyntaxKind.VariableStatement
        || kind === SyntaxKind.FunctionDeclaration
        // || kind === SyntaxKind.ArrowFunction
        // || kind === SyntaxKind.ClassExpression
        // || kind === SyntaxKind.ClassDeclaration
        // || kind === SyntaxKind.InterfaceDeclaration
        // || kind === SyntaxKind.TypeAliasDeclaration
        // || kind === SyntaxKind.EnumDeclaration
        // || kind === SyntaxKind.ModuleDeclaration
        // || kind === SyntaxKind.ImportEqualsDeclaration
        // || kind === SyntaxKind.ImportDeclaration
        // || kind === SyntaxKind.ExportAssignment
        // || kind === SyntaxKind.ExportDeclaration;
        ;
}

/**
 * Gets the original parse tree node for a node.
 *
 * @param node The original node.
 * @returns The original parse tree node if found; otherwise, undefined.
 */
export function getParseTreeNode(node: Node | undefined): Node | undefined;

/**
 * Gets the original parse tree node for a node.
 *
 * @param node The original node.
 * @param nodeTest A callback used to ensure the correct type of parse tree node is returned.
 * @returns The original parse tree node if found; otherwise, undefined.
 */
export function getParseTreeNode<T extends Node>(node: T | undefined, nodeTest?: (node: Node) => node is T): T | undefined;
export function getParseTreeNode(node: Node | undefined, nodeTest?: (node: Node) => boolean): Node | undefined {
    if (node === undefined || isParseTreeNode(node)) {
        return node;
    }

    node = node.original;
    while (node) {
        if (isParseTreeNode(node)) {
            return !nodeTest || nodeTest(node) ? node : undefined;
        }
        node = node.original;
    }
}

export function isFunctionLike(node: Node | undefined): node is SignatureDeclaration {
    return !!node && isFunctionLikeKind(node.kind);
}

function isFunctionLikeDeclarationKind(kind: SyntaxKind): boolean {
    switch (kind) {
        case SyntaxKind.FunctionDeclaration:
        // case SyntaxKind.MethodDeclaration:
        // case SyntaxKind.Constructor:
        // case SyntaxKind.GetAccessor:
        // case SyntaxKind.SetAccessor:
        case SyntaxKind.FunctionExpression:
        // case SyntaxKind.ArrowFunction:
            return true;
        default:
            return false;
    }
}

/** @internal */
export function isFunctionLikeKind(kind: SyntaxKind): boolean {
    switch (kind) {
        // case SyntaxKind.MethodSignature:
        // case SyntaxKind.CallSignature:
        case SyntaxKind.JSDocSignature:
        // case SyntaxKind.ConstructSignature:
        // case SyntaxKind.IndexSignature:
        // case SyntaxKind.FunctionType:
        case SyntaxKind.JSDocFunctionType:
        // case SyntaxKind.ConstructorType:
            return true;
        default:
            return isFunctionLikeDeclarationKind(kind);
    }
}

function getCombinedFlags(node: Node, getFlags: (n: Node) => number): number {
    // if (isBindingElement(node)) {
    //     node = walkUpBindingElementsAndPatterns(node);
    // }
    let flags = getFlags(node);
    if (node.kind === SyntaxKind.VariableDeclaration) {
        node = node.parent;
    }
    if (node && node.kind === SyntaxKind.VariableDeclarationList) {
        flags |= getFlags(node);
        node = node.parent;
    }
    if (node && node.kind === SyntaxKind.VariableStatement) {
        flags |= getFlags(node);
    }
    return flags;
}


// Returns the node flags for this node and all relevant parent nodes.  This is done so that
// nodes like variable declarations and binding elements can returned a view of their flags
// that includes the modifiers from their container.  i.e. flags like export/declare aren't
// stored on the variable declaration directly, but on the containing variable statement
// (if it has one).  Similarly, flags for let/const are stored on the variable declaration
// list.  By calling this function, all those flags are combined so that the client can treat
// the node as if it actually had those flags.
export function getCombinedNodeFlags(node: Node): NodeFlags {
    return getCombinedFlags(node, getNodeFlags);
}

function getNodeFlags(node: Node) {
    return node.flags;
}

/** @internal */
export function canHaveLocals(node: Node): node is HasLocals {
    switch (node.kind) {
        case SyntaxKind.Block:
        case SyntaxKind.InlineClosureExpression: 
        // case SyntaxKind.CallSignature:
        case SyntaxKind.CaseBlock:
        case SyntaxKind.CatchClause:
        // case SyntaxKind.ClassStaticBlockDeclaration:
        // case SyntaxKind.ConditionalType:
        // case SyntaxKind.Constructor:
        // case SyntaxKind.ConstructorType:
        // case SyntaxKind.ConstructSignature:
        case SyntaxKind.ForStatement:        
        case SyntaxKind.ForEachStatement:
        case SyntaxKind.FunctionDeclaration:
        case SyntaxKind.FunctionExpression:
        // case SyntaxKind.FunctionType:
        // case SyntaxKind.GetAccessor:
        // case SyntaxKind.IndexSignature:
        case SyntaxKind.JSDocCallbackTag:
        case SyntaxKind.JSDocEnumTag:
        case SyntaxKind.JSDocFunctionType:
        case SyntaxKind.JSDocSignature:
        case SyntaxKind.JSDocTypedefTag:
        // case SyntaxKind.MappedType:
        // case SyntaxKind.MethodDeclaration:
        // case SyntaxKind.MethodSignature:
        // case SyntaxKind.ModuleDeclaration:
        // case SyntaxKind.SetAccessor:
        case SyntaxKind.SourceFile:
        // case SyntaxKind.TypeAliasDeclaration:
            return true;
        default:
            return false;
    }
}

/** @internal */
export function isNamedDeclaration(node: Node): node is NamedDeclaration & { name: DeclarationName; } {
    return !!(node as NamedDeclaration).name; // A 'name' property should always be a DeclarationName.
}

/** @internal */
export function getNonAssignedNameOfDeclaration(declaration: Declaration | Expression): DeclarationName | undefined {
    switch (declaration.kind) {
        case SyntaxKind.Identifier:
            return declaration as Identifier;
        // case SyntaxKind.JSDocPropertyTag:
        // case SyntaxKind.JSDocParameterTag: {
        //     const { name } = declaration as JSDocPropertyLikeTag;
        //     if (name.kind === SyntaxKind.QualifiedName) {
        //         return name.right;
        //     }
        //     break;
        // }
        case SyntaxKind.CallExpression:
        case SyntaxKind.BinaryExpression: {
            const expr = declaration as BinaryExpression | CallExpression;
            switch (getAssignmentDeclarationKind(expr)) {
                // case AssignmentDeclarationKind.ExportsProperty:
                // case AssignmentDeclarationKind.ThisProperty:
                // case AssignmentDeclarationKind.Property:
                // case AssignmentDeclarationKind.PrototypeProperty:
                //     return getElementOrPropertyAccessArgumentExpressionOrName((expr as BinaryExpression).left as AccessExpression);
                // case AssignmentDeclarationKind.ObjectDefinePropertyValue:
                // case AssignmentDeclarationKind.ObjectDefinePropertyExports:
                // case AssignmentDeclarationKind.ObjectDefinePrototypeProperty:
                //     return (expr as BindableObjectDefinePropertyCall).arguments[1];
                default:
                    return undefined;
            }
        }
        // case SyntaxKind.JSDocTypedefTag:
        //     return getNameOfJSDocTypedef(declaration as JSDocTypedefTag);
        // case SyntaxKind.JSDocEnumTag:
        //     return nameForNamelessJSDocTypedef(declaration as JSDocEnumTag);
        // case SyntaxKind.ExportAssignment: {
        //     const { expression } = declaration as ExportAssignment;
        //     return isIdentifier(expression) ? expression : undefined;
        // }
        // case SyntaxKind.ElementAccessExpression:
        //     const expr = declaration as ElementAccessExpression;
        //     if (isBindableStaticElementAccessExpression(expr)) {
        //         return expr.argumentExpression;
        //     }
    }
    return (declaration as NamedDeclaration).name;
}

/** @internal */
export function getAssignedName(node: Node): DeclarationName | undefined {
    if (!node.parent) {
        return undefined;
    }
    // else if (isPropertyAssignment(node.parent) || isBindingElement(node.parent)) {
    //     return node.parent.name;
    // }
    else if (isBinaryExpression(node.parent) && node === node.parent.right) {
        if (isIdentifier(node.parent.left)) {
            return node.parent.left;
        }
        // else if (isAccessExpression(node.parent.left)) {
        //     return getElementOrPropertyAccessArgumentExpressionOrName(node.parent.left);
        // }
    }
    else if (isVariableDeclaration(node.parent) && isIdentifier(node.parent.name)) {
        return node.parent.name;
    }
}


export function getNameOfDeclaration(declaration: Declaration | Expression | undefined): DeclarationName | undefined {
    if (declaration === undefined) return undefined;
    return getNonAssignedNameOfDeclaration(declaration) ||
        (isFunctionExpression(declaration) || isInlineClosureExpression(declaration) /*|| isClassExpression(declaration)*/ ? getAssignedName(declaration) : undefined);
}

/** @internal */
export function isForEachStatement(node: Node): node is ForEachStatement {
    return node.kind === SyntaxKind.ForEachStatement;
}

export function skipPartiallyEmittedExpressions(node: Expression): Expression;
export function skipPartiallyEmittedExpressions(node: Node): Node;
export function skipPartiallyEmittedExpressions(node: Node) {
    return skipOuterExpressions(node, OuterExpressionKinds.PartiallyEmittedExpressions);
}


export function isLeftHandSideExpression(node: Node): node is LeftHandSideExpression {
    return isLeftHandSideExpressionKind(skipPartiallyEmittedExpressions(node).kind);
}

function isLeftHandSideExpressionKind(kind: SyntaxKind): boolean {
    switch (kind) {
        case SyntaxKind.PropertyAccessExpression:
        // case SyntaxKind.ElementAccessExpression:
        case SyntaxKind.NewExpression:
        case SyntaxKind.CallExpression:        
        // case SyntaxKind.TaggedTemplateExpression:
        case SyntaxKind.ArrayLiteralExpression:
        case SyntaxKind.ParenthesizedExpression:
        // case SyntaxKind.ObjectLiteralExpression:
        // case SyntaxKind.ClassExpression:
        case SyntaxKind.FunctionExpression:
        case SyntaxKind.Identifier:
        //case SyntaxKind.PrivateIdentifier: // technically this is only an Expression if it's in a `#field in expr` BinaryExpression
        //case SyntaxKind.RegularExpressionLiteral:
        case SyntaxKind.IntLiteral:
        case SyntaxKind.FloatLiteral:
        case SyntaxKind.StringLiteral:
        // case SyntaxKind.NoSubstitutionTemplateLiteral:
        // case SyntaxKind.TemplateExpression:
        // case SyntaxKind.FalseKeyword:
        // case SyntaxKind.NullKeyword:
        // case SyntaxKind.ThisKeyword:
        // case SyntaxKind.TrueKeyword:
        case SyntaxKind.SuperKeyword:
        // case SyntaxKind.NonNullExpression:
        // case SyntaxKind.ExpressionWithTypeArguments:
        // case SyntaxKind.MetaProperty:
        // case SyntaxKind.ImportKeyword: // technically this is only an Expression if it's in a CallExpression
        // case SyntaxKind.MissingDeclaration:
            return true;
        default:
            return false;
    }
}

export function isCallOrNewExpression(node: Node): node is CallExpression /*| NewExpression*/ {
    return node.kind === SyntaxKind.CallExpression || node.kind === SyntaxKind.NewExpression;
}


/**
 * Node test that determines whether a node is a valid type node.
 * This differs from the `isPartOfTypeNode` function which determines whether a node is *part*
 * of a TypeNode.
 */
export function isTypeNode(node: Node): node is TypeNode {
    return isTypeNodeKind(node.kind);
}

/** @internal */
export function isFunctionLikeDeclaration(node: Node): node is FunctionLikeDeclaration {
    return node && isFunctionLikeDeclarationKind(node.kind);
}

function getJSDocTagsWorker(node: Node, noCache?: boolean): readonly JSDocTag[] {
    if (!canHaveJSDoc(node)) return emptyArray;
    let tags = node.jsDoc?.jsDocCache;
    // If cache is 'null', that means we did the work of searching for JSDoc tags and came up with nothing.
    if (tags === undefined || noCache) {
        const comments = getJSDocCommentsAndTags(node, noCache);
        Debug.assert(comments.length < 2 || comments[0] !== comments[1]);
        tags = flatMap(comments, j => isJSDoc(j) ? j.tags : j);
        if (!noCache) {
            node.jsDoc ??= [];
            node.jsDoc.jsDocCache = tags;
        }
    }
    return tags;
}

/** Get the first JSDoc tag of a specified kind, or undefined if not present. */
function getFirstJSDocTag<T extends JSDocTag>(node: Node, predicate: (tag: JSDocTag) => tag is T, noCache?: boolean): T | undefined {
    return find(getJSDocTagsWorker(node, noCache), predicate);
}


/** Gets the JSDoc deprecated tag for the node if present */
export function getJSDocDeprecatedTag(node: Node): JSDocDeprecatedTag | undefined {
    return getFirstJSDocTag(node, isJSDocDeprecatedTag);
}

/**
 * Iterates through the parent chain of a node and performs the callback on each parent until the callback
 * returns a truthy value, then returns that value.
 * If no such value is found, it applies the callback until the parent pointer is undefined or the callback returns "quit"
 * At that point findAncestor returns undefined.
 */
export function findAncestor<T extends Node>(node: Node | undefined, callback: (element: Node) => element is T): T | undefined;
export function findAncestor(node: Node | undefined, callback: (element: Node) => boolean | "quit"): Node | undefined;
export function findAncestor(node: Node | undefined, callback: (element: Node) => boolean | "quit"): Node | undefined {
    while (node) {
        const result = callback(node);
        if (result === "quit") {
            return undefined;
        }
        else if (result) {
            return node;
        }
        node = node.parent;
    }
    return undefined;
}

export function isCallLikeExpression(node: Node): node is CallLikeExpression {
    switch (node.kind) {        
        case SyntaxKind.CallExpression:
        case SyntaxKind.NewExpression:        
            return true;
        default:
            return false;
    }
}

export function isIterationStatement(node: Node, lookInLabeledStatements: false): node is IterationStatement;
export function isIterationStatement(node: Node, lookInLabeledStatements: boolean): node is IterationStatement ;//| LabeledStatement;
export function isIterationStatement(node: Node, lookInLabeledStatements: boolean): node is IterationStatement {
    switch (node.kind) {
        case SyntaxKind.ForStatement:
        case SyntaxKind.ForEachStatement:        
        case SyntaxKind.DoWhileStatement:
        case SyntaxKind.WhileStatement:
            return true;
        // case SyntaxKind.LabeledStatement:
        //     return lookInLabeledStatements && isIterationStatement((node as LabeledStatement).statement, lookInLabeledStatements);
    }

    return false;
}

function isDeclarationKind(kind: SyntaxKind) {
    return kind === SyntaxKind.InlineClosureExpression
        || kind === SyntaxKind.BindingElement
        //|| kind === SyntaxKind.ClassDeclaration
        || kind === SyntaxKind.ClassExpression        
        // || kind === SyntaxKind.ExportSpecifier
        || kind === SyntaxKind.FunctionDeclaration
        || kind === SyntaxKind.FunctionExpression        
        // || kind === SyntaxKind.ImportClause        
        // || kind === SyntaxKind.MethodDeclaration
        // || kind === SyntaxKind.MethodSignature        
        || kind === SyntaxKind.Parameter
        || kind === SyntaxKind.PropertyAssignment
        || kind === SyntaxKind.PropertyDeclaration
        // || kind === SyntaxKind.PropertySignature        
        || kind === SyntaxKind.ShorthandPropertyAssignment        
        || kind === SyntaxKind.TypeParameter
        || kind === SyntaxKind.VariableDeclaration
        || kind === SyntaxKind.JSDocTypedefTag
        || kind === SyntaxKind.JSDocCallbackTag
        || kind === SyntaxKind.JSDocPropertyTag;
}

/** @internal */
export function isDeclaration(node: Node): node is NamedDeclaration {
    if (node.kind === SyntaxKind.TypeParameter) {
        return (node.parent && node.parent.kind !== SyntaxKind.JSDocTemplateTag);
    }

    return isDeclarationKind(node.kind);
}

/** @internal */
export function isBindingPattern(node: Node | undefined): node is BindingPattern {
    if (node) {
        const kind = node.kind;
        return kind === SyntaxKind.ArrayBindingPattern;
            //|| kind === SyntaxKind.ObjectBindingPattern;
    }

    return false;
}

export function isArrayBindingElement(node: Node): node is ArrayBindingElement {
    const kind = node.kind;
    return kind === SyntaxKind.BindingElement;
}

/** @internal */
export function canHaveSymbol(node: Node): node is Declaration {
    // NOTE: This should cover all possible declarations except MissingDeclaration and SemicolonClassElement
    //       since they aren't actually declarations and can't have a symbol.
    switch (node.kind) {
        case SyntaxKind.InlineClosureExpression:
        case SyntaxKind.BinaryExpression:
        case SyntaxKind.BindingElement:
        case SyntaxKind.CallExpression:
        // case SyntaxKind.CallSignature:
        // case SyntaxKind.ClassDeclaration:
        case SyntaxKind.ClassExpression:        
        case SyntaxKind.ElementAccessExpression:                
        case SyntaxKind.FunctionDeclaration:
        case SyntaxKind.FunctionExpression:
        //case SyntaxKind.FunctionType:        
        case SyntaxKind.Identifier:
        //case SyntaxKind.ImportClause:        
        case SyntaxKind.IndexSignature:        
        case SyntaxKind.JSDocCallbackTag:
        case SyntaxKind.JSDocEnumTag:
        case SyntaxKind.JSDocFunctionType:
        case SyntaxKind.JSDocParameterTag:
        case SyntaxKind.JSDocPropertyTag:
        case SyntaxKind.JSDocSignature:
        case SyntaxKind.JSDocTypedefTag:
        case SyntaxKind.JSDocTypeLiteral:    
        //case SyntaxKind.MappedType:
        // case SyntaxKind.MethodDeclaration:
        // case SyntaxKind.MethodSignature:        
        case SyntaxKind.NewExpression:        
        case SyntaxKind.IntLiteral:
        case SyntaxKind.FloatLiteral:
        case SyntaxKind.ObjectLiteralExpression:
        case SyntaxKind.Parameter:
        case SyntaxKind.PropertyAccessExpression:
        case SyntaxKind.PropertyAssignment:
        case SyntaxKind.PropertyDeclaration:
        // case SyntaxKind.PropertySignature:        
        case SyntaxKind.ShorthandPropertyAssignment:
        case SyntaxKind.SourceFile:
        // case SyntaxKind.SpreadAssignment:
        case SyntaxKind.StringLiteral:        
        case SyntaxKind.TypeLiteral:
        case SyntaxKind.TypeParameter:
        case SyntaxKind.VariableDeclaration:
            return true;
        default:
            return false;
    }
}

/** @internal */
export function isFunctionOrModuleBlock(node: Node): boolean {
    return isSourceFile(node) /*|| isModuleBlock(node)*/ || isBlock(node) && isFunctionLike(node.parent);
}

function isDeclarationStatementKind(kind: SyntaxKind) {
    return kind === SyntaxKind.FunctionDeclaration
        // || kind === SyntaxKind.MissingDeclaration
        // || kind === SyntaxKind.ClassDeclaration
        // || kind === SyntaxKind.InterfaceDeclaration
        // || kind === SyntaxKind.TypeAliasDeclaration
        // || kind === SyntaxKind.EnumDeclaration
        // || kind === SyntaxKind.ModuleDeclaration
        // || kind === SyntaxKind.ImportDeclaration
        // || kind === SyntaxKind.ImportEqualsDeclaration
        // || kind === SyntaxKind.ExportDeclaration
        // || kind === SyntaxKind.ExportAssignment
        // || kind === SyntaxKind.NamespaceExportDeclaration;
        ;
}

function isBlockStatement(node: Node): node is Block {
    if (node.kind !== SyntaxKind.Block) return false;
    if (node.parent !== undefined) {
        if (/*node.parent.kind === SyntaxKind.TryStatement ||*/ node.parent.kind === SyntaxKind.CatchClause) {
            return false;
        }
    }
    return !isFunctionBlock(node);
}

function isStatementKindButNotDeclarationKind(kind: SyntaxKind) {
    return kind === SyntaxKind.BreakStatement
        || kind === SyntaxKind.ContinueStatement
        //|| kind === SyntaxKind.DebuggerStatement
        || kind === SyntaxKind.DoWhileStatement
        || kind === SyntaxKind.ExpressionStatement
        || kind === SyntaxKind.EmptyStatement
        || kind === SyntaxKind.ForEachStatement        
        || kind === SyntaxKind.ForStatement
        || kind === SyntaxKind.IfStatement
        //|| kind === SyntaxKind.LabeledStatement
        || kind === SyntaxKind.ReturnStatement
        || kind === SyntaxKind.SwitchStatement        
        || kind === SyntaxKind.VariableStatement
        || kind === SyntaxKind.WhileStatement        
        || kind === SyntaxKind.NotEmittedStatement;
}

export function isStatement(node: Node): node is Statement {
    const kind = node.kind;
    return isStatementKindButNotDeclarationKind(kind)
        || isDeclarationStatementKind(kind)
        || isBlockStatement(node);
}

export function getCombinedModifierFlags(node: Declaration): ModifierFlags {
    return getCombinedFlags(node, getEffectiveModifierFlags);
}

/**
 * Determines whether a node is an expression based only on its kind.
 */
export function isExpression(node: Node): node is Expression {
    return isExpressionKind(skipPartiallyEmittedExpressions(node).kind);
}


function isExpressionKind(kind: SyntaxKind): boolean {
    switch (kind) {
        case SyntaxKind.ConditionalExpression:
        //case SyntaxKind.YieldExpression:
        case SyntaxKind.InlineClosureExpression:
        case SyntaxKind.BinaryExpression:
        case SyntaxKind.SpreadElement:        
        case SyntaxKind.CommaListExpression:
        case SyntaxKind.PartiallyEmittedExpression:        
            return true;
        default:
            return isUnaryExpressionKind(kind);
    }
}


/** @internal */
export function isUnaryExpression(node: Node): node is UnaryExpression {
    return isUnaryExpressionKind(skipPartiallyEmittedExpressions(node).kind);
}

function isUnaryExpressionKind(kind: SyntaxKind): boolean {
    switch (kind) {
        case SyntaxKind.PrefixUnaryExpression:
        case SyntaxKind.PostfixUnaryExpression:        
        //case SyntaxKind.AwaitExpression:    
            return true;
        default:
            return isLeftHandSideExpressionKind(kind);
    }
}

/**
 * If the text of an Identifier matches a keyword (including contextual and TypeScript-specific keywords), returns the
 * SyntaxKind for the matching keyword.
 */
export function identifierToKeywordKind(node: Identifier): KeywordSyntaxKind | undefined {
    const token = stringToToken(node.text as string);
    return token ? tryCast(token, isKeyword) : undefined;
}

/**
 * True if node is of some token syntax kind.
 * For example, this is true for an IfKeyword but not for an IfStatement.
 * Literals are considered tokens, except TemplateLiteral, but does include TemplateHead/Middle/Tail.
 */
export function isToken(n: Node): boolean {
    return isTokenKind(n.kind);
}


/**
 * True if kind is of some token syntax kind.
 * For example, this is true for an IfKeyword but not for an IfStatement.
 * Literals are considered tokens, except TemplateLiteral, but does include TemplateHead/Middle/Tail.
 */
export function isTokenKind(kind: SyntaxKind): boolean {
    return kind >= SyntaxKind.FirstToken && kind <= SyntaxKind.LastToken;
}

/** True if node is of a kind that may contain comment text. */
export function isJSDocCommentContainingNode(node: Node): boolean {
    return node.kind === SyntaxKind.JSDoc
        || node.kind === SyntaxKind.JSDocNamepathType
        || node.kind === SyntaxKind.JSDocText
        // TODO
        // || isJSDocLinkLike(node)
        // || isJSDocTag(node)
        // || isJSDocTypeLiteral(node)
        || isJSDocSignature(node);
}


/** @internal */
export function isNodeKind(kind: SyntaxKind) {
    return kind >= SyntaxKind.FirstNode;
}

export function isMemberName(node: Node): node is MemberName {
    return node.kind === SyntaxKind.Identifier;// || node.kind === SyntaxKind.PrivateIdentifier;
}

export function textSpanEnd(span: TextSpan) {
    return span.start + span.length;
}

export function createTextSpan(start: number, length: number): TextSpan {
    if (start < 0) {
        throw new Error("start < 0");
    }
    if (length < 0) {
        throw new Error("length < 0");
    }

    return { start, length };
}

export function createTextSpanFromBounds(start: number, end: number) {
    return createTextSpan(start, end - start);
}

/**
 * True if has initializer node attached to it.
 *
 * @internal
 */
export function hasInitializer(node: Node): node is HasInitializer {
    return !!(node as HasInitializer).initializer;
}

export function isBreakOrContinueStatement(node: Node): node is BreakOrContinueStatement {
    return node.kind === SyntaxKind.BreakStatement || node.kind === SyntaxKind.ContinueStatement;
}

export function isEntityName(node: Node): node is EntityName {
    const kind = node.kind;
    return kind === SyntaxKind.Identifier;
}

export function isCallChain(node: Node): node is CallChain {
    return false;// no optional chains return isCallExpression(node) && !!(node.flags & NodeFlags.OptionalChain);
}

export function isPropertyName(node: Node): node is PropertyName {
    const kind = node.kind;
    return kind === SyntaxKind.Identifier
        // || kind === SyntaxKind.PrivateIdentifier
        || kind === SyntaxKind.StringLiteral
        || kind === SyntaxKind.IntLiteral
        || kind === SyntaxKind.ComputedPropertyName;
}


/** @internal */
export function isLiteralExpressionOfObject(node: Node) {
    switch (node.kind) {
        case SyntaxKind.ObjectLiteralExpression:
        case SyntaxKind.ArrayLiteralExpression:
        //case SyntaxKind.RegularExpressionLiteral:
        case SyntaxKind.FunctionExpression:
        case SyntaxKind.ClassExpression:
            return true;
    }
    return false;
}

export function isPropertyAccessOrQualifiedName(node: Node): node is PropertyAccessExpression | QualifiedName {
    const kind = node.kind;
    return kind === SyntaxKind.PropertyAccessExpression
        || kind === SyntaxKind.QualifiedName;
}

/** @internal */
export function textRangeContainsPositionInclusive(range: TextRange, position: number): boolean {
    return position >= range.pos && position <= range.end;
}


/** @internal */
export function isLiteralKind(kind: SyntaxKind): kind is LiteralToken["kind"] {
    return SyntaxKind.FirstLiteralToken <= kind && kind <= SyntaxKind.LastLiteralToken;
}

const MAX_SMI_X86 = 0x3fff_ffff;
/** @internal */
export function guessIndentation(lines: string[]) {
    let indentation = MAX_SMI_X86;
    for (const line of lines) {
        if (!line.length) {
            continue;
        }
        let i = 0;
        for (; i < line.length && i < indentation; i++) {
            if (!isWhiteSpaceLike(line.charCodeAt(i))) {
                break;
            }
        }
        if (i < indentation) {
            indentation = i;
        }
        if (indentation === 0) {
            return 0;
        }
    }
    return indentation === MAX_SMI_X86 ? undefined : indentation;
}

export function getOriginalNode(node: Node): Node;
export function getOriginalNode<T extends Node>(node: Node, nodeTest: (node: Node) => node is T): T;
export function getOriginalNode(node: Node | undefined): Node | undefined;
export function getOriginalNode<T extends Node>(node: Node | undefined, nodeTest: (node: Node) => node is T): T | undefined;
export function getOriginalNode<T extends Node>(node: Node | undefined, nodeTest?: (node: Node) => node is T): T | undefined {
    if (node) {
        while (node.original !== undefined) {
            node = node.original;
        }
    }

    if (!node || !nodeTest) {
        return node as T | undefined;
    }

    return nodeTest(node) ? node : undefined;
}

export function isLiteralExpression(node: Node): node is LiteralExpression {
    return isLiteralKind(node.kind);
}

/** True if has initializer node attached to it. */
export function hasOnlyExpressionInitializer(node: Node): node is HasExpressionInitializer {
    switch (node.kind) {
        case SyntaxKind.VariableDeclaration:
        case SyntaxKind.Parameter:
        case SyntaxKind.BindingElement:
        case SyntaxKind.PropertyDeclaration:
        case SyntaxKind.PropertyAssignment:        
            return true;
        default:
            return false;
    }
}

export function hasRestParameter(s: SignatureDeclaration | JSDocSignature): boolean {
    const last = lastOrUndefined<ParameterDeclaration | JSDocParameterTag>(s.parameters);
    return !!last && isRestParameter(last);
}

export function isRestParameter(node: ParameterDeclaration | JSDocParameterTag): boolean {
    const type = isJSDocParameterTag(node) ? (node.typeExpression && node.typeExpression.type) : node.type;
    return (node as ParameterDeclaration).dotDotDotToken !== undefined || 
        (!!type && type.kind === SyntaxKind.JSDocVariadicType) ||
        !!(getEffectiveModifierFlags((node as ParameterDeclaration)) & ModifierFlags.VarArgs);
}

export function walkUpBindingElementsAndPatterns(binding: BindingElement): VariableDeclaration | ParameterDeclaration {
    let node = binding.parent;
    while (isBindingElement(node.parent)) {
        node = node.parent.parent;
    }
    return node.parent;
}

export function isClassLike(node: Node) {//}: node is ClassLikeDeclaration {
    return false;//return node && (node.kind === SyntaxKind.ClassDeclaration || node.kind === SyntaxKind.ClassExpression);
}

export function isConciseBody(node: Node): node is ConciseBody {
    return isBlock(node)
        || isExpression(node);
}

/** @internal */
export function isGeneratedIdentifier(node: Node): node is GeneratedIdentifier {
    return isIdentifier(node) && node.emitNode?.autoGenerate !== undefined;
}

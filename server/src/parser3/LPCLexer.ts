// Generated from grammar/LPCLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class LPCLexer extends antlr.Lexer {
    public static readonly Identifier = 1;
    public static readonly BREAK = 2;
    public static readonly CASE = 3;
    public static readonly CATCH = 4;
    public static readonly CHAR = 5;
    public static readonly CLOSURE = 6;
    public static readonly CONST = 7;
    public static readonly CONTINUE = 8;
    public static readonly DEFAULT = 9;
    public static readonly DO = 10;
    public static readonly ECHO = 11;
    public static readonly ELSE = 12;
    public static readonly ELIF = 13;
    public static readonly ENDIF = 14;
    public static readonly ENUM = 15;
    public static readonly EXTERN = 16;
    public static readonly FLOAT = 17;
    public static readonly FOR = 18;
    public static readonly FOREACH = 19;
    public static readonly GOTO = 20;
    public static readonly HASH = 21;
    public static readonly IF = 22;
    public static readonly IFDEF = 23;
    public static readonly IFNDEF = 24;
    public static readonly IN = 25;
    public static readonly INCLUDE = 26;
    public static readonly INHERIT = 27;
    public static readonly INT = 28;
    public static readonly LINE = 29;
    public static readonly MAPPING = 30;
    public static readonly MIXED = 31;
    public static readonly OBJECT = 32;
    public static readonly PRAGMA = 33;
    public static readonly RETURN = 34;
    public static readonly STATUS = 35;
    public static readonly STRUCT = 36;
    public static readonly STRING = 37;
    public static readonly SYMBOL = 38;
    public static readonly SWITCH = 39;
    public static readonly TYPEDEF = 40;
    public static readonly UNION = 41;
    public static readonly UNKNOWN = 42;
    public static readonly UNDEF = 43;
    public static readonly VOID = 44;
    public static readonly VOLATILE = 45;
    public static readonly WHILE = 46;
    public static readonly PRIVATE = 47;
    public static readonly PROTECTED = 48;
    public static readonly PUBLIC = 49;
    public static readonly STATIC = 50;
    public static readonly NOSHADOW = 51;
    public static readonly NOSAVE = 52;
    public static readonly NOMASK = 53;
    public static readonly VARARGS = 54;
    public static readonly PLUS = 55;
    public static readonly MINUS = 56;
    public static readonly STAR = 57;
    public static readonly DIV = 58;
    public static readonly MOD = 59;
    public static readonly INC = 60;
    public static readonly DEC = 61;
    public static readonly SHL = 62;
    public static readonly SHR = 63;
    public static readonly LT = 64;
    public static readonly GT = 65;
    public static readonly LE = 66;
    public static readonly GE = 67;
    public static readonly EQ = 68;
    public static readonly NE = 69;
    public static readonly AND = 70;
    public static readonly OR = 71;
    public static readonly XOR = 72;
    public static readonly NOT = 73;
    public static readonly BNOT = 74;
    public static readonly AND_AND = 75;
    public static readonly OR_OR = 76;
    public static readonly QUESTION = 77;
    public static readonly COLON = 78;
    public static readonly SEMI = 79;
    public static readonly COMMA = 80;
    public static readonly DOUBLEDOT = 81;
    public static readonly DOT = 82;
    public static readonly SINGLEQUOT = 83;
    public static readonly SUPER_ACCESSOR = 84;
    public static readonly ASSIGN = 85;
    public static readonly ADD_ASSIGN = 86;
    public static readonly SUB_ASSIGN = 87;
    public static readonly MUL_ASSIGN = 88;
    public static readonly DIV_ASSIGN = 89;
    public static readonly MOD_ASSIGN = 90;
    public static readonly OR_ASSIGN = 91;
    public static readonly AND_ASSIGN = 92;
    public static readonly BITAND_ASSIGN = 93;
    public static readonly BITOR_ASSIGN = 94;
    public static readonly XOR_ASSIGN = 95;
    public static readonly SHL_ASSIGN = 96;
    public static readonly ARRAY_OPEN = 97;
    public static readonly ARRAY_CLOSE = 98;
    public static readonly MAPPING_OPEN = 99;
    public static readonly ARROW = 100;
    public static readonly PAREN_OPEN = 101;
    public static readonly PAREN_CLOSE = 102;
    public static readonly CURLY_OPEN = 103;
    public static readonly CURLY_CLOSE = 104;
    public static readonly SQUARE_OPEN = 105;
    public static readonly SQUARE_CLOSE = 106;
    public static readonly BACKSLASH = 107;
    public static readonly IntegerConstant = 108;
    public static readonly FloatingConstant = 109;
    public static readonly HexIntConstant = 110;
    public static readonly STRING_START = 111;
    public static readonly StringLiteral = 112;
    public static readonly CharacterConstant = 113;
    public static readonly CloneObject = 114;
    public static readonly LoadObject = 115;
    public static readonly COMMENT = 116;
    public static readonly LINE_COMMENT = 117;
    public static readonly DEFINE = 118;
    public static readonly WS = 119;
    public static readonly END_DEFINE = 120;
    public static readonly STRING_END = 121;
    public static readonly NEWLINE = 122;
    public static readonly DEFINE_MODE = 1;
    public static readonly STRING_MODE = 2;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS_CHANNEL"
    ];

    public static readonly literalNames = [
        null, null, "'break'", "'case'", "'catch'", "'char'", "'closure'", 
        "'const'", "'continue'", "'default'", "'do'", "'echo'", "'else'", 
        "'elif'", "'endif'", "'enum'", "'extern'", "'float'", "'for'", "'foreach'", 
        "'goto'", "'#'", "'if'", "'ifdef'", "'ifndef'", "'in'", "'include'", 
        "'inherit'", "'int'", "'line'", "'mapping'", "'mixed'", "'object'", 
        "'pragma'", "'return'", "'status'", "'struct'", "'string'", "'symbol'", 
        "'switch'", "'typedef'", "'union'", "'unknown'", "'undef'", "'void'", 
        "'volatile'", "'while'", "'private'", "'protected'", "'public'", 
        "'static'", "'noshadow'", "'nosave'", "'nomask'", "'varargs'", "'+'", 
        "'-'", "'*'", "'/'", "'%'", "'++'", "'--'", "'<<'", "'>>'", "'<'", 
        "'>'", "'<='", "'>='", "'=='", "'!='", "'&'", "'|'", "'^'", "'!'", 
        "'~'", "'&&'", "'||'", "'?'", "':'", "';'", "','", "'..'", "'.'", 
        "'''", "'::'", "'='", "'+='", "'-='", "'*='", "'/='", "'%='", "'||='", 
        "'&&='", "'&='", "'|='", "'^='", "'<<='", "'({'", "'})'", "'(['", 
        "'->'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'\\'", null, 
        null, null, null, null, null, "'clone_object'", "'load_object'", 
        null, null, null, null, "'\\n'", null, "'\\\\n'"
    ];

    public static readonly symbolicNames = [
        null, "Identifier", "BREAK", "CASE", "CATCH", "CHAR", "CLOSURE", 
        "CONST", "CONTINUE", "DEFAULT", "DO", "ECHO", "ELSE", "ELIF", "ENDIF", 
        "ENUM", "EXTERN", "FLOAT", "FOR", "FOREACH", "GOTO", "HASH", "IF", 
        "IFDEF", "IFNDEF", "IN", "INCLUDE", "INHERIT", "INT", "LINE", "MAPPING", 
        "MIXED", "OBJECT", "PRAGMA", "RETURN", "STATUS", "STRUCT", "STRING", 
        "SYMBOL", "SWITCH", "TYPEDEF", "UNION", "UNKNOWN", "UNDEF", "VOID", 
        "VOLATILE", "WHILE", "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", 
        "NOSHADOW", "NOSAVE", "NOMASK", "VARARGS", "PLUS", "MINUS", "STAR", 
        "DIV", "MOD", "INC", "DEC", "SHL", "SHR", "LT", "GT", "LE", "GE", 
        "EQ", "NE", "AND", "OR", "XOR", "NOT", "BNOT", "AND_AND", "OR_OR", 
        "QUESTION", "COLON", "SEMI", "COMMA", "DOUBLEDOT", "DOT", "SINGLEQUOT", 
        "SUPER_ACCESSOR", "ASSIGN", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", 
        "DIV_ASSIGN", "MOD_ASSIGN", "OR_ASSIGN", "AND_ASSIGN", "BITAND_ASSIGN", 
        "BITOR_ASSIGN", "XOR_ASSIGN", "SHL_ASSIGN", "ARRAY_OPEN", "ARRAY_CLOSE", 
        "MAPPING_OPEN", "ARROW", "PAREN_OPEN", "PAREN_CLOSE", "CURLY_OPEN", 
        "CURLY_CLOSE", "SQUARE_OPEN", "SQUARE_CLOSE", "BACKSLASH", "IntegerConstant", 
        "FloatingConstant", "HexIntConstant", "STRING_START", "StringLiteral", 
        "CharacterConstant", "CloneObject", "LoadObject", "COMMENT", "LINE_COMMENT", 
        "DEFINE", "WS", "END_DEFINE", "STRING_END", "NEWLINE"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE", "DEFINE_MODE", "STRING_MODE",
    ];

    public static readonly ruleNames = [
        "BREAK", "CASE", "CATCH", "CHAR", "CLOSURE", "CONST", "CONTINUE", 
        "DEFAULT", "DO", "ECHO", "ELSE", "ELIF", "ENDIF", "ENUM", "EXTERN", 
        "FLOAT", "FOR", "FOREACH", "GOTO", "HASH", "IF", "IFDEF", "IFNDEF", 
        "IN", "INCLUDE", "INHERIT", "INT", "LINE", "MAPPING", "MIXED", "OBJECT", 
        "PRAGMA", "RETURN", "STATUS", "STRUCT", "STRING", "SYMBOL", "SWITCH", 
        "TYPEDEF", "UNION", "UNKNOWN", "UNDEF", "VOID", "VOLATILE", "WHILE", 
        "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", "NOSHADOW", "NOSAVE", 
        "NOMASK", "VARARGS", "PLUS", "MINUS", "STAR", "DIV", "MOD", "INC", 
        "DEC", "SHL", "SHR", "LT", "GT", "LE", "GE", "EQ", "NE", "AND", 
        "OR", "XOR", "NOT", "BNOT", "AND_AND", "OR_OR", "QUESTION", "COLON", 
        "SEMI", "COMMA", "DOUBLEDOT", "DOT", "SINGLEQUOT", "SUPER_ACCESSOR", 
        "ASSIGN", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
        "MOD_ASSIGN", "OR_ASSIGN", "AND_ASSIGN", "BITAND_ASSIGN", "BITOR_ASSIGN", 
        "XOR_ASSIGN", "SHL_ASSIGN", "ARRAY_OPEN", "ARRAY_CLOSE", "MAPPING_OPEN", 
        "ARROW", "PAREN_OPEN", "PAREN_CLOSE", "CURLY_OPEN", "CURLY_CLOSE", 
        "SQUARE_OPEN", "SQUARE_CLOSE", "BACKSLASH", "HexDigit", "IntegerConstant", 
        "FloatingConstant", "HexIntConstant", "STRING_START", "StringLiteral", 
        "CharacterConstant", "CloneObject", "LoadObject", "Identifier", 
        "COMMENT", "LINE_COMMENT", "DEFINE", "WS", "DEFINE_CONTENT", "NEWLINE", 
        "END_DEFINE", "STRING_CONTENT", "STRING_END",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, LPCLexer._ATN, LPCLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "LPCLexer.g4"; }

    public get literalNames(): (string | null)[] { return LPCLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return LPCLexer.symbolicNames; }
    public get ruleNames(): string[] { return LPCLexer.ruleNames; }

    public get serializedATN(): number[] { return LPCLexer._serializedATN; }

    public get channelNames(): string[] { return LPCLexer.channelNames; }

    public get modeNames(): string[] { return LPCLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,122,900,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
        4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,
        12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,
        18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,
        25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
        31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
        38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,
        44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,
        51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,
        57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,
        64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,
        70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,
        77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,
        83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,
        90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,
        96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,
        102,2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,
        2,108,7,108,2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,
        7,113,2,114,7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,
        2,119,7,119,2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,
        7,124,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,
        2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,
        7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,
        10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,
        12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,
        14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,
        17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,
        20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,
        22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,
        24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,
        27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
        29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
        31,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,
        32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,
        34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,
        36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,
        38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,
        40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,
        42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,
        44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,
        45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,
        47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,
        49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,
        50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,
        52,1,52,1,52,1,52,1,53,1,53,1,54,1,54,1,55,1,55,1,56,1,56,1,57,1,
        57,1,58,1,58,1,58,1,59,1,59,1,59,1,60,1,60,1,60,1,61,1,61,1,61,1,
        62,1,62,1,63,1,63,1,64,1,64,1,64,1,65,1,65,1,65,1,66,1,66,1,66,1,
        67,1,67,1,67,1,68,1,68,1,69,1,69,1,70,1,70,1,71,1,71,1,72,1,72,1,
        73,1,73,1,73,1,74,1,74,1,74,1,75,1,75,1,76,1,76,1,77,1,77,1,78,1,
        78,1,79,1,79,1,79,1,80,1,80,1,81,1,81,1,82,1,82,1,82,1,83,1,83,1,
        84,1,84,1,84,1,85,1,85,1,85,1,86,1,86,1,86,1,87,1,87,1,87,1,88,1,
        88,1,88,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,
        92,1,92,1,92,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,
        96,1,96,1,96,1,97,1,97,1,97,1,98,1,98,1,98,1,99,1,99,1,100,1,100,
        1,101,1,101,1,102,1,102,1,103,1,103,1,104,1,104,1,105,1,105,1,106,
        3,106,730,8,106,1,107,4,107,733,8,107,11,107,12,107,734,1,108,5,
        108,738,8,108,10,108,12,108,741,9,108,1,108,1,108,4,108,745,8,108,
        11,108,12,108,746,1,108,1,108,3,108,751,8,108,1,108,4,108,754,8,
        108,11,108,12,108,755,3,108,758,8,108,1,109,1,109,1,109,4,109,763,
        8,109,11,109,12,109,764,1,110,1,110,1,110,1,110,1,111,1,111,5,111,
        773,8,111,10,111,12,111,776,9,111,1,111,1,111,1,112,1,112,1,112,
        1,112,3,112,784,8,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,
        1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,114,1,114,1,114,
        1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,115,1,115,
        5,115,815,8,115,10,115,12,115,818,9,115,1,115,1,115,1,116,1,116,
        1,116,1,116,5,116,826,8,116,10,116,12,116,829,9,116,1,116,1,116,
        1,116,1,116,1,116,1,117,1,117,1,117,1,117,5,117,840,8,117,10,117,
        12,117,843,9,117,1,117,1,117,1,117,1,117,1,118,1,118,1,118,1,118,
        1,118,1,118,1,118,1,118,1,118,1,118,1,119,4,119,860,8,119,11,119,
        12,119,861,1,119,1,119,1,120,4,120,867,8,120,11,120,12,120,868,1,
        120,1,120,3,120,873,8,120,1,120,1,120,3,120,877,8,120,1,120,1,120,
        1,121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,122,1,123,1,123,
        1,123,3,123,893,8,123,1,123,1,123,1,124,1,124,1,124,1,124,2,827,
        841,0,125,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,
        25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,
        47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,
        69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,45,
        91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,107,54,109,55,
        111,56,113,57,115,58,117,59,119,60,121,61,123,62,125,63,127,64,129,
        65,131,66,133,67,135,68,137,69,139,70,141,71,143,72,145,73,147,74,
        149,75,151,76,153,77,155,78,157,79,159,80,161,81,163,82,165,83,167,
        84,169,85,171,86,173,87,175,88,177,89,179,90,181,91,183,92,185,93,
        187,94,189,95,191,96,193,97,195,98,197,99,199,100,201,101,203,102,
        205,103,207,104,209,105,211,106,213,107,215,0,217,108,219,109,221,
        110,223,111,225,112,227,113,229,114,231,115,233,1,235,116,237,117,
        239,118,241,119,243,0,245,122,247,120,249,0,251,121,3,0,1,2,12,3,
        0,48,57,65,70,97,102,1,0,48,57,2,0,69,69,101,101,2,0,43,43,45,45,
        2,0,88,88,120,120,4,0,10,10,13,13,39,39,92,92,4,0,36,36,65,90,95,
        95,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,2,0,
        10,10,92,92,1,0,10,10,3,0,10,10,34,34,92,92,913,0,3,1,0,0,0,0,5,
        1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
        0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,
        0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,
        0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,
        0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,
        0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,
        0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,
        0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,
        0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,
        0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,
        1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,
        0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,
        0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,
        133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,
        0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,
        1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,
        0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,
        0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,
        179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,
        0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,
        1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,
        0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,217,1,
        0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,0,
        227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,0,
        0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,1,243,1,0,0,0,1,245,
        1,0,0,0,1,247,1,0,0,0,2,249,1,0,0,0,2,251,1,0,0,0,3,253,1,0,0,0,
        5,259,1,0,0,0,7,264,1,0,0,0,9,270,1,0,0,0,11,275,1,0,0,0,13,283,
        1,0,0,0,15,289,1,0,0,0,17,298,1,0,0,0,19,306,1,0,0,0,21,309,1,0,
        0,0,23,314,1,0,0,0,25,319,1,0,0,0,27,324,1,0,0,0,29,330,1,0,0,0,
        31,335,1,0,0,0,33,342,1,0,0,0,35,348,1,0,0,0,37,352,1,0,0,0,39,360,
        1,0,0,0,41,365,1,0,0,0,43,367,1,0,0,0,45,370,1,0,0,0,47,376,1,0,
        0,0,49,383,1,0,0,0,51,386,1,0,0,0,53,394,1,0,0,0,55,402,1,0,0,0,
        57,406,1,0,0,0,59,411,1,0,0,0,61,419,1,0,0,0,63,425,1,0,0,0,65,432,
        1,0,0,0,67,439,1,0,0,0,69,446,1,0,0,0,71,453,1,0,0,0,73,460,1,0,
        0,0,75,467,1,0,0,0,77,474,1,0,0,0,79,481,1,0,0,0,81,489,1,0,0,0,
        83,495,1,0,0,0,85,503,1,0,0,0,87,509,1,0,0,0,89,514,1,0,0,0,91,523,
        1,0,0,0,93,529,1,0,0,0,95,537,1,0,0,0,97,547,1,0,0,0,99,554,1,0,
        0,0,101,561,1,0,0,0,103,570,1,0,0,0,105,577,1,0,0,0,107,584,1,0,
        0,0,109,592,1,0,0,0,111,594,1,0,0,0,113,596,1,0,0,0,115,598,1,0,
        0,0,117,600,1,0,0,0,119,602,1,0,0,0,121,605,1,0,0,0,123,608,1,0,
        0,0,125,611,1,0,0,0,127,614,1,0,0,0,129,616,1,0,0,0,131,618,1,0,
        0,0,133,621,1,0,0,0,135,624,1,0,0,0,137,627,1,0,0,0,139,630,1,0,
        0,0,141,632,1,0,0,0,143,634,1,0,0,0,145,636,1,0,0,0,147,638,1,0,
        0,0,149,640,1,0,0,0,151,643,1,0,0,0,153,646,1,0,0,0,155,648,1,0,
        0,0,157,650,1,0,0,0,159,652,1,0,0,0,161,654,1,0,0,0,163,657,1,0,
        0,0,165,659,1,0,0,0,167,661,1,0,0,0,169,664,1,0,0,0,171,666,1,0,
        0,0,173,669,1,0,0,0,175,672,1,0,0,0,177,675,1,0,0,0,179,678,1,0,
        0,0,181,681,1,0,0,0,183,685,1,0,0,0,185,689,1,0,0,0,187,692,1,0,
        0,0,189,695,1,0,0,0,191,698,1,0,0,0,193,702,1,0,0,0,195,705,1,0,
        0,0,197,708,1,0,0,0,199,711,1,0,0,0,201,714,1,0,0,0,203,716,1,0,
        0,0,205,718,1,0,0,0,207,720,1,0,0,0,209,722,1,0,0,0,211,724,1,0,
        0,0,213,726,1,0,0,0,215,729,1,0,0,0,217,732,1,0,0,0,219,739,1,0,
        0,0,221,759,1,0,0,0,223,766,1,0,0,0,225,770,1,0,0,0,227,779,1,0,
        0,0,229,787,1,0,0,0,231,800,1,0,0,0,233,812,1,0,0,0,235,821,1,0,
        0,0,237,835,1,0,0,0,239,848,1,0,0,0,241,859,1,0,0,0,243,872,1,0,
        0,0,245,880,1,0,0,0,247,885,1,0,0,0,249,892,1,0,0,0,251,896,1,0,
        0,0,253,254,5,98,0,0,254,255,5,114,0,0,255,256,5,101,0,0,256,257,
        5,97,0,0,257,258,5,107,0,0,258,4,1,0,0,0,259,260,5,99,0,0,260,261,
        5,97,0,0,261,262,5,115,0,0,262,263,5,101,0,0,263,6,1,0,0,0,264,265,
        5,99,0,0,265,266,5,97,0,0,266,267,5,116,0,0,267,268,5,99,0,0,268,
        269,5,104,0,0,269,8,1,0,0,0,270,271,5,99,0,0,271,272,5,104,0,0,272,
        273,5,97,0,0,273,274,5,114,0,0,274,10,1,0,0,0,275,276,5,99,0,0,276,
        277,5,108,0,0,277,278,5,111,0,0,278,279,5,115,0,0,279,280,5,117,
        0,0,280,281,5,114,0,0,281,282,5,101,0,0,282,12,1,0,0,0,283,284,5,
        99,0,0,284,285,5,111,0,0,285,286,5,110,0,0,286,287,5,115,0,0,287,
        288,5,116,0,0,288,14,1,0,0,0,289,290,5,99,0,0,290,291,5,111,0,0,
        291,292,5,110,0,0,292,293,5,116,0,0,293,294,5,105,0,0,294,295,5,
        110,0,0,295,296,5,117,0,0,296,297,5,101,0,0,297,16,1,0,0,0,298,299,
        5,100,0,0,299,300,5,101,0,0,300,301,5,102,0,0,301,302,5,97,0,0,302,
        303,5,117,0,0,303,304,5,108,0,0,304,305,5,116,0,0,305,18,1,0,0,0,
        306,307,5,100,0,0,307,308,5,111,0,0,308,20,1,0,0,0,309,310,5,101,
        0,0,310,311,5,99,0,0,311,312,5,104,0,0,312,313,5,111,0,0,313,22,
        1,0,0,0,314,315,5,101,0,0,315,316,5,108,0,0,316,317,5,115,0,0,317,
        318,5,101,0,0,318,24,1,0,0,0,319,320,5,101,0,0,320,321,5,108,0,0,
        321,322,5,105,0,0,322,323,5,102,0,0,323,26,1,0,0,0,324,325,5,101,
        0,0,325,326,5,110,0,0,326,327,5,100,0,0,327,328,5,105,0,0,328,329,
        5,102,0,0,329,28,1,0,0,0,330,331,5,101,0,0,331,332,5,110,0,0,332,
        333,5,117,0,0,333,334,5,109,0,0,334,30,1,0,0,0,335,336,5,101,0,0,
        336,337,5,120,0,0,337,338,5,116,0,0,338,339,5,101,0,0,339,340,5,
        114,0,0,340,341,5,110,0,0,341,32,1,0,0,0,342,343,5,102,0,0,343,344,
        5,108,0,0,344,345,5,111,0,0,345,346,5,97,0,0,346,347,5,116,0,0,347,
        34,1,0,0,0,348,349,5,102,0,0,349,350,5,111,0,0,350,351,5,114,0,0,
        351,36,1,0,0,0,352,353,5,102,0,0,353,354,5,111,0,0,354,355,5,114,
        0,0,355,356,5,101,0,0,356,357,5,97,0,0,357,358,5,99,0,0,358,359,
        5,104,0,0,359,38,1,0,0,0,360,361,5,103,0,0,361,362,5,111,0,0,362,
        363,5,116,0,0,363,364,5,111,0,0,364,40,1,0,0,0,365,366,5,35,0,0,
        366,42,1,0,0,0,367,368,5,105,0,0,368,369,5,102,0,0,369,44,1,0,0,
        0,370,371,5,105,0,0,371,372,5,102,0,0,372,373,5,100,0,0,373,374,
        5,101,0,0,374,375,5,102,0,0,375,46,1,0,0,0,376,377,5,105,0,0,377,
        378,5,102,0,0,378,379,5,110,0,0,379,380,5,100,0,0,380,381,5,101,
        0,0,381,382,5,102,0,0,382,48,1,0,0,0,383,384,5,105,0,0,384,385,5,
        110,0,0,385,50,1,0,0,0,386,387,5,105,0,0,387,388,5,110,0,0,388,389,
        5,99,0,0,389,390,5,108,0,0,390,391,5,117,0,0,391,392,5,100,0,0,392,
        393,5,101,0,0,393,52,1,0,0,0,394,395,5,105,0,0,395,396,5,110,0,0,
        396,397,5,104,0,0,397,398,5,101,0,0,398,399,5,114,0,0,399,400,5,
        105,0,0,400,401,5,116,0,0,401,54,1,0,0,0,402,403,5,105,0,0,403,404,
        5,110,0,0,404,405,5,116,0,0,405,56,1,0,0,0,406,407,5,108,0,0,407,
        408,5,105,0,0,408,409,5,110,0,0,409,410,5,101,0,0,410,58,1,0,0,0,
        411,412,5,109,0,0,412,413,5,97,0,0,413,414,5,112,0,0,414,415,5,112,
        0,0,415,416,5,105,0,0,416,417,5,110,0,0,417,418,5,103,0,0,418,60,
        1,0,0,0,419,420,5,109,0,0,420,421,5,105,0,0,421,422,5,120,0,0,422,
        423,5,101,0,0,423,424,5,100,0,0,424,62,1,0,0,0,425,426,5,111,0,0,
        426,427,5,98,0,0,427,428,5,106,0,0,428,429,5,101,0,0,429,430,5,99,
        0,0,430,431,5,116,0,0,431,64,1,0,0,0,432,433,5,112,0,0,433,434,5,
        114,0,0,434,435,5,97,0,0,435,436,5,103,0,0,436,437,5,109,0,0,437,
        438,5,97,0,0,438,66,1,0,0,0,439,440,5,114,0,0,440,441,5,101,0,0,
        441,442,5,116,0,0,442,443,5,117,0,0,443,444,5,114,0,0,444,445,5,
        110,0,0,445,68,1,0,0,0,446,447,5,115,0,0,447,448,5,116,0,0,448,449,
        5,97,0,0,449,450,5,116,0,0,450,451,5,117,0,0,451,452,5,115,0,0,452,
        70,1,0,0,0,453,454,5,115,0,0,454,455,5,116,0,0,455,456,5,114,0,0,
        456,457,5,117,0,0,457,458,5,99,0,0,458,459,5,116,0,0,459,72,1,0,
        0,0,460,461,5,115,0,0,461,462,5,116,0,0,462,463,5,114,0,0,463,464,
        5,105,0,0,464,465,5,110,0,0,465,466,5,103,0,0,466,74,1,0,0,0,467,
        468,5,115,0,0,468,469,5,121,0,0,469,470,5,109,0,0,470,471,5,98,0,
        0,471,472,5,111,0,0,472,473,5,108,0,0,473,76,1,0,0,0,474,475,5,115,
        0,0,475,476,5,119,0,0,476,477,5,105,0,0,477,478,5,116,0,0,478,479,
        5,99,0,0,479,480,5,104,0,0,480,78,1,0,0,0,481,482,5,116,0,0,482,
        483,5,121,0,0,483,484,5,112,0,0,484,485,5,101,0,0,485,486,5,100,
        0,0,486,487,5,101,0,0,487,488,5,102,0,0,488,80,1,0,0,0,489,490,5,
        117,0,0,490,491,5,110,0,0,491,492,5,105,0,0,492,493,5,111,0,0,493,
        494,5,110,0,0,494,82,1,0,0,0,495,496,5,117,0,0,496,497,5,110,0,0,
        497,498,5,107,0,0,498,499,5,110,0,0,499,500,5,111,0,0,500,501,5,
        119,0,0,501,502,5,110,0,0,502,84,1,0,0,0,503,504,5,117,0,0,504,505,
        5,110,0,0,505,506,5,100,0,0,506,507,5,101,0,0,507,508,5,102,0,0,
        508,86,1,0,0,0,509,510,5,118,0,0,510,511,5,111,0,0,511,512,5,105,
        0,0,512,513,5,100,0,0,513,88,1,0,0,0,514,515,5,118,0,0,515,516,5,
        111,0,0,516,517,5,108,0,0,517,518,5,97,0,0,518,519,5,116,0,0,519,
        520,5,105,0,0,520,521,5,108,0,0,521,522,5,101,0,0,522,90,1,0,0,0,
        523,524,5,119,0,0,524,525,5,104,0,0,525,526,5,105,0,0,526,527,5,
        108,0,0,527,528,5,101,0,0,528,92,1,0,0,0,529,530,5,112,0,0,530,531,
        5,114,0,0,531,532,5,105,0,0,532,533,5,118,0,0,533,534,5,97,0,0,534,
        535,5,116,0,0,535,536,5,101,0,0,536,94,1,0,0,0,537,538,5,112,0,0,
        538,539,5,114,0,0,539,540,5,111,0,0,540,541,5,116,0,0,541,542,5,
        101,0,0,542,543,5,99,0,0,543,544,5,116,0,0,544,545,5,101,0,0,545,
        546,5,100,0,0,546,96,1,0,0,0,547,548,5,112,0,0,548,549,5,117,0,0,
        549,550,5,98,0,0,550,551,5,108,0,0,551,552,5,105,0,0,552,553,5,99,
        0,0,553,98,1,0,0,0,554,555,5,115,0,0,555,556,5,116,0,0,556,557,5,
        97,0,0,557,558,5,116,0,0,558,559,5,105,0,0,559,560,5,99,0,0,560,
        100,1,0,0,0,561,562,5,110,0,0,562,563,5,111,0,0,563,564,5,115,0,
        0,564,565,5,104,0,0,565,566,5,97,0,0,566,567,5,100,0,0,567,568,5,
        111,0,0,568,569,5,119,0,0,569,102,1,0,0,0,570,571,5,110,0,0,571,
        572,5,111,0,0,572,573,5,115,0,0,573,574,5,97,0,0,574,575,5,118,0,
        0,575,576,5,101,0,0,576,104,1,0,0,0,577,578,5,110,0,0,578,579,5,
        111,0,0,579,580,5,109,0,0,580,581,5,97,0,0,581,582,5,115,0,0,582,
        583,5,107,0,0,583,106,1,0,0,0,584,585,5,118,0,0,585,586,5,97,0,0,
        586,587,5,114,0,0,587,588,5,97,0,0,588,589,5,114,0,0,589,590,5,103,
        0,0,590,591,5,115,0,0,591,108,1,0,0,0,592,593,5,43,0,0,593,110,1,
        0,0,0,594,595,5,45,0,0,595,112,1,0,0,0,596,597,5,42,0,0,597,114,
        1,0,0,0,598,599,5,47,0,0,599,116,1,0,0,0,600,601,5,37,0,0,601,118,
        1,0,0,0,602,603,5,43,0,0,603,604,5,43,0,0,604,120,1,0,0,0,605,606,
        5,45,0,0,606,607,5,45,0,0,607,122,1,0,0,0,608,609,5,60,0,0,609,610,
        5,60,0,0,610,124,1,0,0,0,611,612,5,62,0,0,612,613,5,62,0,0,613,126,
        1,0,0,0,614,615,5,60,0,0,615,128,1,0,0,0,616,617,5,62,0,0,617,130,
        1,0,0,0,618,619,5,60,0,0,619,620,5,61,0,0,620,132,1,0,0,0,621,622,
        5,62,0,0,622,623,5,61,0,0,623,134,1,0,0,0,624,625,5,61,0,0,625,626,
        5,61,0,0,626,136,1,0,0,0,627,628,5,33,0,0,628,629,5,61,0,0,629,138,
        1,0,0,0,630,631,5,38,0,0,631,140,1,0,0,0,632,633,5,124,0,0,633,142,
        1,0,0,0,634,635,5,94,0,0,635,144,1,0,0,0,636,637,5,33,0,0,637,146,
        1,0,0,0,638,639,5,126,0,0,639,148,1,0,0,0,640,641,5,38,0,0,641,642,
        5,38,0,0,642,150,1,0,0,0,643,644,5,124,0,0,644,645,5,124,0,0,645,
        152,1,0,0,0,646,647,5,63,0,0,647,154,1,0,0,0,648,649,5,58,0,0,649,
        156,1,0,0,0,650,651,5,59,0,0,651,158,1,0,0,0,652,653,5,44,0,0,653,
        160,1,0,0,0,654,655,5,46,0,0,655,656,5,46,0,0,656,162,1,0,0,0,657,
        658,5,46,0,0,658,164,1,0,0,0,659,660,5,39,0,0,660,166,1,0,0,0,661,
        662,5,58,0,0,662,663,5,58,0,0,663,168,1,0,0,0,664,665,5,61,0,0,665,
        170,1,0,0,0,666,667,5,43,0,0,667,668,5,61,0,0,668,172,1,0,0,0,669,
        670,5,45,0,0,670,671,5,61,0,0,671,174,1,0,0,0,672,673,5,42,0,0,673,
        674,5,61,0,0,674,176,1,0,0,0,675,676,5,47,0,0,676,677,5,61,0,0,677,
        178,1,0,0,0,678,679,5,37,0,0,679,680,5,61,0,0,680,180,1,0,0,0,681,
        682,5,124,0,0,682,683,5,124,0,0,683,684,5,61,0,0,684,182,1,0,0,0,
        685,686,5,38,0,0,686,687,5,38,0,0,687,688,5,61,0,0,688,184,1,0,0,
        0,689,690,5,38,0,0,690,691,5,61,0,0,691,186,1,0,0,0,692,693,5,124,
        0,0,693,694,5,61,0,0,694,188,1,0,0,0,695,696,5,94,0,0,696,697,5,
        61,0,0,697,190,1,0,0,0,698,699,5,60,0,0,699,700,5,60,0,0,700,701,
        5,61,0,0,701,192,1,0,0,0,702,703,5,40,0,0,703,704,5,123,0,0,704,
        194,1,0,0,0,705,706,5,125,0,0,706,707,5,41,0,0,707,196,1,0,0,0,708,
        709,5,40,0,0,709,710,5,91,0,0,710,198,1,0,0,0,711,712,5,45,0,0,712,
        713,5,62,0,0,713,200,1,0,0,0,714,715,5,40,0,0,715,202,1,0,0,0,716,
        717,5,41,0,0,717,204,1,0,0,0,718,719,5,123,0,0,719,206,1,0,0,0,720,
        721,5,125,0,0,721,208,1,0,0,0,722,723,5,91,0,0,723,210,1,0,0,0,724,
        725,5,93,0,0,725,212,1,0,0,0,726,727,5,92,0,0,727,214,1,0,0,0,728,
        730,7,0,0,0,729,728,1,0,0,0,730,216,1,0,0,0,731,733,7,1,0,0,732,
        731,1,0,0,0,733,734,1,0,0,0,734,732,1,0,0,0,734,735,1,0,0,0,735,
        218,1,0,0,0,736,738,7,1,0,0,737,736,1,0,0,0,738,741,1,0,0,0,739,
        737,1,0,0,0,739,740,1,0,0,0,740,742,1,0,0,0,741,739,1,0,0,0,742,
        744,5,46,0,0,743,745,7,1,0,0,744,743,1,0,0,0,745,746,1,0,0,0,746,
        744,1,0,0,0,746,747,1,0,0,0,747,757,1,0,0,0,748,750,7,2,0,0,749,
        751,7,3,0,0,750,749,1,0,0,0,750,751,1,0,0,0,751,753,1,0,0,0,752,
        754,7,1,0,0,753,752,1,0,0,0,754,755,1,0,0,0,755,753,1,0,0,0,755,
        756,1,0,0,0,756,758,1,0,0,0,757,748,1,0,0,0,757,758,1,0,0,0,758,
        220,1,0,0,0,759,760,5,48,0,0,760,762,7,4,0,0,761,763,3,215,106,0,
        762,761,1,0,0,0,763,764,1,0,0,0,764,762,1,0,0,0,764,765,1,0,0,0,
        765,222,1,0,0,0,766,767,5,34,0,0,767,768,1,0,0,0,768,769,6,110,0,
        0,769,224,1,0,0,0,770,774,3,223,110,0,771,773,3,249,123,0,772,771,
        1,0,0,0,773,776,1,0,0,0,774,772,1,0,0,0,774,775,1,0,0,0,775,777,
        1,0,0,0,776,774,1,0,0,0,777,778,3,251,124,0,778,226,1,0,0,0,779,
        783,5,39,0,0,780,784,8,5,0,0,781,782,5,92,0,0,782,784,9,0,0,0,783,
        780,1,0,0,0,783,781,1,0,0,0,784,785,1,0,0,0,785,786,5,39,0,0,786,
        228,1,0,0,0,787,788,5,99,0,0,788,789,5,108,0,0,789,790,5,111,0,0,
        790,791,5,110,0,0,791,792,5,101,0,0,792,793,5,95,0,0,793,794,5,111,
        0,0,794,795,5,98,0,0,795,796,5,106,0,0,796,797,5,101,0,0,797,798,
        5,99,0,0,798,799,5,116,0,0,799,230,1,0,0,0,800,801,5,108,0,0,801,
        802,5,111,0,0,802,803,5,97,0,0,803,804,5,100,0,0,804,805,5,95,0,
        0,805,806,5,111,0,0,806,807,5,98,0,0,807,808,5,106,0,0,808,809,5,
        101,0,0,809,810,5,99,0,0,810,811,5,116,0,0,811,232,1,0,0,0,812,816,
        7,6,0,0,813,815,7,7,0,0,814,813,1,0,0,0,815,818,1,0,0,0,816,814,
        1,0,0,0,816,817,1,0,0,0,817,819,1,0,0,0,818,816,1,0,0,0,819,820,
        6,115,1,0,820,234,1,0,0,0,821,822,5,47,0,0,822,823,5,42,0,0,823,
        827,1,0,0,0,824,826,9,0,0,0,825,824,1,0,0,0,826,829,1,0,0,0,827,
        828,1,0,0,0,827,825,1,0,0,0,828,830,1,0,0,0,829,827,1,0,0,0,830,
        831,5,42,0,0,831,832,5,47,0,0,832,833,1,0,0,0,833,834,6,116,2,0,
        834,236,1,0,0,0,835,836,5,47,0,0,836,837,5,47,0,0,837,841,1,0,0,
        0,838,840,9,0,0,0,839,838,1,0,0,0,840,843,1,0,0,0,841,842,1,0,0,
        0,841,839,1,0,0,0,842,844,1,0,0,0,843,841,1,0,0,0,844,845,5,10,0,
        0,845,846,1,0,0,0,846,847,6,117,2,0,847,238,1,0,0,0,848,849,3,41,
        19,0,849,850,5,100,0,0,850,851,5,101,0,0,851,852,5,102,0,0,852,853,
        5,105,0,0,853,854,5,110,0,0,854,855,5,101,0,0,855,856,1,0,0,0,856,
        857,6,118,3,0,857,240,1,0,0,0,858,860,7,8,0,0,859,858,1,0,0,0,860,
        861,1,0,0,0,861,859,1,0,0,0,861,862,1,0,0,0,862,863,1,0,0,0,863,
        864,6,119,4,0,864,242,1,0,0,0,865,867,8,9,0,0,866,865,1,0,0,0,867,
        868,1,0,0,0,868,866,1,0,0,0,868,869,1,0,0,0,869,873,1,0,0,0,870,
        871,5,92,0,0,871,873,8,10,0,0,872,866,1,0,0,0,872,870,1,0,0,0,873,
        876,1,0,0,0,874,875,5,92,0,0,875,877,5,10,0,0,876,874,1,0,0,0,876,
        877,1,0,0,0,877,878,1,0,0,0,878,879,6,120,5,0,879,244,1,0,0,0,880,
        881,5,92,0,0,881,882,5,10,0,0,882,883,1,0,0,0,883,884,6,121,5,0,
        884,246,1,0,0,0,885,886,5,10,0,0,886,887,1,0,0,0,887,888,6,122,6,
        0,888,248,1,0,0,0,889,893,8,11,0,0,890,891,5,92,0,0,891,893,9,0,
        0,0,892,889,1,0,0,0,892,890,1,0,0,0,893,894,1,0,0,0,894,895,6,123,
        5,0,895,250,1,0,0,0,896,897,5,34,0,0,897,898,1,0,0,0,898,899,6,124,
        7,0,899,252,1,0,0,0,21,0,1,2,729,734,739,746,750,755,757,764,774,
        783,816,827,841,861,868,872,876,892,8,2,2,0,7,1,0,0,2,0,5,1,0,0,
        1,0,3,0,0,4,0,0,2,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!LPCLexer.__ATN) {
            LPCLexer.__ATN = new antlr.ATNDeserializer().deserialize(LPCLexer._serializedATN);
        }

        return LPCLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(LPCLexer.literalNames, LPCLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return LPCLexer.vocabulary;
    }

    private static readonly decisionsToDFA = LPCLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}
// Generated from grammar/LPCPreprocessorLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class LPCPreprocessorLexer extends antlr.Lexer {
    public static readonly SHARP = 1;
    public static readonly CODE = 2;
    public static readonly INCLUDE = 3;
    public static readonly PRAGMA = 4;
    public static readonly DEFINE = 5;
    public static readonly DEFINED = 6;
    public static readonly IF = 7;
    public static readonly ELIF = 8;
    public static readonly ELSE = 9;
    public static readonly UNDEF = 10;
    public static readonly IFDEF = 11;
    public static readonly IFNDEF = 12;
    public static readonly ENDIF = 13;
    public static readonly BANG = 14;
    public static readonly LPAREN = 15;
    public static readonly RPAREN = 16;
    public static readonly EQUAL = 17;
    public static readonly NOTEQUAL = 18;
    public static readonly AND = 19;
    public static readonly OR = 20;
    public static readonly LT = 21;
    public static readonly GT = 22;
    public static readonly LE = 23;
    public static readonly GE = 24;
    public static readonly DIRECTIVE_WHITESPACES = 25;
    public static readonly DIRECTIVE_STRING = 26;
    public static readonly CONDITIONAL_SYMBOL = 27;
    public static readonly DECIMAL_LITERAL = 28;
    public static readonly FLOAT = 29;
    public static readonly NEW_LINE = 30;
    public static readonly DIRECITVE_COMMENT = 31;
    public static readonly DIRECITVE_LINE_COMMENT = 32;
    public static readonly DIRECITVE_NEW_LINE = 33;
    public static readonly DIRECITVE_TEXT_NEW_LINE = 34;
    public static readonly TEXT = 35;
    public static readonly SLASH = 36;
    public static readonly DIRECTIVE_MODE = 1;
    public static readonly DIRECTIVE_DEFINE = 2;
    public static readonly DIRECTIVE_TEXT = 3;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS_CHANNEL"
    ];

    public static readonly literalNames = [
        null, "'#'", null, null, "'pragma'", null, "'defined'", "'if'", 
        "'elif'", "'else'", "'undef'", "'ifdef'", "'ifndef'", "'endif'", 
        "'!'", "'('", "')'", "'=='", "'!='", "'&&'", "'||'", "'<'", "'>'", 
        "'<='", "'>='"
    ];

    public static readonly symbolicNames = [
        null, "SHARP", "CODE", "INCLUDE", "PRAGMA", "DEFINE", "DEFINED", 
        "IF", "ELIF", "ELSE", "UNDEF", "IFDEF", "IFNDEF", "ENDIF", "BANG", 
        "LPAREN", "RPAREN", "EQUAL", "NOTEQUAL", "AND", "OR", "LT", "GT", 
        "LE", "GE", "DIRECTIVE_WHITESPACES", "DIRECTIVE_STRING", "CONDITIONAL_SYMBOL", 
        "DECIMAL_LITERAL", "FLOAT", "NEW_LINE", "DIRECITVE_COMMENT", "DIRECITVE_LINE_COMMENT", 
        "DIRECITVE_NEW_LINE", "DIRECITVE_TEXT_NEW_LINE", "TEXT", "SLASH"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE", "DIRECTIVE_MODE", "DIRECTIVE_DEFINE", "DIRECTIVE_TEXT",
    ];

    public static readonly ruleNames = [
        "SHARP", "COMMENT", "LINE_COMMENT", "SLASH", "CHARACTER_LITERAL", 
        "QUOTE_STRING", "STRING", "CODE", "INCLUDE", "PRAGMA", "DEFINE", 
        "DEFINED", "IF", "ELIF", "ELSE", "UNDEF", "IFDEF", "IFNDEF", "ENDIF", 
        "BANG", "LPAREN", "RPAREN", "EQUAL", "NOTEQUAL", "AND", "OR", "LT", 
        "GT", "LE", "GE", "DIRECTIVE_WHITESPACES", "DIRECTIVE_STRING", "CONDITIONAL_SYMBOL", 
        "DECIMAL_LITERAL", "FLOAT", "NEW_LINE", "DIRECITVE_COMMENT", "DIRECITVE_LINE_COMMENT", 
        "DIRECITVE_NEW_LINE", "DIRECTIVE_DEFINE_CONDITIONAL_SYMBOL", "DIRECITVE_TEXT_NEW_LINE", 
        "BACK_SLASH_ESCAPE", "TEXT_NEW_LINE", "DIRECTIVE_COMMENT", "DIRECTIVE_LINE_COMMENT", 
        "DIRECTIVE_SLASH", "TEXT", "EscapeSequence", "OctalEscape", "UnicodeEscape", 
        "HexDigit", "StringFragment", "LETTER", "A", "B", "C", "D", "E", 
        "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
        "S", "T", "U", "V", "W", "X", "Y", "Z",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, LPCPreprocessorLexer._ATN, LPCPreprocessorLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "LPCPreprocessorLexer.g4"; }

    public get literalNames(): (string | null)[] { return LPCPreprocessorLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return LPCPreprocessorLexer.symbolicNames; }
    public get ruleNames(): string[] { return LPCPreprocessorLexer.ruleNames; }

    public get serializedATN(): number[] { return LPCPreprocessorLexer._serializedATN; }

    public get channelNames(): string[] { return LPCPreprocessorLexer.channelNames; }

    public get modeNames(): string[] { return LPCPreprocessorLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,36,592,6,-1,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
        4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,
        2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,
        7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,
        2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,
        7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,
        2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,
        7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,
        2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,
        7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,
        2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,
        7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,
        2,77,7,77,2,78,7,78,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,171,8,1,
        10,1,12,1,174,9,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,185,8,
        2,10,2,12,2,188,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,3,4,199,
        8,4,1,4,1,4,1,5,1,5,1,5,5,5,206,8,5,10,5,12,5,209,9,5,1,5,1,5,1,
        6,1,6,1,6,1,6,1,7,1,7,1,7,4,7,220,8,7,11,7,12,7,221,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,4,8,233,8,8,11,8,12,8,234,1,8,1,8,1,9,1,
        9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,4,10,256,8,10,11,10,12,10,257,1,10,1,10,1,11,1,11,1,11,1,11,
        1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,
        1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,
        1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,
        1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,22,1,23,
        1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,27,1,27,1,28,
        1,28,1,28,1,29,1,29,1,29,1,30,4,30,337,8,30,11,30,12,30,338,1,30,
        1,30,1,31,1,31,1,32,1,32,1,32,5,32,348,8,32,10,32,12,32,351,9,32,
        1,33,4,33,354,8,33,11,33,12,33,355,1,34,4,34,359,8,34,11,34,12,34,
        360,1,34,1,34,5,34,365,8,34,10,34,12,34,368,9,34,1,34,1,34,4,34,
        372,8,34,11,34,12,34,373,3,34,376,8,34,1,35,3,35,379,8,35,1,35,1,
        35,1,35,1,35,1,36,1,36,1,36,1,36,5,36,389,8,36,10,36,12,36,392,9,
        36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,5,37,403,8,37,10,
        37,12,37,406,9,37,1,37,1,37,1,38,1,38,3,38,412,8,38,1,38,1,38,1,
        38,1,38,1,39,1,39,1,39,5,39,421,8,39,10,39,12,39,424,9,39,1,39,1,
        39,1,39,5,39,429,8,39,10,39,12,39,432,9,39,1,39,3,39,435,8,39,1,
        39,1,39,1,39,1,40,1,40,3,40,442,8,40,1,40,1,40,1,40,1,40,1,41,1,
        41,1,41,1,41,1,41,1,42,3,42,454,8,42,1,42,1,42,1,42,1,42,1,42,1,
        43,1,43,1,43,1,43,5,43,465,8,43,10,43,12,43,468,9,43,1,43,1,43,1,
        43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,5,44,480,8,44,10,44,12,44,
        483,9,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,46,4,46,493,8,46,11,
        46,12,46,494,1,47,1,47,1,47,1,47,3,47,501,8,47,1,48,1,48,1,48,1,
        48,1,48,1,48,1,48,1,48,1,48,3,48,512,8,48,1,49,1,49,1,49,1,49,1,
        49,1,49,1,49,1,50,1,50,1,51,1,51,1,51,1,51,5,51,527,8,51,10,51,12,
        51,530,9,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,3,52,539,8,52,1,53,
        1,53,1,54,1,54,1,55,1,55,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,
        1,60,1,60,1,61,1,61,1,62,1,62,1,63,1,63,1,64,1,64,1,65,1,65,1,66,
        1,66,1,67,1,67,1,68,1,68,1,69,1,69,1,70,1,70,1,71,1,71,1,72,1,72,
        1,73,1,73,1,74,1,74,1,75,1,75,1,76,1,76,1,77,1,77,1,78,1,78,3,172,
        390,466,0,79,4,1,6,0,8,0,10,36,12,0,14,0,16,0,18,2,20,3,22,4,24,
        5,26,6,28,7,30,8,32,9,34,10,36,11,38,12,40,13,42,14,44,15,46,16,
        48,17,50,18,52,19,54,20,56,21,58,22,60,23,62,24,64,25,66,26,68,27,
        70,28,72,29,74,30,76,31,78,32,80,33,82,0,84,34,86,0,88,0,90,0,92,
        0,94,0,96,35,98,0,100,0,102,0,104,0,106,0,108,0,110,0,112,0,114,
        0,116,0,118,0,120,0,122,0,124,0,126,0,128,0,130,0,132,0,134,0,136,
        0,138,0,140,0,142,0,144,0,146,0,148,0,150,0,152,0,154,0,156,0,158,
        0,160,0,4,0,1,2,3,43,2,0,10,10,13,13,2,0,39,39,92,92,3,0,34,35,39,
        39,47,47,2,0,9,9,32,32,1,0,48,57,5,0,9,9,32,32,44,44,46,46,48,57,
        4,0,10,10,13,13,47,47,92,92,8,0,34,34,39,39,92,92,98,98,102,102,
        110,110,114,114,116,116,1,0,48,51,1,0,48,55,3,0,48,57,65,70,97,102,
        2,0,34,34,92,92,4,0,36,36,65,90,95,95,97,122,2,0,0,255,55296,56319,
        1,0,55296,56319,1,0,56320,57343,1,0,233,233,2,0,65,65,97,97,2,0,
        66,66,98,98,2,0,67,67,99,99,2,0,68,68,100,100,2,0,69,69,101,101,
        2,0,70,70,102,102,2,0,71,71,103,103,2,0,72,72,104,104,2,0,73,73,
        105,105,2,0,74,74,106,106,2,0,75,75,107,107,2,0,76,76,108,108,2,
        0,77,77,109,109,2,0,78,78,110,110,2,0,79,79,111,111,2,0,80,80,112,
        112,2,0,81,81,113,113,2,0,82,82,114,114,2,0,83,83,115,115,2,0,84,
        84,116,116,2,0,85,85,117,117,2,0,86,86,118,118,2,0,87,87,119,119,
        2,0,88,88,120,120,2,0,89,89,121,121,2,0,90,90,122,122,596,0,4,1,
        0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,0,10,1,0,0,0,0,12,1,0,0,0,0,14,1,0,
        0,0,0,16,1,0,0,0,0,18,1,0,0,0,1,20,1,0,0,0,1,22,1,0,0,0,1,24,1,0,
        0,0,1,26,1,0,0,0,1,28,1,0,0,0,1,30,1,0,0,0,1,32,1,0,0,0,1,34,1,0,
        0,0,1,36,1,0,0,0,1,38,1,0,0,0,1,40,1,0,0,0,1,42,1,0,0,0,1,44,1,0,
        0,0,1,46,1,0,0,0,1,48,1,0,0,0,1,50,1,0,0,0,1,52,1,0,0,0,1,54,1,0,
        0,0,1,56,1,0,0,0,1,58,1,0,0,0,1,60,1,0,0,0,1,62,1,0,0,0,1,64,1,0,
        0,0,1,66,1,0,0,0,1,68,1,0,0,0,1,70,1,0,0,0,1,72,1,0,0,0,1,74,1,0,
        0,0,1,76,1,0,0,0,1,78,1,0,0,0,1,80,1,0,0,0,2,82,1,0,0,0,3,84,1,0,
        0,0,3,86,1,0,0,0,3,88,1,0,0,0,3,90,1,0,0,0,3,92,1,0,0,0,3,94,1,0,
        0,0,3,96,1,0,0,0,4,162,1,0,0,0,6,166,1,0,0,0,8,180,1,0,0,0,10,191,
        1,0,0,0,12,195,1,0,0,0,14,202,1,0,0,0,16,212,1,0,0,0,18,219,1,0,
        0,0,20,223,1,0,0,0,22,238,1,0,0,0,24,247,1,0,0,0,26,261,1,0,0,0,
        28,269,1,0,0,0,30,272,1,0,0,0,32,277,1,0,0,0,34,282,1,0,0,0,36,288,
        1,0,0,0,38,294,1,0,0,0,40,301,1,0,0,0,42,307,1,0,0,0,44,309,1,0,
        0,0,46,311,1,0,0,0,48,313,1,0,0,0,50,316,1,0,0,0,52,319,1,0,0,0,
        54,322,1,0,0,0,56,325,1,0,0,0,58,327,1,0,0,0,60,329,1,0,0,0,62,332,
        1,0,0,0,64,336,1,0,0,0,66,342,1,0,0,0,68,344,1,0,0,0,70,353,1,0,
        0,0,72,375,1,0,0,0,74,378,1,0,0,0,76,384,1,0,0,0,78,398,1,0,0,0,
        80,409,1,0,0,0,82,417,1,0,0,0,84,439,1,0,0,0,86,447,1,0,0,0,88,453,
        1,0,0,0,90,460,1,0,0,0,92,475,1,0,0,0,94,487,1,0,0,0,96,492,1,0,
        0,0,98,500,1,0,0,0,100,511,1,0,0,0,102,513,1,0,0,0,104,520,1,0,0,
        0,106,522,1,0,0,0,108,538,1,0,0,0,110,540,1,0,0,0,112,542,1,0,0,
        0,114,544,1,0,0,0,116,546,1,0,0,0,118,548,1,0,0,0,120,550,1,0,0,
        0,122,552,1,0,0,0,124,554,1,0,0,0,126,556,1,0,0,0,128,558,1,0,0,
        0,130,560,1,0,0,0,132,562,1,0,0,0,134,564,1,0,0,0,136,566,1,0,0,
        0,138,568,1,0,0,0,140,570,1,0,0,0,142,572,1,0,0,0,144,574,1,0,0,
        0,146,576,1,0,0,0,148,578,1,0,0,0,150,580,1,0,0,0,152,582,1,0,0,
        0,154,584,1,0,0,0,156,586,1,0,0,0,158,588,1,0,0,0,160,590,1,0,0,
        0,162,163,5,35,0,0,163,164,1,0,0,0,164,165,6,0,0,0,165,5,1,0,0,0,
        166,167,5,47,0,0,167,168,5,42,0,0,168,172,1,0,0,0,169,171,9,0,0,
        0,170,169,1,0,0,0,171,174,1,0,0,0,172,173,1,0,0,0,172,170,1,0,0,
        0,173,175,1,0,0,0,174,172,1,0,0,0,175,176,5,42,0,0,176,177,5,47,
        0,0,177,178,1,0,0,0,178,179,6,1,1,0,179,7,1,0,0,0,180,181,5,47,0,
        0,181,182,5,47,0,0,182,186,1,0,0,0,183,185,8,0,0,0,184,183,1,0,0,
        0,185,188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,189,1,0,0,
        0,188,186,1,0,0,0,189,190,6,2,1,0,190,9,1,0,0,0,191,192,5,47,0,0,
        192,193,1,0,0,0,193,194,6,3,1,0,194,11,1,0,0,0,195,198,5,39,0,0,
        196,199,3,98,47,0,197,199,8,1,0,0,198,196,1,0,0,0,198,197,1,0,0,
        0,199,200,1,0,0,0,200,201,6,4,1,0,201,13,1,0,0,0,202,207,5,39,0,
        0,203,206,3,98,47,0,204,206,8,1,0,0,205,203,1,0,0,0,205,204,1,0,
        0,0,206,209,1,0,0,0,207,205,1,0,0,0,207,208,1,0,0,0,208,210,1,0,
        0,0,209,207,1,0,0,0,210,211,6,5,1,0,211,15,1,0,0,0,212,213,3,106,
        51,0,213,214,1,0,0,0,214,215,6,6,1,0,215,17,1,0,0,0,216,220,8,2,
        0,0,217,218,5,35,0,0,218,220,5,39,0,0,219,216,1,0,0,0,219,217,1,
        0,0,0,220,221,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,19,1,0,
        0,0,223,224,5,105,0,0,224,225,5,110,0,0,225,226,5,99,0,0,226,227,
        5,108,0,0,227,228,5,117,0,0,228,229,5,100,0,0,229,230,5,101,0,0,
        230,232,1,0,0,0,231,233,7,3,0,0,232,231,1,0,0,0,233,234,1,0,0,0,
        234,232,1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,237,6,8,2,0,
        237,21,1,0,0,0,238,239,5,112,0,0,239,240,5,114,0,0,240,241,5,97,
        0,0,241,242,5,103,0,0,242,243,5,109,0,0,243,244,5,97,0,0,244,245,
        1,0,0,0,245,246,6,9,2,0,246,23,1,0,0,0,247,248,5,100,0,0,248,249,
        5,101,0,0,249,250,5,102,0,0,250,251,5,105,0,0,251,252,5,110,0,0,
        252,253,5,101,0,0,253,255,1,0,0,0,254,256,7,3,0,0,255,254,1,0,0,
        0,256,257,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,259,1,0,0,
        0,259,260,6,10,3,0,260,25,1,0,0,0,261,262,5,100,0,0,262,263,5,101,
        0,0,263,264,5,102,0,0,264,265,5,105,0,0,265,266,5,110,0,0,266,267,
        5,101,0,0,267,268,5,100,0,0,268,27,1,0,0,0,269,270,5,105,0,0,270,
        271,5,102,0,0,271,29,1,0,0,0,272,273,5,101,0,0,273,274,5,108,0,0,
        274,275,5,105,0,0,275,276,5,102,0,0,276,31,1,0,0,0,277,278,5,101,
        0,0,278,279,5,108,0,0,279,280,5,115,0,0,280,281,5,101,0,0,281,33,
        1,0,0,0,282,283,5,117,0,0,283,284,5,110,0,0,284,285,5,100,0,0,285,
        286,5,101,0,0,286,287,5,102,0,0,287,35,1,0,0,0,288,289,5,105,0,0,
        289,290,5,102,0,0,290,291,5,100,0,0,291,292,5,101,0,0,292,293,5,
        102,0,0,293,37,1,0,0,0,294,295,5,105,0,0,295,296,5,102,0,0,296,297,
        5,110,0,0,297,298,5,100,0,0,298,299,5,101,0,0,299,300,5,102,0,0,
        300,39,1,0,0,0,301,302,5,101,0,0,302,303,5,110,0,0,303,304,5,100,
        0,0,304,305,5,105,0,0,305,306,5,102,0,0,306,41,1,0,0,0,307,308,5,
        33,0,0,308,43,1,0,0,0,309,310,5,40,0,0,310,45,1,0,0,0,311,312,5,
        41,0,0,312,47,1,0,0,0,313,314,5,61,0,0,314,315,5,61,0,0,315,49,1,
        0,0,0,316,317,5,33,0,0,317,318,5,61,0,0,318,51,1,0,0,0,319,320,5,
        38,0,0,320,321,5,38,0,0,321,53,1,0,0,0,322,323,5,124,0,0,323,324,
        5,124,0,0,324,55,1,0,0,0,325,326,5,60,0,0,326,57,1,0,0,0,327,328,
        5,62,0,0,328,59,1,0,0,0,329,330,5,60,0,0,330,331,5,61,0,0,331,61,
        1,0,0,0,332,333,5,62,0,0,333,334,5,61,0,0,334,63,1,0,0,0,335,337,
        7,3,0,0,336,335,1,0,0,0,337,338,1,0,0,0,338,336,1,0,0,0,338,339,
        1,0,0,0,339,340,1,0,0,0,340,341,6,30,4,0,341,65,1,0,0,0,342,343,
        3,106,51,0,343,67,1,0,0,0,344,349,3,108,52,0,345,348,3,108,52,0,
        346,348,7,4,0,0,347,345,1,0,0,0,347,346,1,0,0,0,348,351,1,0,0,0,
        349,347,1,0,0,0,349,350,1,0,0,0,350,69,1,0,0,0,351,349,1,0,0,0,352,
        354,7,4,0,0,353,352,1,0,0,0,354,355,1,0,0,0,355,353,1,0,0,0,355,
        356,1,0,0,0,356,71,1,0,0,0,357,359,7,4,0,0,358,357,1,0,0,0,359,360,
        1,0,0,0,360,358,1,0,0,0,360,361,1,0,0,0,361,362,1,0,0,0,362,366,
        5,46,0,0,363,365,7,4,0,0,364,363,1,0,0,0,365,368,1,0,0,0,366,364,
        1,0,0,0,366,367,1,0,0,0,367,376,1,0,0,0,368,366,1,0,0,0,369,371,
        5,46,0,0,370,372,7,4,0,0,371,370,1,0,0,0,372,373,1,0,0,0,373,371,
        1,0,0,0,373,374,1,0,0,0,374,376,1,0,0,0,375,358,1,0,0,0,375,369,
        1,0,0,0,376,73,1,0,0,0,377,379,5,13,0,0,378,377,1,0,0,0,378,379,
        1,0,0,0,379,380,1,0,0,0,380,381,5,10,0,0,381,382,1,0,0,0,382,383,
        6,35,5,0,383,75,1,0,0,0,384,385,5,47,0,0,385,386,5,42,0,0,386,390,
        1,0,0,0,387,389,9,0,0,0,388,387,1,0,0,0,389,392,1,0,0,0,390,391,
        1,0,0,0,390,388,1,0,0,0,391,393,1,0,0,0,392,390,1,0,0,0,393,394,
        5,42,0,0,394,395,5,47,0,0,395,396,1,0,0,0,396,397,6,36,6,0,397,77,
        1,0,0,0,398,399,5,47,0,0,399,400,5,47,0,0,400,404,1,0,0,0,401,403,
        8,0,0,0,402,401,1,0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,404,405,
        1,0,0,0,405,407,1,0,0,0,406,404,1,0,0,0,407,408,6,37,6,0,408,79,
        1,0,0,0,409,411,5,92,0,0,410,412,5,13,0,0,411,410,1,0,0,0,411,412,
        1,0,0,0,412,413,1,0,0,0,413,414,5,10,0,0,414,415,1,0,0,0,415,416,
        6,38,4,0,416,81,1,0,0,0,417,422,3,108,52,0,418,421,3,108,52,0,419,
        421,7,4,0,0,420,418,1,0,0,0,420,419,1,0,0,0,421,424,1,0,0,0,422,
        420,1,0,0,0,422,423,1,0,0,0,423,434,1,0,0,0,424,422,1,0,0,0,425,
        430,5,40,0,0,426,429,3,108,52,0,427,429,7,5,0,0,428,426,1,0,0,0,
        428,427,1,0,0,0,429,432,1,0,0,0,430,428,1,0,0,0,430,431,1,0,0,0,
        431,433,1,0,0,0,432,430,1,0,0,0,433,435,5,41,0,0,434,425,1,0,0,0,
        434,435,1,0,0,0,435,436,1,0,0,0,436,437,6,39,7,0,437,438,6,39,2,
        0,438,83,1,0,0,0,439,441,5,92,0,0,440,442,5,13,0,0,441,440,1,0,0,
        0,441,442,1,0,0,0,442,443,1,0,0,0,443,444,5,10,0,0,444,445,1,0,0,
        0,445,446,6,40,4,0,446,85,1,0,0,0,447,448,5,92,0,0,448,449,9,0,0,
        0,449,450,1,0,0,0,450,451,6,41,8,0,451,87,1,0,0,0,452,454,5,13,0,
        0,453,452,1,0,0,0,453,454,1,0,0,0,454,455,1,0,0,0,455,456,5,10,0,
        0,456,457,1,0,0,0,457,458,6,42,9,0,458,459,6,42,5,0,459,89,1,0,0,
        0,460,461,5,47,0,0,461,462,5,42,0,0,462,466,1,0,0,0,463,465,9,0,
        0,0,464,463,1,0,0,0,465,468,1,0,0,0,466,467,1,0,0,0,466,464,1,0,
        0,0,467,469,1,0,0,0,468,466,1,0,0,0,469,470,5,42,0,0,470,471,5,47,
        0,0,471,472,1,0,0,0,472,473,6,43,6,0,473,474,6,43,10,0,474,91,1,
        0,0,0,475,476,5,47,0,0,476,477,5,47,0,0,477,481,1,0,0,0,478,480,
        8,0,0,0,479,478,1,0,0,0,480,483,1,0,0,0,481,479,1,0,0,0,481,482,
        1,0,0,0,482,484,1,0,0,0,483,481,1,0,0,0,484,485,6,44,6,0,485,486,
        6,44,11,0,486,93,1,0,0,0,487,488,5,47,0,0,488,489,1,0,0,0,489,490,
        6,45,8,0,490,95,1,0,0,0,491,493,8,6,0,0,492,491,1,0,0,0,493,494,
        1,0,0,0,494,492,1,0,0,0,494,495,1,0,0,0,495,97,1,0,0,0,496,497,5,
        92,0,0,497,501,7,7,0,0,498,501,3,100,48,0,499,501,3,102,49,0,500,
        496,1,0,0,0,500,498,1,0,0,0,500,499,1,0,0,0,501,99,1,0,0,0,502,503,
        5,92,0,0,503,504,7,8,0,0,504,505,7,9,0,0,505,512,7,9,0,0,506,507,
        5,92,0,0,507,508,7,9,0,0,508,512,7,9,0,0,509,510,5,92,0,0,510,512,
        7,9,0,0,511,502,1,0,0,0,511,506,1,0,0,0,511,509,1,0,0,0,512,101,
        1,0,0,0,513,514,5,92,0,0,514,515,5,117,0,0,515,516,3,104,50,0,516,
        517,3,104,50,0,517,518,3,104,50,0,518,519,3,104,50,0,519,103,1,0,
        0,0,520,521,7,10,0,0,521,105,1,0,0,0,522,528,5,34,0,0,523,527,8,
        11,0,0,524,525,5,92,0,0,525,527,9,0,0,0,526,523,1,0,0,0,526,524,
        1,0,0,0,527,530,1,0,0,0,528,526,1,0,0,0,528,529,1,0,0,0,529,531,
        1,0,0,0,530,528,1,0,0,0,531,532,5,34,0,0,532,107,1,0,0,0,533,539,
        7,12,0,0,534,539,8,13,0,0,535,536,7,14,0,0,536,539,7,15,0,0,537,
        539,7,16,0,0,538,533,1,0,0,0,538,534,1,0,0,0,538,535,1,0,0,0,538,
        537,1,0,0,0,539,109,1,0,0,0,540,541,7,17,0,0,541,111,1,0,0,0,542,
        543,7,18,0,0,543,113,1,0,0,0,544,545,7,19,0,0,545,115,1,0,0,0,546,
        547,7,20,0,0,547,117,1,0,0,0,548,549,7,21,0,0,549,119,1,0,0,0,550,
        551,7,22,0,0,551,121,1,0,0,0,552,553,7,23,0,0,553,123,1,0,0,0,554,
        555,7,24,0,0,555,125,1,0,0,0,556,557,7,25,0,0,557,127,1,0,0,0,558,
        559,7,26,0,0,559,129,1,0,0,0,560,561,7,27,0,0,561,131,1,0,0,0,562,
        563,7,28,0,0,563,133,1,0,0,0,564,565,7,29,0,0,565,135,1,0,0,0,566,
        567,7,30,0,0,567,137,1,0,0,0,568,569,7,31,0,0,569,139,1,0,0,0,570,
        571,7,32,0,0,571,141,1,0,0,0,572,573,7,33,0,0,573,143,1,0,0,0,574,
        575,7,34,0,0,575,145,1,0,0,0,576,577,7,35,0,0,577,147,1,0,0,0,578,
        579,7,36,0,0,579,149,1,0,0,0,580,581,7,37,0,0,581,151,1,0,0,0,582,
        583,7,38,0,0,583,153,1,0,0,0,584,585,7,39,0,0,585,155,1,0,0,0,586,
        587,7,40,0,0,587,157,1,0,0,0,588,589,7,41,0,0,589,159,1,0,0,0,590,
        591,7,42,0,0,591,161,1,0,0,0,40,0,1,2,3,172,186,198,205,207,219,
        221,234,257,338,347,349,355,360,366,373,375,378,390,404,411,420,
        422,428,430,434,441,453,466,481,494,500,511,526,528,538,12,2,1,0,
        7,2,0,2,3,0,2,2,0,0,1,0,2,0,0,0,2,0,7,27,0,7,35,0,7,30,0,7,31,0,
        7,32,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!LPCPreprocessorLexer.__ATN) {
            LPCPreprocessorLexer.__ATN = new antlr.ATNDeserializer().deserialize(LPCPreprocessorLexer._serializedATN);
        }

        return LPCPreprocessorLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(LPCPreprocessorLexer.literalNames, LPCPreprocessorLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return LPCPreprocessorLexer.vocabulary;
    }

    private static readonly decisionsToDFA = LPCPreprocessorLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}
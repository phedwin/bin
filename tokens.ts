
/**
 * - @author phedwin
 * 
 * - @license MIT
 * - @file token.ts
 * 
 * - @summary tokens [ Lexer -> Parser ..... ]  -> AST -> IR
 * 
 * 
 */


import { Libs__cMd_arguments, Libs__qualified_decimal, Libs__rmv_whitespace } from "./std";


enum Tokens {
    Add, 
    Substract,
    Divide,
    Pipe,
    ShiftRight,
    Shiftleft,
    BitwiseAnd,
    BitwiseOR,
    BitwiseXOR,
    Multiply,
    
    
    Mod,

    /// flag  -b -d to switch between binary 0-1 && decimal 0-9 
    Number,
    
    /// -hx switch to hexadecimal
    Strings,

    RightParenthesis,
    LeftParenthesis,

}


class Tokenizer {
    /// read from user input and try parsing
    public get_tokens() {
        let TOKENS: Tokens[] = [];
        let argv: string[] = Libs__cMd_arguments().argv;
        console.log(argv.slice(2, argv.length));
        
        for( let value = 0; value < argv.slice(2, argv.length).length + 1; value ++) {
            if ( argv[value] == "+") TOKENS.push(Tokens.Add);
            if ( Libs__qualified_decimal(argv[value])) TOKENS.push(Tokens.Number) 
        };

        return TOKENS;
    }
}

console.log(new Tokenizer().get_tokens());

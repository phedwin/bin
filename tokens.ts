
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
    Add = "ADD",
    Subtract = "SUBTRACT",
    Divide = "DIVIDE",
    Pipe = "PIPE",
    ShiftRight = "SHIFTRIGHT",
    ShiftLeft = "SHIFTLEFT",
    BitwiseAnd = "BITWISEAND",
    BitwiseOr = "BITWISEOR",
    BitwiseXor = "BITWISEXOR",
    Multiply = "MULTIPLY",
    Mod = "MOD",


    /// flag  -b -d to switch between binary 0-1 && decimal 0-9 
    Numbers = "NUMBER",
   
    /// -hx switch to hexadecimal
    Strings = "STRING",
    
    RightParenthesis = "RIGHTPARENTHESIS",
    LeftParenthesis = "LEFTPARENTHESIS",
}


/// exists

if( ! Object.values(Tokens).includes(Tokens.Add)) console.log("exists");
// Object.proto

export class Tokenizer {
    public get_tokens(): Tokens[] {
        let TOKENS: Tokens[] = []
        let cmds = Libs__cMd_arguments().argv.slice(2, Libs__cMd_arguments().argc );

        for ( let token_index = 0; token_index < cmds.length; token_index ++ ) {
            // hardcode the basic operators. refactor this to a HashMap if its stable
            if (cmds[token_index] == "+" ) TOKENS.push(Tokens.Add);
            if (Libs__qualified_decimal(cmds[token_index])) TOKENS.push(Tokens.Numbers);
            if (cmds[token_index] == "-" ) TOKENS.push(Tokens.Subtract)
        }

        return TOKENS;

    }

}
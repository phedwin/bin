
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

import { Libs__cMd_arguments, Libs__qualified_decimal, Libs__rmv_whitespace } from "../lib/std";

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

export class Tokenizer {
    public get_tokens(): Tokens[] {
        let TOKENS: Tokens[] = [];
        let cmds = Libs__cMd_arguments().argv.slice(2, Libs__cMd_arguments().argc);

        for ( let token_index = 0; token_index < cmds.length; token_index++ ) {
            const token = cmds[token_index];

            switch (token) {
                case '+':
                    TOKENS.push(Tokens.Add);
                    break;
                case '-':
                    TOKENS.push(Tokens.Subtract);
                    break;
                case '/':
                    TOKENS.push(Tokens.Divide);
                    break;
                case '*':
                    TOKENS.push(Tokens.Multiply);
                    break;
                case '%':
                    TOKENS.push(Tokens.Mod);
                    break;
                case '(':
                    TOKENS.push(Tokens.LeftParenthesis);
                    break;
                case ')':
                    TOKENS.push(Tokens.RightParenthesis);
                    break;
                default:
                    if (Libs__qualified_decimal(token)) {
                        TOKENS.push(Tokens.Numbers);
                    } else {
                        console.error(`Unrecognized token: ${token}`);
                    }
                    break;
            }
        }

        return TOKENS;
    }
}

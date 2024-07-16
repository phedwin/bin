/**
 * 
 *  @author phedwin
 * 
 * - @license MIT
 * - @file token.ts
 * 
 * - @summary tokens [ Lexer -> Parser ..... ]  -> AST -> IR
 * 
 * 
 * everytime i continue writing this, i realize how its almost impossible to run
 * something on the shell that takes keys like parenthesis or pipes or ampersands
 * 
 * i think somehow shell is running before all this and it just assume every instruction not flagged
 * 
 * @example 
 * ````
 * echo -e $(make c)
 * 
 * make kinda looks like this
 * 
 * c :
	$(gcc) -o $(vm_output) $(vm) && ./vm.o 1 + 4 - 5 - 12 () + & 1 | 10

 * ````
    this turns ugly sooo fast
    ```
    ➜  binds git:(main) ✗ echo -e $(make c)
        /bin/sh: 1: Syntax error: "(" unexpected
        make: *** [Makefile:45: c] Error 2
        /usr/bin/gcc -o vm.o vm/vm.c && ./vm.o 1 + 4 - 5 - 12 () + & 1 | 10
    ➜  binds git:(main) ✗
    ``
*
    *
    * * => so after all that, this should support only basic basic basic math operation
    * SUPPORTED 
    *  1. ADD
    *  2. SUB
    *  3. MOD
    *  4. DIVIDE
    *  5. MULTIPLY
    * *
    */


    /**
     * solution
     * 
     * ./vm.o "1 + 4 - 5 - 12 () + & 1 | 10"
     * 
     * 
     * @example
     * ```
     * ➜  binds git:(main) ✗ ./vm.o "1 + 4 - 5 - 12 () + & 1 | 10"

        ./vm.o
        1 + 4 - 5 - 12 () + & 1 | 10
        ➜  binds git:(main) ✗ 

        ```
    *
    * enclose 
    */

    


import { Libs__cMd_arguments, Libs__qualified_decimal, Libs__rmv_whitespace } from "../lib/std";

export enum Tokens {
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


    /// w/ out loosing meaning.
    /**
     * 
     * input n + x + y - z * q / a
     * output ((z * q)/a) ... */ 
     
    public re_arrange_with_precedence() {
       
    }
    
}

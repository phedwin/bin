
import { add, Libs__cMd_arguments, substract, modulo, multiply, divide } from "../lib/std";
import { Tokenizer, Tokens } from "./compiler"
import { OptionFlags, type Flags } from "./config";

/**
 * this should somehow have an option for a repl
 * 
 */


let options_flags: Flags[] = [ 
    { short_flag: "-h", flag: OptionFlags.Help },
    { short_flag: "-d", flag: OptionFlags.Decimal }, 
    { short_flag: "-b", flag: OptionFlags.Binary },
    { short_flag: "-hx", flag: OptionFlags.Hexadecimal }
]


export const command_line_options = (args: Flags) =>  {
    if( Object.values(args.short_flag).includes("-h")) 
        console.error(`usage <${ Libs__cMd_arguments() } > ${OptionFlags.Help} `);
    
    console.log("debugger");
}

export const initiliaze_App = (): number => {  

    // before all this tokenization, get some basic things working
    // this tokens are mostly for precedence and rewriting to introducing brackets
    let tokens: Tokens[] = new Tokenizer().get_tokens();

    /*
    //   TODO
     * simplify this
    */
    let rhs_value = Libs__cMd_arguments()[0];
    let lhs_value = Libs__cMd_arguments()[2];
    let operator = Libs__cMd_arguments()[1];


    let results = calculator_Logic(rhs_value, lhs_value, operator);
    console.log(results);
    
    return results;

}


export const calculator_Logic = (rhs: string, lhs: string, operator: string): number => {
    

    // TODO, substitute this with our lib decimal
    let rhs__qualified = parseInt(rhs, 10);
    let lhs__qualified = parseInt(lhs, 10);

    /**
     * // TODO
     * improve this. it shouldnt take any limits unless its assembly instruction set operations
     * 
     * spread arguments, loop values passed and rearrange, thats where a small compiler will come in place
     * this is a bold design, at this point idk what im doing but hey. 
     * 
     * 
     * the problem this will solve
     * 
     * bun run src/main.ts 40 + 40 + 30
     *   80
     */
    switch (operator) {

        /**
         * @addition
         */
        case "+":    
            return add(rhs__qualified, lhs__qualified);

         /**
         * @sub
         */
        case "-":
            return substract(rhs__qualified, lhs__qualified);
        
         /**
         * @divide
         */
        case "/":
            return divide( rhs__qualified, lhs__qualified);
        
        /**
         * @multiply
         * 
         * smh having this bug, lol
         * 
         * bun run src/main.ts 40 * 40
            [
                "40", "build.rs", "Cargo.lock", "Cargo.toml", "cmd", "dqlite-sys", "input.txt", "lib", "LICENCE",
                "macros", "Makefile", "node_modules", "package.json", "package-lock.json", "README.md", "src",
                "tsconfig.json", "vm", "40"
            ]
        */
        case "*":
            return multiply(rhs__qualified, lhs__qualified);
        
        
         /**
         * @mudolo
         */    
        case "%":
            return modulo(rhs__qualified, lhs__qualified);
        
         /**
        *   // TODO 
         * @shift bits
         * figure out how to escape this values
         */
        
        case "<<":
            return rhs__qualified << lhs__qualified;
         /**
         * @shift bits
         * 
         *   // TODO 
         *  figure out how to escape this values
         */
           
        case ">>":
            return rhs__qualified >> lhs__qualified;
        
         /**
         * 
         *  figure out how to escape this values
         * 
         *   // TODO 
         * 
         * this @operator (|) resemble pipe, its actually pipe.
         */
            
        case "|":
            return rhs__qualified | lhs__qualified;
        default:
            console.error("ahhhhhhhhhhhhhhhh? what");
            process.exit(1);
            break;
    }
}
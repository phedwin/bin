

import { Libs__cMd_arguments } from "../lib/std";
import { Tokenizer } from "./compiler"
import { OptionFlags, type Flags } from "./config";


let options_flags: Flags[] = [ 
    { short_flag: "-h", flag: OptionFlags.Help },
    { short_flag: "-d", flag: OptionFlags.Decimal }, 
    { short_flag: "-b", flag: OptionFlags.Binary },
    { short_flag: "-hx", flag: OptionFlags.Hexadecimal }
]


export const command_line_options = (args: Flags) =>  {
    if( Object.values(args.short_flag).includes("-h")) 
        console.error(`usage <${ Libs__cMd_arguments().argv[1]} > ${OptionFlags.Help} `);
    
    console.log("debugger");
}

export const initiliaze_App = (): void => {  
    let tokens = new Tokenizer().get_tokens();
    
    console.log(tokens);   
}
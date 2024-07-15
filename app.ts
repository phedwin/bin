

import { Libs__cMd_arguments } from "./std";
import { Tokenizer } from "./tokens"


enum OptionFlags {
    Binary,
    Decimal,
    Hexadecimal,
    Help
}

interface Flags {
    short_flag: string,
    flag: OptionFlags
}

let options_flags: Flags[] = [ 
    {short_flag: "-h", flag: OptionFlags.Help },
    { short_flag: "-d", flag: OptionFlags.Decimal }, 
    { short_flag: "-b", flag: OptionFlags.Binary },
    { short_flag: "-hx", flag: OptionFlags.Hexadecimal }
]


export const command_line_options = (args: Flags) =>  {
    if( Object.values(args.short_flag).includes("-h")) 
        console.error(`usage <${ Libs__cMd_arguments().argv[1]} > -- ${OptionFlags}`);
    
    console.log("debugger");
    
    
}

export const initiliaze_App = (): void => {
    let tokens = new Tokenizer().get_tokens()
    
    console.log(tokens);
}
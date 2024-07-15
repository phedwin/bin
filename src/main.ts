
/**
 * 
 * 
 * bootstap application
 * 
 */

import { command_line_options, initiliaze_App } from "../cmd/cmd";
import { Libs__cMd_arguments } from "../lib/std";



const bootstap = () =>  {
    console.log(Libs__cMd_arguments().argv[2]);
    
    if( Libs__cMd_arguments().argc < 3 || Libs__cMd_arguments().argv[2].toLowerCase() == "--help") 
        process.exit(1);
    initiliaze_App();
}

bootstap();

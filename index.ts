
/**
 * 
 * 
 * bootstap application
 * 
 */

import { command_line_options, initiliaze_App } from "./app";
import { Libs__cMd_arguments } from "./std";



const bootstap = () =>  {
    console.log(Libs__cMd_arguments().argv[2]);
    

    if( Libs__cMd_arguments().argc < 3 || Libs__cMd_arguments().argv[2].toLowerCase() == "--help") {
        // let _ = command_line_options();
        process.exit(1);
    }
    initiliaze_App();
}

bootstap();

/*
 * COPYRIGHT (C) 2024, no warranty! 
 * 
 * bootstrap application
 */

import { initiliaze_App } from "../cmd/cmd";
import { Libs__cMd_arguments } from "../lib/std";



const bootstap = () =>  {
    if ( Libs__cMd_arguments.length < 0 || Libs__cMd_arguments()[0].includes("--help"))
        process.exit(1);

    initiliaze_App();
}

bootstap();

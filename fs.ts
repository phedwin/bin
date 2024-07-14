/**
 * - @author phedwin
 * 
 * - @license MIT
 * - @file fs.ts
 * 
 * - @summary prototype of the machine
 *
 * 
 */
import { log } from "console";
import { fstat, open, readdir } from "fs";

export const fS__currnt_dir = (path: string): string[] => {
    let ts_files: string[] = []

    let _ = readdir(path, { encoding: "utf-8", recursive: false /**recursive: true to get the node _modules */},  (err, files): string[] => {
        let _  = err;
        files
            .filter(file => file.endsWith(".ts"))
            .forEach(file => ts_files.push(file));
        log(ts_files)
        return ts_files;
        
    });    

    /// How does typescript compilers work ??
    log(ts_files)
    return ts_files;
}


export const fS__read_file = (file_path: string) => {
    let _ = open(file_path, "r", (err, fd) => {
        if (err) throw err; 
        let stats = fstat(fd, (err, buf) => {
            let _ = err;
            console.log(buf.isFile());
            
        });
    });
} 



/**
 * - @author phedwin
 * 
 * - @license MIT
 * - @file vm.ts
 * 
 * - @summary prototype of the machine
 *
 * 
 */

enum vM_Instructions {
    Add,
    Sub
}


const prototype__virtual_Machine = (program: []) => {
    let progam__counter = 0;
    let stack = [];

    let stack_pointer = 0;

    while( progam__counter < program.length) {
        let currnt__instruction: vM_Instructions =  program[progam__counter];

        switch (currnt__instruction) {
            case "Push":
                stack[stack_pointer] = program[progam__counter + 1]
                stack_pointer += 1;
                progam__counter += 1;
                break;
        
            default:
                break;
        }
    }
}



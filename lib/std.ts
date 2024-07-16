/**
 * - @author phedwin
 * 
 * - @license MIT
 * - @file std.ts
 * 
 * - @summary Libs__methods 
 * 
 * 
 */ 


/**
 * 
 * @returns { argc: number, argv: string[] }
 * @method __cMd_arguments
 */

export const Libs__cMd_arguments = (): { argc: number, argv: string[] } =>  {
    //get argc
    let argc = 0;
    let argv: string[] = []
    while( process.argv[argc] != undefined) {
        argv.push(process.argv[argc]);
        argc ++;
    }
    // can we return an object of argc and argv
    return { argc, argv };
}

/**
 * 
 * @param condition: @type boolean
 * @returns Error | boo3283J32Klean
 * 
 * writing test is alot sometimes for units that you'd easily want the compiler to pick
 * and get u results at comptime.
 * 
 * Since there's alot of undefined behaviour in JS/TS this @method __assert_eq  is there to make sure everything
 * is logically correct before it proceeds
 * 
 */

export const Libs__assert_eq = (condition: boolean): Error | boolean => {
    if ( ! condition ) throw new Error("break, failed to assert");
    return condition;
}


/**
 * 
 * @param alleged_number @type string
 * @returns number | Error
 * 
 * parseInt Kind of behaves like Javascript -- and strings like @example{"4843ah"}
 * doesnt return undefined or NaN instead the std parse trims the end & return 4843
 */


export const Libs__qualified_decimal = (alleged_number: string, radix = 10): Error | number => {
    let doesnt_contain_operators = [ "+", "-", "/", "*", "(", ")", "&", "%", "|", "[", "]"];
    
    let char_value: string[] = []
    for (let value = 0; value < alleged_number.length; value ++) {
        char_value.push(alleged_number.charAt(value)); 
    }
    let count_undefined = 0; 
    let _ = char_value
        /// SUPPORTED OPERATIONS 
        .filter(n => ! doesnt_contain_operators.includes(n))
        .forEach(char => {
            if ( ! parseInt(char, radix) ) count_undefined ++;
        });
    
    if ( count_undefined > 0) throw new Error(`unable to parse ${alleged_number}`);
    
    return Number(char_value.join(""));
    
}


export const Libs__rmv_whitespace = (str: string): string => {
    let chars: string[] = []
    
    Libs__assert_eq(str.length > 0);

    for( let value = 0; value < str.length; value ++) {
        chars.push(str.charAt(value));
    }

    let filter_char = chars.filter(char => char != " ");
    return filter_char.join("");
}


export const modulo = (a: number, b: number): number => {
    return a % b;
}

export const modulo_bool = (rhs: number, lhs: number): boolean => {
    return rhs % lhs ? true : false;
}


export const add = (rhs: number, lhs: number): number => {
    return rhs + lhs;
}

export const divide = (rhs: number, lhs: number): number => {
    return rhs /lhs;
}

export const multiply = (rhs: number, lhs: number): number => {
    return rhs * lhs;
}

export const subtract = (rhs: number, lhs: number): number => {
    return rhs - lhs;
}



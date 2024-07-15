

export enum OptionFlags {
    Binary,
    Decimal,
    Hexadecimal,
    Help
}

export interface Flags {
    short_flag: string,
    flag: OptionFlags
}

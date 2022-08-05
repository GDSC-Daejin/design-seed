declare const FontGroupNames: readonly ["h", "body"];
export declare type FontGroup = typeof FontGroupNames[number];
declare type MakeFontTokenSet<TokenName extends FontGroup, TokenNumber extends number[]> = `${TokenName}${TokenNumber[number]}`;
export declare type FontToken = MakeFontTokenSet<'h', [1, 2, 3, 4, 5, 6, 7]> | MakeFontTokenSet<'body', [1, 2, 3, 4]>;
export declare type FontScheme = Record<FontToken, string>;
export {};

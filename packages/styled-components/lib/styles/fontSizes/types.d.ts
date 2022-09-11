declare const FontGroupNames: readonly ["title", "text"];
declare const FontSizeNames: readonly ["Xxl", "Xl", "L", "M", "S"];
export declare type FontGroup = typeof FontGroupNames[number];
export declare type FontSizeGroup = typeof FontSizeNames[number];
declare type MakeFontTokenSet<TokenName extends FontGroup> = `${TokenName}${FontSizeGroup[number]}`;
export declare type FontToken = MakeFontTokenSet<'title'> | MakeFontTokenSet<'text'>;
export declare type FontScheme = Record<FontToken, string>;
export {};

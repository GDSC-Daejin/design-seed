declare const ColorGroupNames: readonly ["white", "grey", "green", "yellow", "green", "red", "blue", "orange"];
export declare type ColorGroup = typeof ColorGroupNames[number];
export declare function isColorGroup(str: string): str is ColorGroup;
declare type MakeColorTokenSet<TokenName extends ColorGroup, TokenNumber extends number[] | string[]> = `${TokenName}${TokenNumber[number]}`;
export declare type ColorToken = 'white' | MakeColorTokenSet<'grey', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]> | MakeColorTokenSet<'orange', [100, 200, 300, 400, 500, 600, 700, 900]> | MakeColorTokenSet<'yellow', [100, 200, 300, 400, 500, 600, 900]> | MakeColorTokenSet<'green', [100, 200, 300, 400, 500, 600, 900]> | MakeColorTokenSet<'red', [100, 200, 300, 400, 500, 600, 900]> | MakeColorTokenSet<'blue', [100, 200, 300, 400, 500, 600, 900]>;
export declare type ColorScheme = Record<ColorToken, string>;
export declare type SemanticColorScheme = {
    background: ColorToken | string;
    backgroundLow: ColorToken | string;
    boxShadow100: ColorToken | string;
};
export declare type ColorTheme = ColorScheme & SemanticColorScheme;
export {};

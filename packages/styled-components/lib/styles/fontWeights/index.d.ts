declare const FontWeightNames: string[];
export declare type FontWeightGroup = typeof FontWeightNames[number];
export declare type FontWeightScheme = Record<FontWeightGroup, number>;
export declare const fontWeights: FontWeightScheme;
export {};

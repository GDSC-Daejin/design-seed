import { colors, fontWeights, fontSizes, windowSizes } from 'src';

export type ThemeType = 'light-only' | 'dark-only' | 'auto';

export type ColorToken = keyof typeof colors;
export type FontSizeToken = keyof typeof fontSizes;
export type FontWeightToken = keyof typeof fontWeights;
export type WindowSizeToken = keyof typeof windowSizes;

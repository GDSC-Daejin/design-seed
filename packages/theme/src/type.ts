import { color, fontSize, fontWeight } from 'src';

export type ThemeType = 'light-only' | 'dark-only' | 'auto';

export type ColorToken = keyof typeof color;
export type FontSizeToken = keyof typeof fontSize;
export type FontWeightToken = keyof typeof fontWeight;

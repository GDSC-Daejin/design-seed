import React from 'react';
import { fontSizes, fontWeights, windowSizes } from './styles';
import { ColorScheme, SemanticColorScheme } from './styles/colors/types';
import { ThemeMode } from './types/utils';
interface ThemeProviderProps {
    children: React.ReactNode;
    mode: ThemeMode;
}
export declare type GdsTheme = {
    colors: SemanticColorScheme & ColorScheme;
    windowSizes: typeof windowSizes;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
};
declare module 'styled-components' {
    interface DefaultTheme extends GdsTheme {
    }
}
export declare const GdsThemeProvider: React.FC<ThemeProviderProps>;
export {};

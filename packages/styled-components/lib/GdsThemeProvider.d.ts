import React from 'react';
import { ColorScheme, SemanticColorScheme } from './styles/colors/types';
import { fontSize } from './styles/fontSize';
import { windowSize } from './styles/windowSize';
import { BehaviorMode } from './types/utils';
interface ThemeProviderProps {
    children: React.ReactNode;
    mode: BehaviorMode;
}
export declare type GdsTheme = {
    colors: SemanticColorScheme & ColorScheme;
    windowSize: typeof windowSize;
    fontSize: typeof fontSize;
};
declare module 'styled-components' {
    interface DefaultTheme extends GdsTheme {
    }
}
export declare const GdsThemeProvider: React.FC<ThemeProviderProps>;
export {};

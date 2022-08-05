import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { DarkModeContext } from './DarkModeContext';
import { colors, fontSizes } from './styles';
import { ColorScheme, SemanticColorScheme } from './styles/colors/types';

import { windowSize } from './styles/windowSize';

import { BehaviorMode, getThemeName } from './types/utils';
import { useDarkMode } from './useDarkMode';

interface ThemeProviderProps {
  children: React.ReactNode;
  mode: BehaviorMode;
}

export type GdsTheme = {
  colors: SemanticColorScheme & ColorScheme;
  windowSize: typeof windowSize;
  fontSize: typeof fontSizes;
};

declare module 'styled-components' {
  export interface DefaultTheme extends GdsTheme {}
}

export const GdsThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  mode = 'auto' as BehaviorMode,
}) => {
  const darkMode = useDarkMode();

  const theme = React.useMemo((): DefaultTheme => {
    const colorTheme = colors[getThemeName(mode, darkMode.isDarkMode)];
    return {
      colors: colorTheme,
      windowSize: windowSize,
      fontSize: fontSizes,
    };
  }, [mode, darkMode.isDarkMode]);

  return (
    <DarkModeContext.Provider value={darkMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};
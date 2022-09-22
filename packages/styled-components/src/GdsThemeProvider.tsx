import React, { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { DarkModeContext, useDarkMode } from '.';
import { MenuContext } from './contexts/MenuContext';
import { colors, fontSizes, fontWeights, windowSizes } from './styles';
import { ColorScheme, SemanticColorScheme } from './styles/colors/types';

import { ThemeMode, getThemeName } from './types/utils';
import { useToggleMenu } from './hooks/useToggleMenu';

interface ThemeProviderProps {
  children: ReactNode;
  mode: ThemeMode;
}

export type GdsTheme = {
  colors: SemanticColorScheme & ColorScheme;
  windowSizes: typeof windowSizes;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
};

declare module 'styled-components' {
  export interface DefaultTheme extends GdsTheme {}
}

export const GdsThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  mode = 'auto' as ThemeMode,
}) => {
  const darkMode = useDarkMode();
  const menuValue = useToggleMenu();
  const theme = React.useMemo((): DefaultTheme => {
    const colorTheme = colors[getThemeName(mode, darkMode.isDarkMode)];
    return {
      colors: colorTheme,
      windowSizes: windowSizes,
      fontSizes: fontSizes,
      fontWeights: fontWeights,
    };
  }, [mode, darkMode.isDarkMode]);

  return (
    <DarkModeContext.Provider value={darkMode}>
      <MenuContext.Provider value={menuValue}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MenuContext.Provider>
    </DarkModeContext.Provider>
  );
};

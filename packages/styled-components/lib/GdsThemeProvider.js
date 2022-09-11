import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkModeContext, useDarkMode } from '.';
import { MenuContext } from './contexts/MenuContext';
import { colors, fontSizes, fontWeights, windowSizes } from './styles';
import { getThemeName } from './types/utils';
import { useToggleMenu } from './hooks/useToggleMenu';
export const GdsThemeProvider = ({ children, mode = 'auto', }) => {
    const darkMode = useDarkMode();
    const menuValue = useToggleMenu();
    const theme = React.useMemo(() => {
        const colorTheme = colors[getThemeName(mode, darkMode.isDarkMode)];
        return {
            colors: colorTheme,
            windowSizes: windowSizes,
            fontSizes: fontSizes,
            fontWeights: fontWeights,
        };
    }, [mode, darkMode.isDarkMode]);
    return (_jsx(DarkModeContext.Provider, { value: darkMode, children: _jsx(MenuContext.Provider, { value: menuValue, children: _jsx(ThemeProvider, { theme: theme, children: children }) }) }));
};
//# sourceMappingURL=GdsThemeProvider.js.map
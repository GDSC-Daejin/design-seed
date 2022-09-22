import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkModeContext } from 'src/contexts/DarkModeContext';
import { MenuContext } from 'src/contexts/MenuContext';
import { useDarkMode } from './hooks/useDarkMode';
import { colors, fontSizes, fontWeights, windowSizes } from './styles';
import { useToggleMenu } from './hooks/useToggleMenu';
import { getThemeName } from './types/utils';
export var GdsThemeProvider = function (_a) {
    var children = _a.children, _b = _a.mode, mode = _b === void 0 ? 'auto' : _b;
    var darkMode = useDarkMode();
    var menuValue = useToggleMenu();
    var theme = React.useMemo(function () {
        var colorTheme = colors[getThemeName(mode, darkMode.isDarkMode)];
        return {
            colors: colorTheme,
            windowSizes: windowSizes,
            fontSizes: fontSizes,
            fontWeights: fontWeights,
        };
    }, [mode, darkMode.isDarkMode]);
    return (React.createElement(DarkModeContext.Provider, { value: darkMode },
        React.createElement(MenuContext.Provider, { value: menuValue },
            React.createElement(ThemeProvider, { theme: theme }, children))));
};

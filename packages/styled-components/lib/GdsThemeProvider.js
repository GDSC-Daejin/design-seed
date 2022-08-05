"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GdsThemeProvider = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var DarkModeContext_1 = require("./DarkModeContext");
var styles_1 = require("./styles");
var windowSize_1 = require("./styles/windowSize");
var utils_1 = require("./types/utils");
var useDarkMode_1 = require("./useDarkMode");
var GdsThemeProvider = function (_a) {
    var children = _a.children, _b = _a.mode, mode = _b === void 0 ? 'auto' : _b;
    var darkMode = (0, useDarkMode_1.useDarkMode)();
    var theme = react_1.default.useMemo(function () {
        var colorTheme = styles_1.colors[(0, utils_1.getThemeName)(mode, darkMode.isDarkMode)];
        return {
            colors: colorTheme,
            windowSize: windowSize_1.windowSize,
            fontSize: styles_1.fontSizes,
        };
    }, [mode, darkMode.isDarkMode]);
    return (react_1.default.createElement(DarkModeContext_1.DarkModeContext.Provider, { value: darkMode },
        react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme }, children)));
};
exports.GdsThemeProvider = GdsThemeProvider;
//# sourceMappingURL=GdsThemeProvider.js.map
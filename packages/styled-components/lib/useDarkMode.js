"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDarkMode = void 0;
var react_1 = require("react");
var useDarkMode = function () {
    var _a = (0, react_1.useState)(true), isDarkMode = _a[0], setIsDarkMode = _a[1];
    var setMode = function (isDark) {
        window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
        setIsDarkMode(isDark);
    };
    var toggleTheme = function () { return setMode(!isDarkMode); };
    (0, react_1.useEffect)(function () {
        var isBrowserDarkMode = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        var initTheme = isBrowserDarkMode;
        var localSettingTheme = localStorage.getItem('theme');
        if (localSettingTheme) {
            initTheme = localSettingTheme === 'dark';
            setIsDarkMode(initTheme);
        }
    }, []);
    return { isDarkMode: isDarkMode, toggleTheme: toggleTheme };
};
exports.useDarkMode = useDarkMode;
//# sourceMappingURL=useDarkMode.js.map
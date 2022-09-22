import { useEffect, useState } from 'react';
export var useDarkMode = function () {
    var _a = useState(true), isDarkMode = _a[0], setIsDarkMode = _a[1];
    var setMode = function (isDark) {
        window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
        setIsDarkMode(isDark);
    };
    var toggleTheme = function () { return setMode(!isDarkMode); };
    useEffect(function () {
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

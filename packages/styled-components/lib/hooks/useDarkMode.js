import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const setMode = (isDark) => {
        window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
        setIsDarkMode(isDark);
    };
    const toggleTheme = () => setMode(!isDarkMode);
    useEffect(() => {
        const isBrowserDarkMode = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        let initTheme = isBrowserDarkMode;
        const localSettingTheme = localStorage.getItem('theme');
        if (localSettingTheme) {
            initTheme = localSettingTheme === 'dark';
            setIsDarkMode(initTheme);
        }
    }, []);
    return { isDarkMode, toggleTheme };
};
//# sourceMappingURL=useDarkMode.js.map
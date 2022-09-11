export const getThemeName = (mode, isDarkMode) => {
    return {
        auto: isDarkMode ? 'dark' : 'light',
        'light-only': 'light',
        'dark-only': 'dark',
    }[mode];
};
//# sourceMappingURL=utils.js.map
export var getThemeName = function (mode, isDarkMode) {
    return {
        auto: isDarkMode ? 'dark' : 'light',
        'light-only': 'light',
        'dark-only': 'dark',
    }[mode];
};

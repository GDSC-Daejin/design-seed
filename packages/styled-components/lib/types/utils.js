"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThemeName = void 0;
var getThemeName = function (mode, isDarkMode) {
    return {
        auto: isDarkMode ? 'dark' : 'light',
        'light-only': 'light',
        'dark-only': 'dark',
    }[mode];
};
exports.getThemeName = getThemeName;
//# sourceMappingURL=utils.js.map
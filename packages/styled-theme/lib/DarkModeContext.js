"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkModeContext = void 0;
var react_1 = require("react");
var noop = function () { };
exports.DarkModeContext = (0, react_1.createContext)({
    isDarkMode: false,
    toggleTheme: noop,
});
//# sourceMappingURL=DarkModeContext.js.map
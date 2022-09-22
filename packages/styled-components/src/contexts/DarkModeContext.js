import { createContext } from 'react';
var noop = function () { };
export var DarkModeContext = createContext({
    isDarkMode: false,
    toggleTheme: noop,
});

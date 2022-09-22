import { createContext } from 'react';
var noop = function () { };
export var MenuContext = createContext({
    isMenuOpen: false,
    toggleMenu: noop,
    menuHandler: noop,
});

import { useState } from 'react';
export var useToggleMenu = function () {
    var _a = useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var toggleMenu = function () {
        setIsMenuOpen(!isMenuOpen);
    };
    var menuHandler = function (type) {
        setIsMenuOpen(type);
    };
    return { isMenuOpen: isMenuOpen, toggleMenu: toggleMenu, menuHandler: menuHandler };
};

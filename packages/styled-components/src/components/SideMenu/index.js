import React, { useEffect } from 'react';
import { SideMenuWrapper } from './styled';
import OutsideClickHandler from '../../utils/OutsideClickHandler';
var SideMenu = function (_a) {
    var children = _a.children, _b = _a.isMenuOpen, isMenuOpen = _b === void 0 ? false : _b, menuHandler = _a.menuHandler;
    useEffect(function () {
        document.body.style.cssText = "\n    position: fixed; \n    top: -".concat(window.scrollY, "px;\n    overflow-y: scroll;\n    width: 100%;");
        if (!isMenuOpen) {
            var scrollY_1 = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY_1 || '0', 10) * -1);
        }
    }, [isMenuOpen]);
    return (React.createElement(SideMenuWrapper, { animate: isMenuOpen },
        React.createElement(OutsideClickHandler, { outsideClick: function () { return menuHandler(false); } }, children)));
};
export default SideMenu;

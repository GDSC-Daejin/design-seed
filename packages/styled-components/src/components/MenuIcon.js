var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled, { css, useTheme } from 'styled-components';
var StyledSvg = styled.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var StyledPath = styled.path(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  transition: 0.3s;\n"], ["\n  transition: 0.3s;\n"])));
var MiddlePath = styled.path(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  transition: 0.3s;\n"], ["\n  ", "\n  transition: 0.3s;\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive
        ? css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          opacity: 0;\n        "], ["\n          opacity: 0;\n        "]))) : css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          opacity: 1;\n        "], ["\n          opacity: 1;\n        "])));
});
var MenuIcon = function (_a) {
    var isMenuOpen = _a.isMenuOpen;
    var theme = useTheme();
    return (React.createElement(StyledSvg, { width: "23", height: "23", viewBox: "0 0 23 23", fill: theme.colors.grey900 },
        React.createElement(StyledPath, { fill: theme.colors.grey900, strokeWidth: "3", stroke: theme.colors.grey900, strokeLinecap: "round", d: isMenuOpen ? 'M 3 19 L 17 3.5' : 'M 2 4 L 20 4' }),
        React.createElement(MiddlePath, { fill: theme.colors.grey900, strokeWidth: "3", stroke: theme.colors.grey900, strokeLinecap: "round", d: "M 2 11 L 20 11", isActive: isMenuOpen }),
        React.createElement(StyledPath, { fill: theme.colors.grey900, strokeWidth: "3", stroke: theme.colors.grey900, strokeLinecap: "round", d: isMenuOpen ? 'M 3.5 3 L 17 19' : 'M 2 18.346 L 20 18.346' })));
};
export default MenuIcon;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

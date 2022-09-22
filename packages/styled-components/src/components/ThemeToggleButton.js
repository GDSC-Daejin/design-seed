var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import DarkModeIcon from '../assets/darkModeIcon';
import LightModeIcon from '../assets/lightModeIcon';
import { DarkModeContext } from '../contexts/DarkModeContext';
var startAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: rotate(200deg);\n    scale: 0.5;\n    opacity: 0.5;\n  }\n  100% {\n    transform: rotate(360deg);\n    scale: 1;\n    opacity: 1;\n  }\n"], ["\n  0% {\n    transform: rotate(200deg);\n    scale: 0.5;\n    opacity: 0.5;\n  }\n  100% {\n    transform: rotate(360deg);\n    scale: 1;\n    opacity: 1;\n  }\n"])));
var ThemeButton = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 7px;\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  border: 0 solid transparent;\n  border-radius: 20px;\n  cursor: pointer;\n  &:hover {\n    transition: 0.3s;\n    background: ", ";\n  }\n"], ["\n  padding: 7px;\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  border: 0 solid transparent;\n  border-radius: 20px;\n  cursor: pointer;\n  &:hover {\n    transition: 0.3s;\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey50;
});
var ButtonWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  animation-fill-mode: forwards;\n  animation: ", " 0.6s ease-in-out;\n"], ["\n  animation-fill-mode: forwards;\n  animation: ", " 0.6s ease-in-out;\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && startAnimation;
});
export var ThemeToggleButton = function () {
    var _a = useContext(DarkModeContext), isDarkMode = _a.isDarkMode, toggleTheme = _a.toggleTheme;
    var _b = useState(false), animate = _b[0], setAnimate = _b[1];
    return (React.createElement(ThemeButton, { onClick: function () {
            setAnimate(true);
            toggleTheme();
        } },
        React.createElement(ButtonWrapper, { isActive: animate, onAnimationEnd: function () { return setAnimate(false); } }, isDarkMode ? React.createElement(DarkModeIcon, null) : React.createElement(LightModeIcon, null))));
};
var templateObject_1, templateObject_2, templateObject_3;

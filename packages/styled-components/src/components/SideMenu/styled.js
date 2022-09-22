var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
export var SideMenuWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 91;\n  transition: all 0.3s ease-out;\n  background: rgba(0, 0, 0, 0.2);\n  backdrop-filter: saturate(60%) blur(2px);\n  ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 91;\n  transition: all 0.3s ease-out;\n  background: rgba(0, 0, 0, 0.2);\n  backdrop-filter: saturate(60%) blur(2px);\n  ", ";\n"])), function (_a) {
    var animate = _a.animate;
    return animate
        ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          visibility: visible;\n          opacity: 1;\n          //transform: translateX(100vw);\n        "], ["\n          visibility: visible;\n          opacity: 1;\n          //transform: translateX(100vw);\n        "]))) : css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          visibility: hidden;\n          opacity: 0;\n          //transform: translateX(-100vw);\n        "], ["\n          visibility: hidden;\n          opacity: 0;\n          //transform: translateX(-100vw);\n        "])));
});
var templateObject_1, templateObject_2, templateObject_3;

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
export var FooterText = styled.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  margin-right: 20px;\n  color: ", ";\n  cursor: pointer;\n  white-space: nowrap;\n  @media (max-width: ", "px) {\n    margin-top: 10px;\n  }\n  ", "\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  margin-right: 20px;\n  color: ", ";\n  cursor: pointer;\n  white-space: nowrap;\n  @media (max-width: ", "px) {\n    margin-top: 10px;\n  }\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontSizes.textL;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grey600;
}, function (_a) {
    var theme = _a.theme;
    return theme.windowSizes.tablet;
}, function (_a) {
    var google = _a.google;
    return google && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      font-size: ", ";\n      font-weight: 700;\n      color: ", ";\n    "], ["\n      font-size: ", ";\n      font-weight: 700;\n      color: ", ";\n    "])), function (_a) {
        var theme = _a.theme;
        return theme.fontSizes.textXl;
    }, function (_a) {
        var theme = _a.theme;
        return theme.colors.grey700;
    });
});
export var FooterCopyRight = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  font-size: ", ";\n  color: ", ";\n  white-space: nowrap;\n  @media (max-width: ", "px) {\n    font-size: ", ";\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  font-size: ", ";\n  color: ", ";\n  white-space: nowrap;\n  @media (max-width: ", "px) {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontSizes.textM;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grey600;
}, function (_a) {
    var theme = _a.theme;
    return theme.windowSizes.mobile;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSizes.textS;
});
export var FooterWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  bottom: 0;\n  padding: 30px 40px;\n  justify-content: space-between;\n  width: 100vw;\n  box-sizing: border-box;\n  align-items: flex-end;\n  background-color: rgba(0, 0, 0, 0.01);\n  backdrop-filter: blur(10px);\n  @media (max-width: ", "px) {\n    padding: 30px 20px;\n  }\n"], ["\n  display: flex;\n  bottom: 0;\n  padding: 30px 40px;\n  justify-content: space-between;\n  width: 100vw;\n  box-sizing: border-box;\n  align-items: flex-end;\n  background-color: rgba(0, 0, 0, 0.01);\n  backdrop-filter: blur(10px);\n  @media (max-width: ", "px) {\n    padding: 30px 20px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.windowSizes.mobile;
});
export var FooterLogo = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n  @media (max-width: ", "px) {\n    height: 100%;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n  @media (max-width: ", "px) {\n    height: 100%;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.windowSizes.tablet;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
export var NavWrapper = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 70px;\n  position: fixed;\n  top: 0;\n  z-index: 90;\n  background: ", ";\n  box-shadow: 0 4px 30px ", ";\n  width: 100vw;\n  display: flex;\n"], ["\n  height: 70px;\n  position: fixed;\n  top: 0;\n  z-index: 90;\n  background: ", ";\n  box-shadow: 0 4px 30px ", ";\n  width: 100vw;\n  display: flex;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow100;
});
export var NavInner = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 92%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n"], ["\n  width: 92%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n"])));
export var NavTaskWrapper = styled.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  list-style: none;\n  padding-left: 0;\n"], ["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  list-style: none;\n  padding-left: 0;\n"])));
export var StyledLogoWrapper = styled(Link)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  font-size: ", ";\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 4px;\n"], ["\n  display: flex;\n  align-items: center;\n\n  font-size: ", ";\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 4px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontSizes.textXl;
});
export var LogoTitle = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-left: 4px;\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n"], ["\n  margin-left: 4px;\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontWeights.bold;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSizes.textXxl;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grey800;
});
export var NavSubtitle = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  word-break: keep-all;\n  margin-top: 2px;\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  word-break: keep-all;\n  margin-top: 2px;\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey600;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSizes.textM;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontWeights.medium;
}, function (_a) {
    var color = _a.color;
    return color && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (_a) {
        var theme = _a.theme;
        return theme.colors[color];
    });
});
export var LinkWrapper = styled.ul(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-left: 20px;\n  display: none;\n  flex-direction: row;\n  @media (min-width: 800px) {\n    display: flex;\n  } ;\n"], ["\n  margin-left: 20px;\n  display: none;\n  flex-direction: row;\n  @media (min-width: 800px) {\n    display: flex;\n  } ;\n"])));
export var StyledLi = styled.li(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  border-radius: 8px;\n  padding: 10px 15px;\n  margin-left: 0;\n  &:first-child {\n    margin-left: 16px;\n  }\n  cursor: pointer;\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  border-radius: 8px;\n  padding: 10px 15px;\n  margin-left: 0;\n  &:first-child {\n    margin-left: 16px;\n  }\n  cursor: pointer;\n  ", "\n"])), function (_a) {
    var pointColor = _a.pointColor;
    return pointColor && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      &:hover {\n        color: ", ";\n        background-color: ", ";\n        backdrop-filter: blur(10px);\n        text-decoration: none;\n      }\n    "], ["\n      &:hover {\n        color: ", ";\n        background-color: ", ";\n        backdrop-filter: blur(10px);\n        text-decoration: none;\n      }\n    "])), function (_a) {
        var theme = _a.theme;
        return theme.colors[pointColor];
    }, function (_a) {
        var theme = _a.theme;
        return theme.colors.grey100;
    });
});
export var StyledLink = styled(Link)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  text-decoration: none;\n  list-style: none;\n  font-size: ", ";\n  color: ", ";\n  transition: all 0.2s ease-in-out;\n  ", ";\n"], ["\n  text-decoration: none;\n  list-style: none;\n  font-size: ", ";\n  color: ", ";\n  transition: all 0.2s ease-in-out;\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontSizes.textM;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grey700;
}, function (_a) {
    var isRoute = _a.isRoute, pointColor = _a.pointColor;
    return isRoute &&
        pointColor && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (_a) {
        var theme = _a.theme;
        return theme.colors[pointColor];
    });
});
export var MenuButtonWrapper = styled.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  cursor: pointer;\n  ", ";\n  ", ";\n  ", ";\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  ", "\n"], ["\n  cursor: pointer;\n  ", ";\n  ", ";\n  ", ";\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  ", "\n"])), function (_a) {
    var position = _a.position;
    return position === 'left' && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      margin-right: 50px;\n      @media (max-width: 600px) {\n        margin-right: 20px;\n      }\n    "], ["\n      margin-right: 50px;\n      @media (max-width: 600px) {\n        margin-right: 20px;\n      }\n    "])));
}, function (_a) {
    var position = _a.position;
    return position === 'left-mobile-only' && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      margin-right: 20px;\n    "], ["\n      margin-right: 20px;\n    "])));
}, function (_a) {
    var position = _a.position;
    return (position === 'right' || position === 'right-mobile-only') && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      margin-left: 10px;\n    "], ["\n      margin-left: 10px;\n    "])));
}, function (_a) {
    var position = _a.position;
    return (position == 'left-mobile-only' || position == 'right-mobile-only') && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n      @media (min-width: 800px) {\n        display: none;\n      }\n    "], ["\n      @media (min-width: 800px) {\n        display: none;\n      }\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;

import React from 'react';
import GDSCLogo from '../../assets/GDSCLogo';
import { LinkWrapper, LogoTitle, MenuButtonWrapper, NavInner, NavSubtitle, NavTaskWrapper, NavWrapper, StyledLi, StyledLink, StyledLogoWrapper, } from './styled';
import { ThemeToggleButton } from '../..';
import MenuIcon from '../MenuIcon';
import SideMenu from '../SideMenu';
import { useLocation } from 'react-router-dom';
export var Navigation = function (_a) {
    var routes = _a.routes, title = _a.title, customLogo = _a.customLogo, _b = _a.themeButtonActive, themeButtonActive = _b === void 0 ? true : _b, _c = _a.pointColor, pointColor = _c === void 0 ? 'blue900' : _c, _d = _a.menuPosition, menuPosition = _d === void 0 ? 'right' : _d, menuToggle = _a.menuToggle, menuHandler = _a.menuHandler, _e = _a.isMenuOpen, isMenuOpen = _e === void 0 ? false : _e, sideMenu = _a.sideMenu, rightElement = _a.rightElement;
    var location = useLocation();
    return (React.createElement(NavWrapper, null,
        React.createElement(NavInner, null,
            React.createElement(NavTaskWrapper, null,
                (menuPosition == 'left' || menuPosition == 'left-mobile-only') && (React.createElement(MenuButtonWrapper, { position: menuPosition, onClick: menuToggle },
                    React.createElement(MenuIcon, { isMenuOpen: isMenuOpen }))),
                React.createElement(StyledLogoWrapper, { to: '/' }, customLogo ? (React.createElement(React.Fragment, null, customLogo)) : (React.createElement(React.Fragment, null,
                    React.createElement(GDSCLogo, null),
                    React.createElement(LogoTitle, null, "GDSC"),
                    title ? (React.createElement(React.Fragment, null,
                        React.createElement(NavSubtitle, null, "DJU"),
                        React.createElement(NavSubtitle, { color: pointColor }, title))) : (React.createElement(React.Fragment, null,
                        React.createElement(NavSubtitle, { color: pointColor }, "Daejin"),
                        React.createElement(NavSubtitle, { color: pointColor }, "Univ.")))))),
                routes && (React.createElement(LinkWrapper, null, routes.map(function (link) { return (React.createElement(StyledLi, { key: link.route, pointColor: pointColor },
                    React.createElement(StyledLink, { isRoute: location.pathname == link.route, to: link.route, pointColor: pointColor }, link.title))); })))),
            rightElement && React.createElement(React.Fragment, null, rightElement),
            themeButtonActive && React.createElement(ThemeToggleButton, null),
            (menuPosition === 'right' || menuPosition === 'right-mobile-only') && (React.createElement(MenuButtonWrapper, { position: menuPosition, onClick: menuToggle },
                React.createElement(MenuIcon, { isMenuOpen: isMenuOpen })))),
        menuToggle && menuHandler && (React.createElement(SideMenu, { isMenuOpen: isMenuOpen, children: sideMenu, menuHandler: menuHandler }))));
};

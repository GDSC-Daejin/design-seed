import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import GDSCLogo from '../../assets/GDSCLogo';
import { LinkWrapper, LogoTitle, MenuButtonWrapper, NavInner, NavSubtitle, NavTaskWrapper, NavWrapper, StyledLi, StyledLink, StyledLogoWrapper, } from './styled';
import { ThemeToggleButton } from '../..';
import MenuIcon from '../MenuIcon';
import MobileMenu from '../MobileMenu';
import { useLocation } from 'react-router-dom';
export const Navigation = ({ routes, title, customLogo, themeButtonActive = true, pointColor = 'blue900', menuPosition = 'right', menuToggle, isMenuOpen = false, children, }) => {
    const location = useLocation();
    return (_jsxs(NavWrapper, { children: [_jsxs(NavInner, { children: [_jsxs(NavTaskWrapper, { children: [(menuPosition == 'left' || menuPosition == 'left-mobile-only') && (_jsx(MenuButtonWrapper, { position: menuPosition, onClick: menuToggle, children: _jsx(MenuIcon, { isMenuOpen: isMenuOpen }) })), _jsx(StyledLogoWrapper, { to: '/', children: customLogo ? (_jsx(_Fragment, { children: children })) : (_jsxs(_Fragment, { children: [_jsx(GDSCLogo, {}), _jsx(LogoTitle, { children: "GDSC" }), title ? (_jsxs(_Fragment, { children: [_jsx(NavSubtitle, { children: "DJU" }), _jsx(NavSubtitle, { color: pointColor, children: title })] })) : (_jsxs(_Fragment, { children: [_jsx(NavSubtitle, { color: pointColor, children: "Daejin" }), _jsx(NavSubtitle, { color: pointColor, children: "Univ." })] }))] })) }), routes && (_jsx(LinkWrapper, { children: routes.map((link) => (_jsx(StyledLi, { pointColor: pointColor, children: _jsx(StyledLink, { isRoute: location.pathname == link.route, to: link.route, pointColor: pointColor, children: link.title }) }, link.route))) }))] }), themeButtonActive && _jsx(ThemeToggleButton, {}), (menuPosition === 'right' || menuPosition === 'right-mobile-only') && (_jsx(MenuButtonWrapper, { position: menuPosition, onClick: menuToggle, children: _jsx(MenuIcon, { isMenuOpen: isMenuOpen }) }))] }), _jsx(MobileMenu, { isMenuOpen: isMenuOpen, children: children })] }));
};
//# sourceMappingURL=index.js.map
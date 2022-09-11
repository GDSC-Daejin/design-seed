import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from 'react-router';
import GDSCLogo from '../../assets/GDSCLogo';
import { LinkWrapper, LogoTitle, NavInner, NavSubtitle, NavTaskWrapper, NavWrapper, StyledLi, StyledLink, StyledLogoWrapper, } from './styled';
import { ThemeToggleButton } from '../ThemeToggleButton';
export const Navigation = ({ routes, title, pointColor = 'blue900', }) => {
    const location = useLocation();
    return (_jsx(NavWrapper, { children: _jsxs(NavInner, { children: [_jsxs(NavTaskWrapper, { children: [_jsxs(StyledLogoWrapper, { to: '/', children: [_jsx(GDSCLogo, {}), _jsx(LogoTitle, { children: "GDSC" }), title ? (_jsxs(_Fragment, { children: [_jsx(NavSubtitle, { children: "DJU" }), _jsx(NavSubtitle, { color: pointColor, children: title })] })) : (_jsxs(_Fragment, { children: [_jsx(NavSubtitle, { color: pointColor, children: "Daejin" }), _jsx(NavSubtitle, { color: pointColor, children: "Univ." })] }))] }), _jsx(LinkWrapper, { children: routes.map((link) => (_jsx(StyledLi, { pointColor: pointColor, children: _jsx(StyledLink, { isRoute: location.pathname == link.route, to: link.route, pointColor: pointColor, children: link.title }) }, link.route))) })] }), _jsx(ThemeToggleButton, {})] }) }));
};
//# sourceMappingURL=index.js.map
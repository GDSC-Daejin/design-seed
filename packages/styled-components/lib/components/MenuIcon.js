import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { css, useTheme } from 'styled-components';
const StyledSvg = styled.svg `
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledPath = styled.path `
  transition: 0.3s;
`;
const MiddlePath = styled.path `
  ${({ isActive }) => isActive
    ? css `
          opacity: 0;
        `
    : css `
          opacity: 1;
        `}
  transition: 0.3s;
`;
const MenuIcon = ({ isMenuOpen }) => {
    const theme = useTheme();
    return (_jsxs(StyledSvg, { width: "23", height: "23", viewBox: "0 0 23 23", fill: theme.colors.grey900, children: [_jsx(StyledPath, { fill: theme.colors.grey900, strokeWidth: "3", stroke: theme.colors.grey900, strokeLinecap: "round", d: isMenuOpen ? 'M 3 19 L 17 3.5' : 'M 2 4 L 20 4' }), _jsx(MiddlePath, { fill: theme.colors.grey900, strokeWidth: "3", stroke: theme.colors.grey900, strokeLinecap: "round", d: "M 2 11 L 20 11", isActive: isMenuOpen }), _jsx(StyledPath, { fill: theme.colors.grey900, strokeWidth: "3", stroke: theme.colors.grey900, strokeLinecap: "round", d: isMenuOpen ? 'M 3.5 3 L 17 19' : 'M 2 18.346 L 20 18.346' })] }));
};
export default MenuIcon;
//# sourceMappingURL=MenuIcon.js.map
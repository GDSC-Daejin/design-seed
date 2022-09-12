import styled, { css, useTheme } from 'styled-components';
import { GdsTheme } from '../GdsThemeProvider';

declare module 'styled-components' {
  export interface DefaultTheme extends GdsTheme {}
}

interface MenuIconProps {
  isMenuOpen: boolean;
}
const StyledSvg = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledPath = styled.path`
  transition: 0.3s;
`;

const MiddlePath = styled.path<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
  transition: 0.3s;
`;

const MenuIcon = ({ isMenuOpen }: MenuIconProps) => {
  const theme = useTheme();
  return (
    <StyledSvg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill={theme.colors.grey900}
    >
      <StyledPath
        fill={theme.colors.grey900}
        strokeWidth="3"
        stroke={theme.colors.grey900}
        strokeLinecap="round"
        d={isMenuOpen ? 'M 3 19 L 17 3.5' : 'M 2 4 L 20 4'}
      />
      <MiddlePath
        fill={theme.colors.grey900}
        strokeWidth="3"
        stroke={theme.colors.grey900}
        strokeLinecap="round"
        d="M 2 11 L 20 11"
        isActive={isMenuOpen}
      />
      <StyledPath
        fill={theme.colors.grey900}
        strokeWidth="3"
        stroke={theme.colors.grey900}
        strokeLinecap="round"
        d={isMenuOpen ? 'M 3.5 3 L 17 19' : 'M 2 18.346 L 20 18.346'}
        // variants={{
        //   closed: { d: 'M 2 16.346 L 20 16.346' },
        //   open: { d: 'M 3 2.5 L 17 16.346' },
        // }}
      />
    </StyledSvg>
  );
};

export default MenuIcon;

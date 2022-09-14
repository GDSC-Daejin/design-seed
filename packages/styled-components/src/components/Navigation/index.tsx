import React from 'react';
import GDSCLogo from '../../assets/GDSCLogo';

import {
  LinkWrapper,
  LogoTitle,
  MenuButtonWrapper,
  NavInner,
  NavSubtitle,
  NavTaskWrapper,
  NavWrapper,
  StyledLi,
  StyledLink,
  StyledLogoWrapper,
} from './styled';

import { ColorToken, ThemeToggleButton } from '../..';
import MenuIcon from '../MenuIcon';
import SideMenu from '../SideMenu';
import { useLocation } from 'react-router-dom';

export type NavigationRoutes = {
  route: string;
  title: string;
}[];

export interface NavigationProps {
  title?: string;
  routes?: NavigationRoutes;
  pointColor?: ColorToken;
  themeButtonActive?: boolean;
  menuPosition?:
    | 'left'
    | 'right'
    | 'none'
    | 'left-mobile-only'
    | 'right-mobile-only';
  isMenuOpen?: boolean;
  menuToggle?: () => void;
  sideMenu?: React.ReactNode;
  rightElement?: React.ReactNode;
  customLogo?: React.ReactNode;
}

export const Navigation = ({
  routes,
  title,
  customLogo,
  themeButtonActive = true,
  pointColor = 'blue900',
  menuPosition = 'right',
  menuToggle,
  isMenuOpen = false,
  sideMenu,
  rightElement,
}: NavigationProps) => {
  const location = useLocation();
  return (
    <NavWrapper>
      <NavInner>
        <NavTaskWrapper>
          {(menuPosition == 'left' || menuPosition == 'left-mobile-only') && (
            <MenuButtonWrapper position={menuPosition} onClick={menuToggle}>
              <MenuIcon isMenuOpen={isMenuOpen} />
            </MenuButtonWrapper>
          )}
          <StyledLogoWrapper to={'/'}>
            {customLogo ? (
              <>{customLogo}</>
            ) : (
              <>
                <GDSCLogo />
                <LogoTitle>GDSC</LogoTitle>
                {title ? (
                  <>
                    <NavSubtitle>DJU</NavSubtitle>
                    <NavSubtitle color={pointColor}>{title}</NavSubtitle>
                  </>
                ) : (
                  <>
                    <NavSubtitle color={pointColor}>Daejin</NavSubtitle>
                    <NavSubtitle color={pointColor}>Univ.</NavSubtitle>
                  </>
                )}
              </>
            )}
          </StyledLogoWrapper>
          {routes && (
            <LinkWrapper>
              {routes.map((link) => (
                <StyledLi key={link.route} pointColor={pointColor}>
                  <StyledLink
                    isRoute={location.pathname == link.route}
                    to={link.route}
                    pointColor={pointColor}
                  >
                    {link.title}
                  </StyledLink>
                </StyledLi>
              ))}
            </LinkWrapper>
          )}
        </NavTaskWrapper>
        {rightElement && <>{rightElement}</>}
        {themeButtonActive && <ThemeToggleButton />}
        {(menuPosition === 'right' || menuPosition === 'right-mobile-only') && (
          <MenuButtonWrapper position={menuPosition} onClick={menuToggle}>
            <MenuIcon isMenuOpen={isMenuOpen} />
          </MenuButtonWrapper>
        )}
      </NavInner>
      <SideMenu isMenuOpen={isMenuOpen} children={sideMenu} />
    </NavWrapper>
  );
};

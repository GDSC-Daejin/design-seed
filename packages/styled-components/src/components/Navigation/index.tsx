import React from 'react';

import {
  ButtonWrapper,
  LinkWrapper,
  MenuButtonWrapper,
  NavInner,
  NavLogoContainer,
  NavLogoContainerInner,
  NavTaskWrapper,
  NavWrapper,
  StyledLi,
  StyledLink,
} from './styled';
import { ColorToken } from '@gdsc-dju/styled-components-theme';
import MenuIcon from '../MenuIcon';
import SideMenu from '../SideMenu';
import { useLocation } from 'react-router-dom';
import { ThemeToggleButton } from '../ThemeToggleButton';
import NavigationLogo from './NavigationLogo';

export type NavigationRoutes = {
  route: string;
  title: string;
}[];

export interface NavigationProps {
  title?: string;
  routes?: NavigationRoutes;
  pointColor?: ColorToken | string;
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
    <>
      <NavWrapper>
        <NavLogoContainer>
          <NavLogoContainerInner>
            {(menuPosition == 'left' || menuPosition == 'left-mobile-only') && (
              <MenuButtonWrapper position={menuPosition} onClick={menuToggle}>
                <MenuIcon isMenuOpen={isMenuOpen} />
              </MenuButtonWrapper>
            )}
            <NavigationLogo
              title={title}
              customLogo={customLogo}
              pointColor={pointColor}
            />

            <NavTaskWrapper>
              {routes && (
                <LinkWrapper>
                  {routes.map((link) => {
                    const isRoute = location.pathname.includes(link.route);
                    return (
                      <StyledLi key={link.route} color={pointColor}>
                        <StyledLink
                          active={isRoute}
                          to={link.route}
                          color={pointColor}
                        >
                          {link.title}
                        </StyledLink>
                      </StyledLi>
                    );
                  })}
                </LinkWrapper>
              )}
            </NavTaskWrapper>
          </NavLogoContainerInner>
        </NavLogoContainer>
        <NavInner>
          <ButtonWrapper>
            {rightElement && <>{rightElement}</>}
            {themeButtonActive && <ThemeToggleButton />}
            {(menuPosition === 'right' ||
              menuPosition === 'right-mobile-only') && (
              <MenuButtonWrapper position={menuPosition} onClick={menuToggle}>
                <MenuIcon isMenuOpen={isMenuOpen} />
              </MenuButtonWrapper>
            )}
          </ButtonWrapper>
        </NavInner>
        {menuToggle && <SideMenu isMenuOpen={isMenuOpen} children={sideMenu} />}
      </NavWrapper>
    </>
  );
};

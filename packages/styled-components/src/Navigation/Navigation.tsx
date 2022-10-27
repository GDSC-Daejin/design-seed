import React, { useContext, useEffect, useState } from 'react';

import { MenuContext } from '@gdsc-dju/styled-components-theme';

import MenuIcon from '../MenuIcon';
import SideMenu from '../SideMenu/SideMenu';
import ThemeButton from '../ThemeButton';

import NavigationLogo from './NavigationLogo';
import { NavigationProps } from './props';
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
} from './styled';

export type NavigationRoutes = Array<{
  route: string;
  title: string;
}>;

const Navigation = ({
  routes,
  title,
  customLogo,
  themeButtonActive = true,
  pointColor = 'blue900',
  menuPosition = 'right',
  router,
  sideMenu,
  rightElement,
}: NavigationProps) => {
  const [currentLocation, setLocation] = useState<string | undefined>();

  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  useEffect(() => {
    setLocation(location.pathname);
  }, [location.pathname]);

  const routeHandler = (route: string) => {
    router && router(route);
  };

  return (
    <NavWrapper>
      <NavLogoContainer>
        <NavLogoContainerInner>
          {(menuPosition === 'left' || menuPosition === 'left-mobile-only') && (
            <MenuButtonWrapper position={menuPosition} onClick={toggleMenu}>
              <MenuIcon isMenuOpen={isMenuOpen} />
            </MenuButtonWrapper>
          )}
          <NavigationLogo
            title={title}
            onClick={() => routeHandler('/')}
            customLogo={customLogo}
            pointColor={pointColor}
          />

          <NavTaskWrapper>
            {routes && (
              <LinkWrapper>
                {routes.map((link) => {
                  const isRoute = currentLocation?.includes(link.route);
                  return (
                    <StyledLi
                      key={link.route}
                      color={pointColor}
                      active={isRoute}
                      onClick={() => routeHandler(link.route)}
                    >
                      {link.title}
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
          {themeButtonActive && <ThemeButton />}
          {(menuPosition === 'right' ||
            menuPosition === 'right-mobile-only') && (
            <MenuButtonWrapper position={menuPosition} onClick={toggleMenu}>
              <MenuIcon isMenuOpen={isMenuOpen} />
            </MenuButtonWrapper>
          )}
        </ButtonWrapper>
      </NavInner>
      {/* eslint-disable-next-line react/no-children-prop */}
      <SideMenu isMenuOpen={isMenuOpen} children={sideMenu} />
    </NavWrapper>
  );
};

export default Navigation;

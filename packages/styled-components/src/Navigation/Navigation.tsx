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
} from './styled';
import MenuIcon from '../MenuIcon';
import SideMenu from '../SideMenu/SideMenu';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeButton from '../ThemeButton';
import NavigationLogo from './NavigationLogo';
import { NavigationProps } from './props';

export type NavigationRoutes = {
  route: string;
  title: string;
}[];

const Navigation = ({
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
  const navigate = useNavigate();
  return (
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
                    <StyledLi
                      key={link.route}
                      color={pointColor}
                      active={isRoute}
                      onClick={() => {
                        navigate(link.route);
                      }}
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
            <MenuButtonWrapper position={menuPosition} onClick={menuToggle}>
              <MenuIcon isMenuOpen={isMenuOpen} />
            </MenuButtonWrapper>
          )}
        </ButtonWrapper>
      </NavInner>
      {menuToggle && <SideMenu isMenuOpen={isMenuOpen} children={sideMenu} />}
    </NavWrapper>
  );
};

export default Navigation;

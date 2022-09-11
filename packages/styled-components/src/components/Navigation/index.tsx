import React from 'react';
import { useLocation } from 'react-router';
import GDSCLogo from '../../assets/GDSCLogo';

import {
  LinkWrapper,
  LogoTitle,
  NavInner,
  NavSubtitle,
  NavTaskWrapper,
  NavWrapper,
  StyledLi,
  StyledLink,
  StyledLogoWrapper,
} from './styled';
import { ThemeToggleButton } from '../ThemeToggleButton';
import { ColorToken } from '../..';

export type NavigationRoutes = {
  route: string;
  title: string;
}[];

export interface NavigationProps {
  routes: NavigationRoutes;
  title?: string;
  pointColor?: ColorToken;
  themeToggle?: boolean;
}

export const Navigation = ({
  routes,
  title,
  themeToggle = true,
  pointColor = 'blue900',
}: NavigationProps) => {
  const location = useLocation();

  return (
    <NavWrapper>
      <NavInner>
        <NavTaskWrapper>
          <StyledLogoWrapper to={'/'}>
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
          </StyledLogoWrapper>
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
        </NavTaskWrapper>
        {themeToggle && <ThemeToggleButton />}

        {/*<MenuIcon />*/}
      </NavInner>
      {/*<MobileMenu />*/}
    </NavWrapper>
  );
};

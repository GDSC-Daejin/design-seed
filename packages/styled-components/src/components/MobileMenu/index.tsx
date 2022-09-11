import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import GDSCLogo from '../../assets/GDSCLogo.svg';
import { MenuContext } from '../../contexts/MenuContext';

import { StyledLink } from '../../../lib/components/Navigation/styled';
import {
  MenuInner,
  MenuLogo,
  MobileMenuBackground,
  MobileMenuWrapper,
} from './styled';
import { NavigationRoutes } from '../Navigation';

interface MobileMenuProps {
  routes: NavigationRoutes;
}

const MobileMenu = ({ routes }: MobileMenuProps) => {
  const navigate = useNavigate();
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  return (
    <MobileMenuWrapper animate={isMenuOpen}>
      <MobileMenuBackground>
        <MenuLogo src={GDSCLogo} />
        <MenuInner>
          {routes.map((link) => (
            <StyledLink
              key={link.route}
              onClick={() => {
                toggleMenu();
                navigate(link.route);
              }}
            >
              {link.title}
            </StyledLink>
          ))}
        </MenuInner>
      </MobileMenuBackground>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;

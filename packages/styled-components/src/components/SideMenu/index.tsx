import React, { ReactNode, useEffect } from 'react';
import { SideMenuInner, SideMenuWrapper } from './styled';

interface SideMenuProps {
  isMenuOpen?: boolean;
  children?: ReactNode;
}

const SideMenu = ({ children, isMenuOpen = false }: SideMenuProps) => {
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;

    if (!isMenuOpen) {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [isMenuOpen]);

  return (
    <SideMenuWrapper animate={isMenuOpen}>
      <SideMenuInner>{children}</SideMenuInner>
    </SideMenuWrapper>
  );
};

export default SideMenu;

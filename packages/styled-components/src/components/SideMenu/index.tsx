import { ReactNode, useEffect } from 'react';
import { SideMenuWrapper } from './styled';
import OutsideClickHandler from '../../utils/OutsideClickHandler';

interface SideMenuProps {
  isMenuOpen?: boolean;
  children?: ReactNode;
  toggleMenu: () => void;
}

const SideMenu = ({
  children,
  isMenuOpen = false,
  toggleMenu,
}: SideMenuProps) => {
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
    <OutsideClickHandler outsideClick={toggleMenu}>
      <SideMenuWrapper animate={isMenuOpen}>{children}</SideMenuWrapper>
    </OutsideClickHandler>
  );
};

export default SideMenu;

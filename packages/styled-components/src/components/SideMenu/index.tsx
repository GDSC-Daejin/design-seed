import { ReactNode } from 'react';
import { SideMenuWrapper } from './styled';

interface SideMenuProps {
  isMenuOpen?: boolean;
  children?: ReactNode;
}

const SideMenu = ({ children, isMenuOpen = false }: SideMenuProps) => {
  return <SideMenuWrapper animate={isMenuOpen}>{children}</SideMenuWrapper>;
};

export default SideMenu;

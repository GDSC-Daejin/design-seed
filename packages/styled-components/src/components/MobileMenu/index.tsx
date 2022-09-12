import { ReactNode } from 'react';
import { MobileMenuWrapper } from './styled';

interface MobileMenuProps {
  isMenuOpen?: boolean;
  children?: ReactNode;
}

const MobileMenu = ({ children, isMenuOpen = false }: MobileMenuProps) => {
  return <MobileMenuWrapper animate={isMenuOpen}>{children}</MobileMenuWrapper>;
};

export default MobileMenu;

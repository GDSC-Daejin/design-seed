import { ReactNode } from 'react';
interface MobileMenuProps {
    isMenuOpen?: boolean;
    children?: ReactNode;
}
declare const MobileMenu: ({ children, isMenuOpen }: MobileMenuProps) => JSX.Element;
export default MobileMenu;

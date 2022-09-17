import { ReactNode } from 'react';
interface SideMenuProps {
    isMenuOpen?: boolean;
    children?: ReactNode;
    toggleMenu: () => void;
}
declare const SideMenu: ({ children, isMenuOpen, toggleMenu, }: SideMenuProps) => JSX.Element;
export default SideMenu;

import { ReactNode } from 'react';
interface SideMenuProps {
    isMenuOpen?: boolean;
    children?: ReactNode;
}
declare const SideMenu: ({ children, isMenuOpen }: SideMenuProps) => JSX.Element;
export default SideMenu;

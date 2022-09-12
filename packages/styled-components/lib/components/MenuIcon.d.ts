/// <reference types="react" />
import { GdsTheme } from '../GdsThemeProvider';
declare module 'styled-components' {
    interface DefaultTheme extends GdsTheme {
    }
}
interface MenuIconProps {
    isMenuOpen: boolean;
}
declare const MenuIcon: ({ isMenuOpen }: MenuIconProps) => JSX.Element;
export default MenuIcon;

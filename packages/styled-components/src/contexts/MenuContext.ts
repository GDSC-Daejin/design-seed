import { createContext } from 'react';

const noop = () => {};

type MenuContextType = {
  isMenuOpen: boolean;
  toggleMenu: (value?: any) => void;
  handleMenu: (value?: any) => void;
};
export const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  toggleMenu: noop,
  handleMenu: noop,
});

import { createContext } from 'react';
const noop = () => { };
export const MenuContext = createContext({
    isMenuOpen: false,
    toggleMenu: noop,
});
//# sourceMappingURL=MenuContext.js.map
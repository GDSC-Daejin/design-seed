/// <reference types="react" />
declare type MenuContextType = {
    isMenuOpen: boolean;
    toggleMenu: (value?: any) => void;
};
export declare const MenuContext: import("react").Context<MenuContextType>;
export {};

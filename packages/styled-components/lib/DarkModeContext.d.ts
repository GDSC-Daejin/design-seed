/// <reference types="react" />
declare type DarkModeContextType = {
    isDarkMode: boolean;
    toggleTheme: () => void;
};
export declare const DarkModeContext: import("react").Context<DarkModeContextType>;
export {};

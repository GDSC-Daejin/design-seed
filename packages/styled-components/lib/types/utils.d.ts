export declare type ThemeName = 'light' | 'dark';
export declare type BehaviorMode = 'auto' | 'light-only' | 'dark-only';
export declare const getThemeName: (mode: BehaviorMode, isDarkMode: boolean) => ThemeName;
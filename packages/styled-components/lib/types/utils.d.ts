export declare type ThemeName = 'light' | 'dark';
export declare type ThemeMode = 'auto' | 'light-only' | 'dark-only';
export declare const getThemeName: (mode: ThemeMode, isDarkMode: boolean) => ThemeName;

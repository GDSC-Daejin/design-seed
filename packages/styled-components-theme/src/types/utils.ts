export type ThemeName = 'light' | 'dark';

export type ThemeMode = 'auto' | 'light-only' | 'dark-only';

export const getThemeName = (
  mode: ThemeMode,
  isDarkMode: boolean,
): ThemeName => {
  return (
    {
      auto: isDarkMode ? 'dark' : 'light',
      'light-only': 'light',
      'dark-only': 'dark',
    } as const
  )[mode];
};

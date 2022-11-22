import { useEffect, useState } from 'react';

import { changeTheme } from '@gdsc-dju/gds-theme';

export const useTheme = (): [
  string | undefined,
  (theme?: 'light' | 'dark') => void,
] => {
  const [currentTheme, setCurrentTheme] = useState<string>();
  const t = document.documentElement.dataset.seedScaleColor;

  useEffect(() => {
    setCurrentTheme(t);
  }, []);

  const themeHandler = (theme?: string) => {
    changeTheme(theme);
    setCurrentTheme(t);
  };
  return [currentTheme, themeHandler];
};

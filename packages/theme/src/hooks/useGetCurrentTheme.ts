import { useEffect, useState } from 'react';

export const getCurrentTheme = () => {
  const localTheme = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  if (localTheme) {
    return localTheme;
  } else {
    if (prefersLight.matches) {
      return 'light';
    }
    if (prefersDark.matches) {
      return 'dark';
    }
  }
};

export const useGetCurrentTheme = () => {
  const [theme, setTheme] = useState(getCurrentTheme());
  useEffect(() => {
    const handler = () => {
      setTheme(getCurrentTheme());
    };
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener('storage', handler);
    };
  }, []);
  return theme;
};

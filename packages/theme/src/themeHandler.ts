import { ThemeType } from './type';

export function themeHandler(mode: ThemeType) {
  const el = document.documentElement;
  el.dataset.seed = '';
  const savedTheme = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  function apply() {
    el.dataset.seedScaleColor = prefersDark.matches ? 'dark' : 'light';
    localStorage.setItem('theme', el.dataset.seedScaleColor);
  }
  if (mode === 'auto') {
    if (savedTheme) {
      el.dataset.seedScaleColor = savedTheme;
    } else {
      if (prefersLight.matches) {
        if ('addEventListener' in prefersLight) {
          prefersLight.addEventListener('change', apply);
        }
      } else if (prefersDark.matches) {
        if ('addEventListener' in prefersDark) {
          prefersDark.addEventListener('change', apply);
        }
      }
      apply();
    }
  }
  if (mode === 'light') {
    el.dataset.seedScaleColor = 'light';
    localStorage.setItem('theme', el.dataset.seedScaleColor);
  }
  if (mode === 'dark') {
    el.dataset.seedScaleColor = 'dark';
    localStorage.setItem('theme', el.dataset.seedScaleColor);
  }
}
export function changeTheme(theme?: string) {
  const el = document.documentElement;

  const currentTheme = localStorage.getItem('theme');
  if (theme) {
    el.dataset.seedScaleColor = theme;
    localStorage.setItem('theme', theme);
  } else {
    currentTheme === 'dark'
      ? localStorage.setItem('theme', 'light')
      : localStorage.setItem('theme', 'dark');
    el.dataset.seedScaleColor = currentTheme === 'dark' ? 'light' : 'dark';
  }
}

export function themeHandler() {
  const el = document.documentElement;
  el.dataset.seed = '';
  const savedTheme = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  function apply() {
    el.dataset.seedScaleColor = prefersDark.matches ? 'dark' : 'light';
    localStorage.setItem('theme', el.dataset.seedScaleColor);
  }
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
  }
  apply();
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

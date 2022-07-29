import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/styles/theme';
import { useDarkMode } from 'storybook-dark-mode';
import GlobalStyles from '../src/styles/globalStyles';
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: themes.dark,
  },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'black', value: '#000000' },
      { name: 'green', value: '#0f0' },
    ],
  },
};
export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

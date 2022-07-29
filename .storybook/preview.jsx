import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/styles/theme';
import GlobalStyles from '../src/styles/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

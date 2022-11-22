import { GdsThemeProvider } from '@gdsc-dju/styled-components-theme';
import GlobalStyles from '../stories/styles/globalStyles';
import { useDarkMode } from 'storybook-dark-mode';

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
    <GdsThemeProvider mode={useDarkMode() ? 'dark-only' : 'light-only'}>
      <GlobalStyles />
      <Story />
    </GdsThemeProvider>
  ),
];

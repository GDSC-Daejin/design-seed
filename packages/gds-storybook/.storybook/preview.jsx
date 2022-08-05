import { GdsThemeProvider } from 'packages/gds-styled-components';

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
    <GdsThemeProvider mode={'auto'}>
      <Story />
    </GdsThemeProvider>
  ),
];
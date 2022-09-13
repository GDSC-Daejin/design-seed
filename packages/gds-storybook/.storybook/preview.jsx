import { GdsThemeProvider } from '@gdsc-dju/styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../stories/styles/globalStyles';

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
      <GlobalStyles />
      <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
        <Story />
      </BrowserRouter>
    </GdsThemeProvider>
  ),
];

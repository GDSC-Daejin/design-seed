import { GdsThemeProvider } from '@gdsc-dju/styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../stories/styles/globalStyles';
import { Routes, Route } from 'react-router';

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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/*" element={<Story />} />
        </Routes>
      </BrowserRouter>
    </GdsThemeProvider>
  ),
];

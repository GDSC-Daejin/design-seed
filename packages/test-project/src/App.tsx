import { GdsThemeProvider } from '@gdsc-dju/styled-components';
import React from 'react';

import GlobalStyles from './globalStyles';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <GdsThemeProvider mode={'auto'}>
      <GlobalStyles />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </GdsThemeProvider>
  );
}

export default App;

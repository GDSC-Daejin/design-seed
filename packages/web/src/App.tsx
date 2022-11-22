import { useEffect } from 'react';

import { themeHandler } from '@gdsc-dju/gds-theme';

import { Navigation } from '../../ui/src';

import Routes from './Routes';
import GlobalStyles from './styles/globalStyles';

function App() {
  useEffect(() => {
    themeHandler();
  }, []);

  return (
    <div>
      <Navigation />
      <GlobalStyles />
      <Routes />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';

import { themeHandler } from '../../theme/src';
import { Navigation, Footer } from '../../ui/src';

import Routes from './Routes';
import GlobalStyles from './styles/globalStyles';

function App() {
  useEffect(() => {
    themeHandler('auto');
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navigation
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        menuPosition={'none'}
      />
      <GlobalStyles />
      <Routes />
      <Footer />
    </>
  );
}

export default App;

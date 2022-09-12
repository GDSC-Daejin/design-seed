import { Navigation } from '@gdsc-dju/styled-components';
// import { Navigation } from '../../../styled-components/src';

import React, { useContext } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { MenuContext } from '@gdsc-dju/styled-components';

const route = [
  {
    route: '/foundation',
    title: 'Foundation',
  },
  {
    route: '/component',
    title: 'Component',
  },
  {
    route: '/frameWork',
    title: 'FrameWork',
  },
];
const Layout = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  return (
    <>
      <Navigation
        routes={route}
        title={'Design System'}
        pointColor={'blue600'}
        isDarkMode={true}
        isMenuOpen={isMenuOpen}
        menuToggle={toggleMenu}
        menuPosition={'left'}
      />
      <div style={{ height: '70px' }} />
      <Routes>
        <>
          <Route path={'/'} element={<Home />} />
          <Route path={'/foundation'} element={<Home />} />
          <Route path={'/component'} element={<Home />} />
          <Route path={'/frameWork'} element={<Home />} />
        </>
      </Routes>
    </>
  );
};

export default Layout;

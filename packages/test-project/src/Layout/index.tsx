import { Navigation } from '@gdsc-dju/styled-components';
// import { Navigation } from '../../../styled-components/src';

import React, { useContext } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { MenuContext } from '@gdsc-dju/styled-components';
import styled from 'styled-components';

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

const MenuBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const Layout = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  return (
    <>
      <Navigation
        routes={route}
        title={'Design System'}
        pointColor={'blue600'}
        themeButtonActive={true}
        isMenuOpen={isMenuOpen}
        menuToggle={toggleMenu}
        menuPosition={'right'}
        sideMenu={
          // <MenuBackground>
          <h1>asdasdadasd</h1>
          // </MenuBackground>
        }
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

import { Footer, Navigation } from '@gdsc-dju/styled-components';
// import { Navigation } from '../../../1-2-styled-components-theme/src';

import React, { useContext } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { MenuContext } from '../../../styled-components-theme';
import styled from 'styled-components';
import Foundation from '../pages/Foundation';

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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
`;

const Layout = () => {
  const { isMenuOpen, toggleMenu, menuHandler } = useContext(MenuContext);
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
          <MenuBackground onClick={() => menuHandler(false)}>
            테스트
          </MenuBackground>
        }
      />
      <div style={{ height: '70px' }} />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/foundation'} element={<Foundation />} />
        <Route path={'/component'} element={<Home />} />
        <Route path={'/frameWork'} element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;

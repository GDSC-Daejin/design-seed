import { Footer, Navigation } from '../../../styled-components-theme';
// import { Navigation } from '../../../styled-components-theme/src';

import React, { useContext } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { MenuContext } from '../../../styled-components-theme';
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
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
        menuHandler={toggleMenu}
        menuPosition={'right'}
        sideMenu={<MenuBackground>테스트</MenuBackground>}
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
      <Footer />
    </>
  );
};

export default Layout;

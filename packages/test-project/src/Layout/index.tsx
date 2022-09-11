import { Navigation } from '@gdsc-dju/styled-components';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

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
  return (
    <>
      <Navigation
        routes={route}
        title={'Design System'}
        pointColor={'yellow600'}
      />

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

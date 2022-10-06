import { ColorToken } from '@gdsc-dju/styled-components-theme';
import React from 'react';
import { NavigationRoutes } from './Navigation';

export interface NavigationProps {
  title?: string;
  routes?: NavigationRoutes;
  pointColor?: ColorToken | string;
  themeButtonActive?: boolean;
  menuPosition?:
    | 'left'
    | 'right'
    | 'none'
    | 'left-mobile-only'
    | 'right-mobile-only';
  isMenuOpen?: boolean;
  menuToggle?: () => void;
  sideMenu?: React.ReactNode;
  rightElement?: React.ReactNode;
  customLogo?: React.ReactNode;
}

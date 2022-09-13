import React from 'react';
import { ColorToken } from '../..';
export declare type NavigationRoutes = {
    route: string;
    title: string;
}[];
export interface NavigationProps {
    title?: string;
    routes?: NavigationRoutes;
    pointColor?: ColorToken;
    themeButtonActive?: boolean;
    menuPosition?: 'left' | 'right' | 'none' | 'left-mobile-only' | 'right-mobile-only';
    isMenuOpen?: boolean;
    menuToggle?: () => void;
    children?: React.ReactNode;
    customLogo?: React.ReactNode;
}
export declare const Navigation: ({ routes, title, customLogo, themeButtonActive, pointColor, menuPosition, menuToggle, isMenuOpen, children, }: NavigationProps) => JSX.Element;
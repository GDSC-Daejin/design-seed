/// <reference types="react" />
import { ColorToken } from '../..';
export declare type NavigationRoutes = {
    route: string;
    title: string;
}[];
export interface NavigationProps {
    routes: NavigationRoutes;
    title?: string;
    pointColor?: ColorToken;
}
export declare const Navigation: ({ routes, title, pointColor, }: NavigationProps) => JSX.Element;

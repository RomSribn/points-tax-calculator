import React from 'react';
import { Home, Notfound } from '@pages/index';

export interface IRoute {
  path?: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  HOME = '/'
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.HOME, exact: true, component: Home },
  { component: Notfound }
];

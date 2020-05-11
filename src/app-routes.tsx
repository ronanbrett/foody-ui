import React from 'react';
import { Route } from 'react-router-dom';

import Flask from './assets/icons/flask.svg';
import Groceries from './assets/icons/groceries.svg';

import Home from './scenes/Home';

const Blah = () => (
  <div>
    <h2>Blah</h2>
  </div>
);

export interface AppRoutes {
  path: string;
  label: string;
  img?: any;
  order: number;
  component: any;
  routes?: AppRoutes[];
}
export const APP_ROUTES: AppRoutes[] = [
  {
    path: '/blah',
    component: Blah,
    order: 1,
    img: Groceries,
    label: 'Blah',
  },
  {
    path: '/',
    label: 'Home',
    order: 0,
    img: Flask,
    component: Home,
  },
];

export function RouteWithSubRoutes(route: AppRoutes) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

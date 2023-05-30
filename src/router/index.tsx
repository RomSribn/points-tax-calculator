import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '@components/Layout';

import { publicRoutes } from './utils';
/**
 * App router.
 * @returns {React.FC} Layout switch routes.
 */
const AppRouter: React.FC = () => (
  <Layout>
    <Switch>
      {publicRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path || '/404'} />
      ))}
    </Switch>
  </Layout>
);

export { AppRouter };

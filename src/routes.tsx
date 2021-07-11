import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components';
import PrivateRoute from './private-route';
import {
  Home,
} from './views';

export const ROUTES = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
    isExact: true,
    isPrivate: true,
    isSitesFilteringVisible: true,
  },
];

const Routes: FC = () => (
  <Router basename="/">
    <Layout>
      <Switch>
        {ROUTES.map(({
          path, component, isExact, isPrivate,
        }) => {
          if (isPrivate) {
            return (
              <PrivateRoute key={path} exact={isExact} path={path}>
                {component}
              </PrivateRoute>
            );
          }
          return (
            <Route key={path} exact={isExact} path={path}>
              {component}
            </Route>
          );
        })}
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default Routes;

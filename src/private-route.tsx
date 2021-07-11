import React, { FC, ReactNode } from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';

type PrivateRouteProps = {
  children: ReactNode;
  path: string;
  exact?: boolean;
};

type Props = PrivateRouteProps & RouteComponentProps;

const PrivateRoute: FC<Props> = ({
  children, exact = false, path,
}) => (
  <Route exact={exact} path={path}>
    {children}
    {/* {true ? children : null} */}
  </Route>
);

export default withRouter(PrivateRoute);

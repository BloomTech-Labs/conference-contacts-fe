import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (loading || isAuthenticated) return;
    (async () => {
      await loginWithRedirect({
        appState: { targetUrl: path }
      });
    })();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = props => (isAuthenticated ? <Component {...props} /> : null);

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;

import React from 'react';
import ReactDOM from 'react-dom';

// sentry sdk
import * as Sentry from '@sentry/browser';

// auth0 config and init
import config from './auth_config.json';
import { Auth0Provider } from './react-auth0-spa';

// utils
import history from './utils/history';

// apollo init
import AuthorizeApolloProvider from './AuthorizedApolloProvider';

// App component
import App from './App';

// stylesheet
import './styles/index.css';

const onRedirectCallback = appState => {
  history.navigate(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN });

const render = () => {
  ReactDOM.render(
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      audience={config.audience}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <AuthorizeApolloProvider>
        <App />
      </AuthorizeApolloProvider>
    </Auth0Provider>,
    document.getElementById('root')
  );
};
render();

const inDevelopment =
  process.env.NODE_ENV === 'development' || process.env.REACT_APP_ENV === 'development';

if (inDevelopment && module.hot) {
  module.hot.accept('./pages', render);
}

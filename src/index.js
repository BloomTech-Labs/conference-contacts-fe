import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { Auth0Provider } from './react-auth0-spa';
import config from './auth_config.json';
import history from './utils/history';

import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

import './styles/tailwind.css';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_URI,
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token || ''
      }
    });
  }
});

client.cache.writeData({
  data: {
    isLoggedIn: Boolean(localStorage.getItem('token'))
  }
});

const onRedirectCallback = appState => {
  history.navigate(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN });

const render = () => {
  const Pages = require('./pages').default;
  const Landing = require('./pages/landing').default;

  function IsLoggedIn() {
    const { data } = useQuery(IS_LOGGED_IN);
    return data.isLoggedIn ? <Pages /> : <Landing />;
  }

  ReactDOM.render(
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      audience={config.audience}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <ApolloProvider client={client}>
        <IsLoggedIn />
      </ApolloProvider>
    </Auth0Provider>,
    document.getElementById('root')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./pages', render);
}

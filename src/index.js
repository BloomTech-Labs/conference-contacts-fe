import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { Auth0Provider } from './react-auth0-spa';
import config from './auth_config.json';
import history from './utils/history';

import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable } from 'apollo-link';
import gql from 'graphql-tag';

import './styles/tailwind.css';

const request = operation => {
  const token = localStorage.getItem('token');
  operation.setContext({
    headers: {
      authorization: token
    }
  });
};
const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          });
        })
        .catch(observer.error.bind(observer));
      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);
export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    requestLink,
    new HttpLink({
      uri: process.env.REACT_APP_APOLLO_URI
    })
  ]),
  cache: new InMemoryCache()
});

client.cache.writeData({
  data: {
    isLoggedIn: Boolean(localStorage.getItem('token'))
  }
});

const onRedirectCallback = appState => {
  history.navigate(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
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

import React from 'react';

// apollo imports
import { ApolloClient, InMemoryCache } from 'apollo-boost';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { gql } from 'graphql-tag';

// component start
const AuthorizedApolloProvider = ({ children }) => {
  // apollo config uri
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_APOLLO_URI
  });

  // create authentication
  const authLink = setContext(async () => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        authorization: token || ''
      }
    };
  });

  // init apollo with config options
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
  });

  // make gql query
  const query = gql`
    query IsUserLoggedIn {
      isLoggedIn
    }
  `;

  // add data (if returning user) to cache
  apolloClient.writeQuery({
    query,
    data: {
      isLoggedIn: Boolean(localStorage.getItem('token'))
    }
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;

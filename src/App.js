import React, { useEffect } from 'react';

// apollo imports
import { gql } from 'apollo-boost';
import { useApolloClient } from '@apollo/react-hooks';

// auth0 imports
import { useAuth0 } from './react-auth0-spa';

// component imports
import Pages from './pages';
import Landing from './pages/landing';

export default function App(props) {
  // access apollo client
  const client = useApolloClient();

  // access to useAuth0
  const { user } = useAuth0();

  // make gql query
  const query = gql`
    query IsUserLoggedIn {
      isLoggedIn
    }
  `;
  // CALL query to get if user is logged in
  const data = client.readQuery({ query });

  useEffect(() => {
    if (user) {
      client.writeData({ data: { isLoggedIn: true } });
      client.mutate({
        mutation: gql`
          mutation CreateUser($user: CreateUserInput!) {
            createUser(data: $user) {
              success
            }
          }
        `,
        variables: {
          user: {
            name: user.name,
            picture: user.picture,
            email: user.email
          }
        }
      });
    }
  }, [user]);

  return data.isLoggedIn ? <Pages /> : <Landing />;
}

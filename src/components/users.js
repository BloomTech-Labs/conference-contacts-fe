import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ALL_USERS = gql`
    {
      users {
        name
        id
      }
    }
  `;

const Users = () => {
    const { loading, error, data } = useQuery(GET_ALL_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{'there was an error', error}</p>;

    return data.users.map(({ user }) => {
        return (
            <div key={user.id}>
              <h1>this is an h1</h1>
                <p>{user.id}</p>
                <p>{user.name}</p>
            </div>
        )
    })
}

export default Users;
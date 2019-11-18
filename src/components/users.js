import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const USERS = gql`
    {
      users {
        name
        id
      }
    }
  `;

const Users = () => {
    const { loading, error, data } = useQuery(USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{'there was an error', error}</p>;

    return data.users.map(({ user }) => {
        return (
            <div key={user.id}>
                <p>{user.id}</p>
                <p>{user.name}</p>
            </div>
        )
    })
}

export default Users;
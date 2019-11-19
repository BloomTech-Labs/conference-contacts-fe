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

    return data.users.map(({ id, name}) => {
        return (
            <div key={id}>
              <h1>Users</h1>
                <h2>{name}</h2>
            </div>
        )
    })
}

export default Users;
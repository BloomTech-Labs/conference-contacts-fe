import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ALL_USERS = gql`
  query GetUsers {
    users {
      name
      id
    }
  }
`;

const Users = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>There was an error.</p>;
  };

  return (
    <>
      <h3>User List</h3>
      <ul>
        {data.users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;

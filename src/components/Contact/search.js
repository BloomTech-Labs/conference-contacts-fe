import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { GET_USER_CONNECTIONS } from '../../queries/index';

export default Search = ({ fields, setFields, refetch }) => {
  const { data } = useQuery(GET_USER_CONNECTIONS);
  const { lastChanged, setChanged } = useState();

  const makeArray = (data) => {
    let ids = data.users.map((user) => user.id);
    refetch({ ...fields, ids });
  };
};

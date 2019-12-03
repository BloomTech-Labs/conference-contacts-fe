import { gql } from 'apollo-boost';

export const UPDATE_USER_INFO = gql`
mutation updateUser($id: ID!, $data: UpdateUserInput!) {
  updateUser(id: $id, data: $data) {
    user {
      id
      name
      picture
      jobtitle
      industry
      gender
      birthdate
      bio
    }
    __typename
    code
    message
    success
  }
}
`;

export const GET_USER_PROFILE = gql`
  query GetUserProfile {
    user {
      id
      name
      picture
      bio
      birthdate
      jobtitle
      gender
      industry
    }
  }
`;

export const NAVBAR_PROFILE = gql`
  query GetUserProfile {
    user {
      name
      picture
    }
  }
`;
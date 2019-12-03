import { gql } from 'apollo-boost';

export const UPDATE_USER_INFO = gql`
  mutation updateUser($id: ID!, $data: UpdateUserInput!) {
    updateUser(id: $id, data: $data) {
      code
      success
      message
      user {
        id
        name
        industry
        jobtitle
        gender
        bio
      }
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
      profile {
        id
        value
        type
        privacy
        preferredContact
      }
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

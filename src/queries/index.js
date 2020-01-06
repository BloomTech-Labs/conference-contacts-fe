import { gql } from 'apollo-boost';

export const UPDATE_USER_INFO = gql`
  mutation updateUser($data: UpdateUserInput!) {
    updateUser(data: $data) {
      code
      success
      message
      user {
        id
        name
        picture
        birthdate
        location
        industry
        jobtitle
        tagline
        bio
      }
    }
  }
`;

export const CREATE_PROFILE_FIELD = gql`
  mutation createProfileField($data: CreateProfileFieldInput!) {
    createProfileField(data: $data) {
      code
      success
      message
      profileField {
        id
        type
        value
        privacy
        preferredContact
      }
    }
  }
`;

export const UPDATE_PROFILE_FIELD = gql`
  mutation updateProfileField($id: ID!, $data: UpdateProfileFieldInput!) {
    updateProfileField(id: $id, data: $data) {
      code
      success
      message
      profileField {
        id
        type
        value
        privacy
        preferredContact
      }
    }
  }
`;

export const DELETE_PROFILE_FIELD = gql`
  mutation deleteProfileField($id: ID!) {
    deleteProfileField(id: $id) {
      code
      success
      message
      profileField {
        id
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
      birthdate
      location
      industry
      jobtitle
      tagline
      bio
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
      id
    }
  }
`;

export const GET_USER_CONNECTIONS = gql`
  query getUserConnections($id: ID) {
    user(id: $id) {
      connections {
        sender {
          name
          picture
        }
      }
    }
  }
`;

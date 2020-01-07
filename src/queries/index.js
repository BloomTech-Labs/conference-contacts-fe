import { gql } from 'apollo-boost';

export const FETCH_QRCODE_DATA = gql`
  query FetchQRCodeData($id: ID!) {
    qrcode(id: $id) {
      id
      user {
        id
      }
    }
  }
`;

export const CREATE_QRCODE = gql`
  mutation createQRCode($label: String!) {
    createQRCode(label: $label) {
      qrcode {
        id
        label
      }
    }
  }
`;

export const CREATE_CONNECTION = gql`
  mutation createConnection($userID: ID!, $senderCoords: CoordinatesInput!) {
    createConnection(userID: $userID, senderCoords: $senderCoords) {
      success
      message
      connection {
        id
      }
    }
  }
`;

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

export const FETCH_HOME_USER = gql`
  query FetchHomeUser {
    user {
      id
      name
      picture
      notifications {
        id
        message
      }
      receivedConnections {
        id
        status
        sender {
          name
          picture
        }
      }
    }
  }
`;

export const DISMISS_NOTIFICATION = gql`
  mutation DismissNotification($id: ID!) {
    deleteNotification(id: $id) {
      success
      message
      notification {
        id
      }
    }
  }
`;

export const ACCEPT_CONNECTION = gql`
  mutation AcceptConnection($id: ID!, $receiverCoords: CoordinatesInput!) {
    acceptConnection(id: $id, receiverCoords: $receiverCoords) {
      success
      message
      connection {
        id
      }
    }
  }
`;

export const DELETE_CONNECTION = gql`
  mutation DeleteConnection($id: ID!) {
    deleteConnection(id: $id) {
      success
      message
      connection {
        id
      }
    }
  }
`;

export const FETCH_USER_PROFILE = gql`
  query FetchUserProfile($id: ID) {
    user(id: $id) {
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
  query FetchNavbarProfile {
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
      id
      connections {
        id
        sender {
          id
          name
          picture
        }
        receiver {
          id
          name
          picture
        }
      }
    }
  }
`;

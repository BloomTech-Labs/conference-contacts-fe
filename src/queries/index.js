import gql from 'graphql-tag';

export const USER_FILTER = gql`
  query userFilter($id: ID!) {
    user {
      id
      profile {
        id
        value 
      }
    }
  }
`;


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
        location
        sender {
          id
          name
          picture
          industry
        }
        receiver {
          id
          name
          picture
          industry
        }
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
        username
      }
    }
  }
`;

export const UPDATE_USERNAME = gql`
  mutation updateUser($data: UpdateUserInput!) {
    updateUser(data:$data) {
      code
      success
      message
      user {
        username
      }
    }
  }
`;

export const UPDATE_CONNECTION_NOTE = gql`
  mutation updateConnectionNote($id: ID!, $senderNote: String, $receiverNote: String){
    updateConnectionNote(id: $id, senderNote: $senderNote, receiverNote: $receiverNote){
      code
      success
      message
      connection{
        id
        senderNote
        receiverNote
        sender{
          id
        }
        receiver{
          id
        }
      }
    }
  }
`

export const UPDATE_CONNECTION_EVENT = gql`
  mutation updateConnectionEvent($id: ID!, $senderEvent: String, $receiverEvent: String){
    updateConnectionEvent(id: $id, senderEvent: $senderEvent, receiverEvent: $receiverEvent){
      code
      success
      message
      connection{
        id
        senderEvent
        receiverEvent
        sender{
          id
        }
        receiver{
          id
        }
      }
    }
  }
`

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
      username
      notifications {
        id
        message
      }
      receivedConnections {
        id
        location
        status
        sender {
          id
          name
          picture
          industry
        }
        receiver {
          id
          name
          picture
          industry
        }
      }
      connections {
        id
        location
        sender {
          id
          name
          picture
          industry
        }
        receiver {
          id
          name
          picture
          industry
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
        location
        sender {
          id
          name
          picture
          industry
        }
        receiver {
          id
          name
          picture
          industry
        }
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
      connections {
        id
        senderNote
        receiverNote
        senderEvent
        receiverEvent
        sender{
          id
        }
        receiver{
          id
        }
      }
      username
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

export const FETCH_PUBLIC_PROFILE = gql`
  query FetchPublicProfile($id: ID) {
    user(id: $id) {
      id
      name
      picture
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
      username
    }
  }
`;

export const GET_USER_CONNECTIONS = gql`
  query getUserConnections($id: ID) {
    user(id: $id) {
      id
      pendingConnections {
        id
        location
        sender {
          id
          name
          picture
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
        receiver {
          id
          name
          picture
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
      connections {
        id
        location 
        senderLon
        senderLat
        receiverLat
        receiverLon
        senderNote
        receiverNote
        sender {
          id
          name
          picture
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
        receiver {
          id
          name
          picture
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
    }
  }


`;


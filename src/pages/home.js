import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import {
  FETCH_HOME_USER,
  DISMISS_NOTIFICATION,
  CREATE_CONNECTION,
  ACCEPT_CONNECTION,
  DELETE_CONNECTION,
  GET_USER_CONNECTIONS
} from '../queries/index';
import BeatLoader from 'react-spinners/BeatLoader';
import QRCode from 'qrcode.react';
import gql from 'graphql-tag';


// import pages
import ErrorPage from './errorpage';

// import components
import UserInfo from '../components/userInfo';
import ScanQrButton from '../components/scanQrButton';
import NotificationsComponent from '../components/notificationsComponent';
import EventsComponent from '../components/eventsComponent';
import { set } from 'react-ga';

const QRC = React.memo(QRCode);

const Home = ({ qr }) => {
  // init geolocation local state management
  const [position, setPosition] = useState({});

  // grab qrCode from localStorage
  const qrcData = localStorage.getItem('qrCode');

  // fetch user data from server
  const { loading, error, data, stopPolling } = useQuery(FETCH_HOME_USER, {
    pollInterval: 3000,
  });

  //ApolloCache Client to retrieve profileID
  //see AddPublicProfileHandler helper function below
  const client = useApolloClient();


  //Use Effect
  useEffect(() => {
  
    //gets geolocation data
    navigator.geolocation.getCurrentPosition(position => {
      setPosition(position);

      //calls AddPublicProfileHandler()
      //This is where the public profile id is checked and added to home user's connections
      //public profile id comes from the add button located in Public Profile Component
      AddPublicProfileHandler(position);
    });
    return () => {
      stopPolling();
    };
  }, [stopPolling]);


  const [createConnection, { loading: newConnectLoading }] = useMutation(CREATE_CONNECTION, {
    update(cache, { data: { createConnection: { connection } } }) {
      const { user } = cache.readQuery({ query: GET_USER_CONNECTIONS });
      cache.writeQuery({
        query: GET_USER_CONNECTIONS,
        data: {
          user: {
            ...user,
            pendingConnections: user.pendingConnections.concat(connection)
          }
        }
      });
    }
  });

  const [dismissNotification, { loading: dismissLoading }] = useMutation(DISMISS_NOTIFICATION, {
    update(
      cache,
      {
        data: {
          deleteNotification: { notification },
        },
      }
    ) {
      const { user } = cache.readQuery({ query: FETCH_HOME_USER });
      cache.writeQuery({
        query: FETCH_HOME_USER,
        data: {
          user: {
            ...user,
            notifications: user.notifications.filter((n) => n.id !== notification.id),
          },
        },
      });
    },
  });

  const [acceptConnection, { loading: connectLoading }] = useMutation(ACCEPT_CONNECTION, {
    update(
      cache,
      {
        data: {
          acceptConnection: { connection },
        },
      }
    ) {
      const { user } = cache.readQuery({ query: FETCH_HOME_USER });
      cache.writeQuery({
        query: FETCH_HOME_USER,
        data: {
          user: {
            ...user,
            receivedConnections: user.receivedConnections.filter((c) => c.id !== connection.id),
            connections: user.connections.concat(connection),
          },
        },
      });
    },
  });

  const [deleteConnection, { loading: deleteLoading }] = useMutation(DELETE_CONNECTION, {
    update(
      cache,
      {
        data: {
          deleteConnection: { connection },
        },
      }
    ) {
      const { user } = cache.readQuery({ query: FETCH_HOME_USER });
      cache.writeQuery({
        query: FETCH_HOME_USER,
        data: {
          user: {
            ...user,
            receivedConnections: user.receivedConnections.filter((c) => c.id !== connection.id),
          },
        },
      });
    },
  });

  //Add Public Profile connection to Home User connections helper function
  const AddPublicProfileHandler = async (position) => {
    //geolocation coords
    const {latitude, longitude} = await position.coords;

    //retrieves profile id from session storage
    const isProfileId = sessionStorage.getItem('isProfileId');

    // //query's the cache to retrieve the saved public profile id from PublicProfile Component
    // const {isProfileId} = await client.readQuery({

    // query: gql`
    //     query ReadProfileId {
    //       isProfileId
    //     }
    //   `
    // });

    if(isProfileId !== ''){
      await createConnection({
        variables: {
          userID: isProfileId,
          senderCoords: { latitude, longitude }
        }
      });
    }
  }

  //React Rendering Logic
  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <BeatLoader size={35} loading={loading} color="#7B41FF" />
      </div>
    
    );  
  } else if (error) {
    console.error(error);
    return <ErrorPage />;
  } else {
    const receivedConnections = data.user.receivedConnections.filter((c) => c.status === 'PENDING');

    let notificationCount = receivedConnections.length + data.user.notifications.length;

    // note to future self: stop using netlify - this environment issue caused much grief
    const inDevelopment =
      process.env.NODE_ENV === 'development' || process.env.REACT_APP_ENV === 'development';

    // set qr code links
    const qrLink = inDevelopment
      ? `https://staging.swaap.co/qrLink/${qrcData || qr}`
      : `https://swaap.co/qrLink/${qrcData || qr}`;

    const qrPubLink = inDevelopment
      ? `https://staging.swaap.co/public/${data.user.id}`
      : `https://swaap.co/public/${data.user.id}`;

    return (
      <div className="mobile:pb-6 flex flex-col mt-24">
        <div className="container desktop:w-full  desktop:items-start desktop:flex desktop:flex-row desktop:justify-end">
          {/* qrcode and user info display component */}
          <UserInfo data={data} qrcData={qrcData} qrLink={qrLink} qrPubLink={qrPubLink} QRC={QRC} />
          {/* open camera / scane qr component */}
          <ScanQrButton />
          {/* notifications and requests component */}
          <NotificationsComponent
            data={data}
            dismissNotification={dismissNotification}
            notificationCount={notificationCount}
            dismissLoading={dismissLoading}
            receivedConnections={receivedConnections}
            acceptConnection={acceptConnection}
            position={position}
            connectLoading={connectLoading}
            deleteConnection={deleteConnection}
            deleteLoading={deleteLoading}
          />
          {/* events component */}
          {/* <EventsComponent /> */}
        </div>
      </div>
    );
  }
};

export default Home;

import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  FETCH_HOME_USER,
  DISMISS_NOTIFICATION,
  CREATE_CONNECTION,
  ACCEPT_CONNECTION,
  DELETE_CONNECTION,
  GET_USER_CONNECTIONS,
} from '../../queries/index';
import BeatLoader from 'react-spinners/BeatLoader';
import QRCode from 'qrcode.react';

// import pages
import ErrorPage from '../errorpage';

// import components
import UserInfo from '../../components/Home/userInfo';
import ScanQrButton from '../../components/Home/scanQrButton';
import NotificationsComponent from '../../components/Home/notificationsComponent';
//import EventsComponent from '../components/eventsComponent';

const QRC = React.memo(QRCode);

const Home = ({ qr }) => {
  // init geolocation local state management
  const [position, setPosition] = useState({});

  // grab qrCode from localStorage
  const qrcData = localStorage.getItem('qrCode');

  // fetch user data from server
  const { loading, error, data, stopPolling } = useQuery(FETCH_HOME_USER, {
    //pollInterval: 3000,  <---causing query to run every 3 seconds
  });

  //ApolloCache Client to retrieve profileID
  //see AddPublicProfileHandler helper function below
  //const client = useApolloClient();

   //Add Public Profile connection to Home User connections helper function
   const AddPublicProfileHandler = async (position) => {
    //geolocation coords
    const { latitude, longitude } = await position.coords;

    //retrieves profile id from session storage
    const isProfileId = sessionStorage.getItem('isProfileId');

    if (isProfileId) {
      await createConnection({
        variables: {
          userID: isProfileId,
          senderCoords: { latitude, longitude },
        },
      });
    }
  };

 
  useEffect(() => {
    //gets geolocation data
    navigator.geolocation.getCurrentPosition((position) => {
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
    update(
      cache,
      {
        data: {
          createConnection: { connection },
        },
      }
    ) {
      const { user } = cache.readQuery({ query: GET_USER_CONNECTIONS });
      cache.writeQuery({
        query: GET_USER_CONNECTIONS,
        data: {
          user: {
            ...user,
            pendingConnections: user.pendingConnections.concat(connection),
          },
        },
      });
    },
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

 

  // React Rendering Logic for loading, error, and home component
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

    // set wether in staging/localhost or in production
  // const inDevelopment =
  //   process.env.NODE_ENV === 'development' || process.env.REACT_APP_ENV === 'development';

    // set qr code links
    const qrLink = `https://swaap.co/qrLink/${qrcData || qr}`;

    const qrPubLink = `https://swaap.co/card/${data.user.id}`;

    return (
      <div className="container mobile:pb-6 flex justify-center desktop:mt-24 mobile:mt-20">
        <div className="desktop:w-full mobile:w-10/12 desktop:items-start desktop:flex desktop:flex-row desktop:justify-start">
          {/* qrcode and user info display component */}
          <UserInfo data={data} qrcData={qrcData} qrLink={qrLink} qrPubLink={qrPubLink} QRC={QRC} />
          {/* open camera / scan qr component */}
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
        </div>
      </div>
    );
  }
};

export default Home;

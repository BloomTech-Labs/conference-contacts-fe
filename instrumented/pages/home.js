import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  FETCH_HOME_USER,
  DISMISS_NOTIFICATION,
  ACCEPT_CONNECTION,
  DELETE_CONNECTION
} from '../queries/index';
import BeatLoader from 'react-spinners/BeatLoader';
import QRCode from 'qrcode.react';

// import pages
import ErrorPage from './errorpage';

// import components
import UserInfo from '../components/userInfo';
import ScanQrButton from '../components/scanQrButton';
import NotificationsComponent from '../components/notificationsComponent';
import EventsComponent from '../components/eventsComponent';

const QRC = React.memo(QRCode);

const Home = ({ qr }) => {
  // init geolocation local state management
  const [position, setPosition] = useState({});

  // grab qrCode from localStorage
  const qrcData = localStorage.getItem('qrCode');

  // fetch user data from server
  const { loading, error, data, stopPolling } = useQuery(FETCH_HOME_USER, {
    pollInterval: 3000
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setPosition(position);
    });
    return () => {
      stopPolling();
    };
  }, [stopPolling]);

  const [dismissNotification, { loading: dismissLoading }] = useMutation(DISMISS_NOTIFICATION, {
    update(
      cache,
      {
        data: {
          deleteNotification: { notification }
        }
      }
    ) {
      const { user } = cache.readQuery({ query: FETCH_HOME_USER });
      cache.writeQuery({
        query: FETCH_HOME_USER,
        data: {
          user: {
            ...user,
            notifications: user.notifications.filter(n => n.id !== notification.id)
          }
        }
      });
    }
  });

  const [acceptConnection, { loading: connectLoading }] = useMutation(ACCEPT_CONNECTION, {
    update(
      cache,
      {
        data: {
          acceptConnection: { connection }
        }
      }
    ) {
      const { user } = cache.readQuery({ query: FETCH_HOME_USER });
      cache.writeQuery({
        query: FETCH_HOME_USER,
        data: {
          user: {
            ...user,
            receivedConnections: user.receivedConnections.filter(c => c.id !== connection.id),
            connections: user.connections.concat(connection)
          }
        }
      });
    }
  });

  const [deleteConnection, { loading: deleteLoading }] = useMutation(DELETE_CONNECTION, {
    update(
      cache,
      {
        data: {
          deleteConnection: { connection }
        }
      }
    ) {
      const { user } = cache.readQuery({ query: FETCH_HOME_USER });
      cache.writeQuery({
        query: FETCH_HOME_USER,
        data: {
          user: {
            ...user,
            receivedConnections: user.receivedConnections.filter(c => c.id !== connection.id)
          }
        }
      });
    }
  });

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
    const receivedConnections = data.user.receivedConnections.filter(c => c.status === 'PENDING');

    let notificationCount = receivedConnections.length + data.user.notifications.length;

    // note to future self: stop using netlify - this environment issue caused much grief
    const inDevelopment =
      process.env.NODE_ENV === 'development' || process.env.REACT_APP_ENV === 'development';

    const qrLink = inDevelopment
      ? `https://staging.swaap.co/qrLink/${qrcData || qr}`
      : `https://swaap.co/qrLink/${qrcData || qr}`;

    return (
      <div className="mobile:pb-6 flex flex-col mt-24">
        <div className="container desktop:w-full  desktop:items-start desktop:flex desktop:flex-row desktop:justify-end">
          {/* qrcode and user info display component */}
          <UserInfo data={data} qrcData={qrcData} qrLink={qrLink} QRC={QRC} />
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

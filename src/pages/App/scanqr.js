import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-reader';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { CREATE_CONNECTION, FETCH_QRCODE_DATA, GET_USER_CONNECTIONS } from '../../queries';

const qrRxp = /https:\/\/(staging.)?swaap.co\/qrLink\/(.+)/;

const ScanQr = () => {
  const [connections, setConnections] = useState([]);
  const [position, setPosition] = useState({});
  const [fetchQRCode, { data }] = useLazyQuery(FETCH_QRCODE_DATA);
  const [errors, setErrors] = useState([]);

  const [createConnection, { loading: connectLoading, called }] = useMutation(CREATE_CONNECTION, {
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setPosition(position);
    });
  }, []);

  const handleScan = async (scan) => {
    if (!scan) return;

    const qrMatch = scan.match(qrRxp);

    const inDevelopment =
      process.env.NODE_ENV === 'development' || process.env.REACT_APP_ENV === 'development';

    // // ? do we have the right qrcode for our environment
    if ((!inDevelopment && qrMatch[1]) || (inDevelopment && !qrMatch[1])) {
      return setErrors(['Environment Mismatch']);
    }

    const qrCode = qrMatch[2];

    if (!connectLoading && !connections.includes(qrCode)) {
      await fetchQRCode({ variables: { id: qrCode } });
      if (data?.qrcode?.user && position) {
        setConnections([...connections, qrCode]);
        const { latitude, longitude } = position.coords;
        setErrors([]);
        await createConnection({
          variables: {
            userID: data?.qrcode?.user.id,
            senderCoords: { latitude, longitude },
          },
        });
      } else if (data && !data?.qrcode?.user) {
        setErrors(['Invalid QR Code']);
      }
    }
  };

  const handleError = (err) => {
    console.log(err);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <QrReader
        // delay={100}
        onError={handleError}
        onScan={handleScan}
        facingMode="environment"
        className="mb-6 mt-16 qrsizing"
        showViewFinder={false}
      />
      {errors.length > 0 && (
        <pre className="text-red-500">
          {errors.map((message, i) => (
            <span key={i}>{message}</span>
          ))}
        </pre>
      )}
      {called && !connectLoading && (
        <pre className="text-green-500 text-sm">Connection request successful!</pre>
      )}
      <p className="text-xl m-auto w-3/4 border-b-4 mt-2 pb-4 text-center mx-2">
        Align QR code to swaap information
      </p>
    </div>
  );
};

export default ScanQr;

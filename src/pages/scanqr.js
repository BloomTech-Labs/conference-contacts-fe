import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { CREATE_CONNECTION, FETCH_QRCODE_DATA } from '../queries';

const ScanQr = ({ location }) => {
  const [createConnection, { loading: connectLoading, called }] = useMutation(CREATE_CONNECTION);
  const [connections, setConnections] = useState([]);
  const [fetchQRCode, { data }] = useLazyQuery(FETCH_QRCODE_DATA);

  const handleScan = async scan => {
    if (!scan) return;
    const [, qrCode] = scan.match(/swaap.co\/qrLink\/(.+)/);
    if (!connectLoading && !connections.includes(qrCode)) {
      await fetchQRCode({ variables: { id: qrCode } });
      if (data) {
        setConnections([...connections, qrCode]);
        navigator.geolocation.getCurrentPosition(async position => {
          const { latitude, longitude } = position.coords;
          await createConnection({
            variables: {
              userID: data.qrcode.user.id,
              senderCoords: { latitude, longitude }
            }
          });
        });
      }
    }
  };

  const handleError = err => {
    console.log(err);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <QrReader
        // delay={100}
        onError={handleError}
        onScan={handleScan}
        facingMode="environment"
        style={{ width: '100%' }}
        className="mt-12 mb-6"
        showViewFinder={true}
      />
      {called && !connectLoading && <p className="text-center text-green-500 text-sm">Connection request successful!</p>}
      <p className="text-xl m-auto w-3/4 border-b-4 mt-2 pb-4 text-center mx-2">
        Align QR code to swaap information
      </p>
      {/* <div className="mt-12 flex flex-col justify-center items-center">
        <button onClick={() => navigate('readqr')}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.97266 0H0.753906C0.339062 0 0.00390625 0.335156 0.00390625 0.75V7.96875C0.00390625 8.07187 0.0882812 8.15625 0.191406 8.15625H7.97266C8.07578 8.15625 8.16016 8.07187 8.16016 7.96875V0.1875C8.16016 0.084375 8.07578 0 7.97266 0ZM6.66016 6.65625H1.50391V1.5H6.66016V6.65625ZM3.42578 4.92188H4.73828C4.84141 4.92188 4.92578 4.8375 4.92578 4.73438V3.42188C4.92578 3.31875 4.84141 3.23438 4.73828 3.23438H3.42578C3.32266 3.23438 3.23828 3.31875 3.23828 3.42188V4.73438C3.23828 4.8375 3.32266 4.92188 3.42578 4.92188ZM7.97266 9.84375H0.191406C0.0882812 9.84375 0.00390625 9.92813 0.00390625 10.0312V17.25C0.00390625 17.6648 0.339062 18 0.753906 18H7.97266C8.07578 18 8.16016 17.9156 8.16016 17.8125V10.0312C8.16016 9.92813 8.07578 9.84375 7.97266 9.84375ZM6.66016 16.5H1.50391V11.3438H6.66016V16.5ZM3.42578 14.7656H4.73828C4.84141 14.7656 4.92578 14.6812 4.92578 14.5781V13.2656C4.92578 13.1625 4.84141 13.0781 4.73828 13.0781H3.42578C3.32266 13.0781 3.23828 13.1625 3.23828 13.2656V14.5781C3.23828 14.6812 3.32266 14.7656 3.42578 14.7656ZM17.2539 0H10.0352C9.93203 0 9.84766 0.084375 9.84766 0.1875V7.96875C9.84766 8.07187 9.93203 8.15625 10.0352 8.15625H17.8164C17.9195 8.15625 18.0039 8.07187 18.0039 7.96875V0.75C18.0039 0.335156 17.6688 0 17.2539 0ZM16.5039 6.65625H11.3477V1.5H16.5039V6.65625ZM13.2695 4.92188H14.582C14.6852 4.92188 14.7695 4.8375 14.7695 4.73438V3.42188C14.7695 3.31875 14.6852 3.23438 14.582 3.23438H13.2695C13.1664 3.23438 13.082 3.31875 13.082 3.42188V4.73438C13.082 4.8375 13.1664 4.92188 13.2695 4.92188ZM17.8164 9.84375H16.6914C16.5883 9.84375 16.5039 9.92813 16.5039 10.0312V13.1719H14.6758V10.0312C14.6758 9.92813 14.5914 9.84375 14.4883 9.84375H10.0352C9.93203 9.84375 9.84766 9.92813 9.84766 10.0312V17.8125C9.84766 17.9156 9.93203 18 10.0352 18H11.1602C11.2633 18 11.3477 17.9156 11.3477 17.8125V12.0938H13.1758V14.4844C13.1758 14.5875 13.2602 14.6719 13.3633 14.6719H17.8164C17.9195 14.6719 18.0039 14.5875 18.0039 14.4844V10.0312C18.0039 9.92813 17.9195 9.84375 17.8164 9.84375ZM14.4883 16.5H13.3633C13.2602 16.5 13.1758 16.5844 13.1758 16.6875V17.8125C13.1758 17.9156 13.2602 18 13.3633 18H14.4883C14.5914 18 14.6758 17.9156 14.6758 17.8125V16.6875C14.6758 16.5844 14.5914 16.5 14.4883 16.5ZM17.8164 16.5H16.6914C16.5883 16.5 16.5039 16.5844 16.5039 16.6875V17.8125C16.5039 17.9156 16.5883 18 16.6914 18H17.8164C17.9195 18 18.0039 17.9156 18.0039 17.8125V16.6875C18.0039 16.5844 17.9195 16.5 17.8164 16.5Z"
              fill="black"
            />
          </svg>
        </button>
        <p className="text-sm mt-2">My QR code</p>
      </div> */}
    </div>
  );
};

export default ScanQr;

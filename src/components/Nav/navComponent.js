import React, { useState } from 'react';

import NavLink from './navlink';
import QRCode from 'qrcode.react';

import ClipboardJS from 'clipboard';
import ProfileLink from '../PublicProfile/profilelink';

const QRC = React.memo(QRCode);

// Component Start
export default function NavComponent(props) {
  const {
    open,
    setOpen,
    inHeader,
    qrLink,
    qrPubLink,
    qrcData,
    handleLogout,
    data
  } = props;

  const [copySuccess, setCopySuccess] = useState('');
  const [copyFailed, setCopyFailed] = useState('');

  var clipboard = new ClipboardJS('.btn');

  clipboard.on('success', function (e) {
    setCopySuccess('Copied!');
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    setCopyFailed('Copied Unsuccessful!');
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });

  return (
    <nav
      className={
        inHeader
          ? ''
          : 'mobile:hidden py-8 profile-card bg-white m-0 shadow-md w-auto m-auto my-32'
      }
      style={inHeader ? null : { height: '720px' }}
    >
      <div
        className={inHeader ? 'mainNav pt-20' : ''}
        style={inHeader && open ? { transform: 'translateX(0)' } : null}
      >
        <div className="px-6">
          <div className=" flex-col justify-center items-center">
            {/* SMALL IMG ROUND */}
            <img
              className="rounded-full shadow-md mx-auto w-32 h-32 object-cover"
              src={data.user.picture}
              alt={`avatar of ${data.user.name}`}
            />
            <p className="py-3 mobile:text-lg desktop:text-base text-center">{data.user.name}</p>
          </div>
          {qrcData && (
            <div className="text-center text-sm text-white">
              <span className="text-black">Swaap QR Code</span>
              {/* <br /> <span className="text-xs">(for use between Swaap members)</span> */}
              <div className="flex justify-center ">
                <span className="qr-box p-2 my-2">
                  <QRC
                    includeMargin={false}
                    level="Q"
                    renderAs="svg"
                    value={qrLink}
                    fgColor="#6640FF"
                  />
                </span>
              </div>
              
            </div>
          )}
          {/* personal link information */}
          <div className="mobile:hidden mt-0 -mb-6 text-center text-blue-500 text-xs">
            <ProfileLink qrPubLink={qrPubLink} />
          </div>
        </div>
        <ul className="mt-8">
          <NavLink to="/" onClick={inHeader ? () => setOpen(!open) : null}>
            <li className="flex pl-6">
              <svg
                className="mr-4"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8079 9.87311L11.7517 0.821543L11.1446 0.214512C11.0063 0.0771135 10.8193 0 10.6243 0C10.4294 0 10.2423 0.0771135 10.104 0.214512L0.440722 9.87311C0.298998 10.0143 0.186991 10.1824 0.111313 10.3676C0.0356348 10.5528 -0.00218116 10.7512 9.71477e-05 10.9512C0.00947215 11.7762 0.696191 12.4348 1.52119 12.4348H2.51728V20.0684H18.7313V12.4348H19.7485C20.1493 12.4348 20.5267 12.2778 20.8103 11.9942C20.9499 11.855 21.0605 11.6895 21.1358 11.5072C21.211 11.325 21.2493 11.1296 21.2485 10.9325C21.2485 10.534 21.0915 10.1567 20.8079 9.87311ZM11.9368 18.3809H9.31182V13.5997H11.9368V18.3809ZM17.0438 10.7473V18.3809H13.4368V13.0372C13.4368 12.5192 13.0173 12.0997 12.4993 12.0997H8.74932C8.23135 12.0997 7.81182 12.5192 7.81182 13.0372V18.3809H4.20478V10.7473H1.95478L10.6267 2.08248L11.1681 2.62389L19.2962 10.7473H17.0438Z"
                  fill="#1A202C"
                />
              </svg>
              <span className="uppercase">Home</span>
            </li>
          </NavLink>

          <NavLink to="/contacts" onClick={inHeader ? () => setOpen(!open) : null}>
            <li className="flex pl-6">
              <svg
                className="mr-4"
                background="new 0 0 20 20"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3175 14.4035C16.7308 13.8164 16.0454 13.3372 15.2925 12.9879C16.3542 12.1277 17.0316 10.8152 17.0316 9.34332C17.0316 6.74645 14.8659 4.61598 12.2691 4.65582C9.71202 4.69567 7.65187 6.77926 7.65187 9.34332C7.65187 10.8152 8.33155 12.1277 9.39093 12.9879C8.6379 13.3369 7.95238 13.8161 7.36593 14.4035C6.08624 15.6855 5.35968 17.3777 5.3128 19.1824C5.31218 19.2074 5.31657 19.2323 5.32571 19.2556C5.33485 19.2789 5.34856 19.3001 5.36604 19.318C5.38351 19.3359 5.40439 19.3502 5.42745 19.3599C5.45051 19.3696 5.47528 19.3746 5.5003 19.3746H6.8128C6.91358 19.3746 6.99796 19.2949 7.0003 19.1941C7.04483 17.8347 7.59562 16.5621 8.56358 15.5964C9.05891 15.0985 9.64808 14.7037 10.297 14.435C10.9459 14.1662 11.6417 14.0289 12.3441 14.0308C13.7714 14.0308 15.1144 14.5863 16.1245 15.5964C17.0901 16.5621 17.6409 17.8347 17.6878 19.1941C17.6901 19.2949 17.7745 19.3746 17.8753 19.3746H19.1878C19.2128 19.3746 19.2376 19.3696 19.2607 19.3599C19.2837 19.3502 19.3046 19.3359 19.3221 19.318C19.3395 19.3001 19.3533 19.2789 19.3624 19.2556C19.3715 19.2323 19.3759 19.2074 19.3753 19.1824C19.3284 17.3777 18.6019 15.6855 17.3175 14.4035ZM12.3441 12.3433C11.5425 12.3433 10.7878 12.0316 10.223 11.4644C9.93949 11.1832 9.71557 10.8477 9.56457 10.4781C9.41357 10.1084 9.33857 9.71213 9.34405 9.31285C9.35108 8.54411 9.65812 7.80114 10.1948 7.25035C10.7573 6.67379 11.5097 6.3527 12.3136 6.34332C13.1081 6.33629 13.8792 6.64567 14.4464 7.20114C15.0276 7.77067 15.3464 8.53239 15.3464 9.34332C15.3464 10.1449 15.0347 10.8972 14.4675 11.4644C14.1892 11.744 13.8583 11.9657 13.4938 12.1165C13.1293 12.2674 12.7385 12.3445 12.3441 12.3433ZM6.47296 9.96207C6.45187 9.75817 6.44015 9.55192 6.44015 9.34332C6.44015 8.97067 6.4753 8.60739 6.54093 8.25348C6.55733 8.1691 6.5128 8.08239 6.43546 8.04723C6.11671 7.90426 5.82374 7.70739 5.57062 7.45895C5.27235 7.16975 5.03764 6.82155 4.88147 6.43656C4.7253 6.05158 4.65109 5.63828 4.66358 5.22301C4.68468 4.47067 4.98702 3.75582 5.51437 3.21676C6.09327 2.62379 6.8714 2.30035 7.69874 2.30973C8.4464 2.31676 9.16827 2.60504 9.71437 3.11598C9.89952 3.28942 10.0589 3.4816 10.1925 3.68785C10.2394 3.76051 10.3308 3.79098 10.4105 3.76285C10.823 3.61989 11.2589 3.5191 11.7066 3.47223C11.8378 3.45817 11.9128 3.31754 11.8542 3.20035C11.0925 1.69332 9.53624 0.652698 7.73624 0.624573C5.13702 0.58473 2.9714 2.7152 2.9714 5.30973C2.9714 6.7816 3.64874 8.0941 4.71046 8.95426C3.96515 9.29879 3.27843 9.77457 2.68312 10.3699C1.39874 11.6519 0.672178 13.3441 0.625303 15.1511C0.624677 15.1761 0.629065 15.201 0.638207 15.2243C0.647349 15.2476 0.661061 15.2688 0.678535 15.2868C0.696009 15.3047 0.716891 15.3189 0.73995 15.3286C0.76301 15.3383 0.78778 15.3433 0.812803 15.3433H2.12765C2.22843 15.3433 2.3128 15.2636 2.31515 15.1629C2.35968 13.8035 2.91046 12.5308 3.87843 11.5652C4.56749 10.8761 5.41124 10.398 6.33233 10.166C6.42374 10.1425 6.48468 10.0558 6.47296 9.96207Z"
                  fill="#1A202C"
                />
              </svg>
              <span className="uppercase">Contacts</span>
              
            </li>
          </NavLink>
          <NavLink to="/profile" onClick={inHeader ? () => setOpen(!open) : null}>
            <li className="flex pl-6">
              <svg
                className="mr-4"
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00003 0.142822C3.21292 0.142822 0.142883 3.21286 0.142883 6.99997C0.142883 10.7871 3.21292 13.8571 7.00003 13.8571C10.7871 13.8571 13.8572 10.7871 13.8572 6.99997C13.8572 3.21286 10.7871 0.142822 7.00003 0.142822ZM7.00003 1.47001C10.0562 1.47001 12.53 3.94331 12.53 6.99997C12.53 7.95333 12.2893 8.84998 11.8653 9.63258C11.4947 8.90282 10.8277 8.31806 10.0021 8.06838C10.3786 7.49238 10.5807 6.81936 10.5807 6.11517C10.5807 4.13631 8.97923 2.53453 7.00003 2.53453C5.02116 2.53453 3.41938 4.13597 3.41938 6.11517C3.41938 6.81936 3.6215 7.49238 3.99792 8.06838C3.17338 8.31773 2.50589 8.9018 2.13475 9.63258C1.71079 8.85004 1.47007 7.95338 1.47007 6.99997C1.47007 3.94381 3.94337 1.47001 7.00003 1.47001ZM4.78804 6.11517C4.78804 4.89352 5.77838 3.90319 7.00003 3.90319C8.22168 3.90319 9.21201 4.89352 9.21201 6.11517C9.21201 7.33682 8.22168 8.32715 7.00003 8.32715C5.77838 8.32715 4.78804 7.33682 4.78804 6.11517ZM3.13108 10.9523C3.17308 10.0123 3.94824 9.26299 4.89864 9.26299H5.29047C6.35048 9.84056 7.65002 9.84034 8.70961 9.26299H9.10141C10.0518 9.26299 10.827 10.0123 10.869 10.9523C8.71932 13.0568 5.27941 13.0555 3.13108 10.9523Z"
                  fill="#1A202C"
                />
              </svg>
              <span className="uppercase">Profile</span>
            </li>
          </NavLink>
        </ul>
        {/* LOGOUT BUTTON */}
        <div className="flex justify-center mt-6">
          <button
            data-testid="logout-button"
            className="bg-gray-200 w-1/2 shadow br-black text-center text-xl py-2 px-6 rounded-lg hover:bg-black-400 hover:shadow-lg desktop:text:base desktop:px-0 desktop:w-2/3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

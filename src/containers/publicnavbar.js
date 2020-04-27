import React, { useState } from 'react';
import { Link } from '@reach/router';
import { useAuth0 } from '../react-auth0-spa';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { NAVBAR_PROFILE } from '../queries/index';

// import components
import ErrorPage from '../pages/errorpage';
import PublicNav from '../components/Nav/publicnavcomponent';

export default function PublicNavBar({ inHeader }) {
  const [open, setOpen] = useState(false);

  const { loading, error, data } = useQuery(NAVBAR_PROFILE);

  if (loading || !data) return null;
  if (error) return <ErrorPage />;

  const NavLink = (props) => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            background: isCurrent ? 'whiteSmoke' : 'white',
            padding: '10px',
            borderRadius: isCurrent ? '5px' : '0px',
          },
        };
      }}
    />
  );
  if (inHeader) {
    return (
      <>
        <header className="header">
          <div className="navContainer items-center px-4 h-16 shadow ">
            {/* LOGO */}
            <Link to="/">
              <svg width="70" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.018 5.105a1.022 1.022 0 00-1.904-.74 9.641 9.641 0 00-.673 3.51c.007 1.214.233 2.416.67 3.55a1.021 1.021 0 001.91-.721c-.72-1.914-.721-3.746-.003-5.599zm-3.663 6.992c-1.336-2.842-1.337-5.585 0-8.385a1.297 1.297 0 00-2.34-1.117c-.834 1.75-1.251 3.518-1.251 5.29 0 1.773.416 3.546 1.248 5.315a1.296 1.296 0 002.344-1.103zM1.981 15.965a1.024 1.024 0 10-1.915.722c.72 1.915.722 3.747.004 5.6a1.022 1.022 0 101.904.74 9.657 9.657 0 00.673-3.51 10.033 10.033 0 00-.666-3.552zm4.229-1.504c-.04-.09-.083-.18-.125-.27a1.297 1.297 0 10-2.346 1.102c1.338 2.842 1.339 5.585 0 8.385a1.296 1.296 0 102.34 1.116c.044-.09.083-.182.127-.273.75-1.66 1.124-3.332 1.125-5.015.003-1.68-.372-3.364-1.121-5.043v-.002z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M30.827 21.402v.133c-.089 2.242-2.02 4.062-4.395 4.062a4.552 4.552 0 01-3.062-1.199 4.51 4.51 0 01-3.063 1.199c-2.42 0-4.395-1.887-4.395-4.193v-5.573a1.333 1.333 0 012.664 0v5.571c0 .843.776 1.531 1.73 1.531.955 0 1.732-.688 1.732-1.53V15.83a1.332 1.332 0 112.663 0v5.571c0 .843.777 1.531 1.732 1.531.954 0 1.73-.688 1.73-1.53v-5.616a1.332 1.332 0 012.664 0v5.615zM43.5 15.654v8.5a1.269 1.269 0 01-1.287 1.265c-.733 0-1.177-.576-1.177-1.265v-.267c-.954.822-2.064 1.31-3.395 1.31a5.36 5.36 0 110-10.72c1.331 0 2.441.51 3.395 1.287v-.111c0-.688.444-1.265 1.177-1.265a1.269 1.269 0 011.287 1.266zm-3.085 4.192a2.786 2.786 0 00-5.57 0c0 1.532 1.264 2.752 2.794 2.752a2.771 2.771 0 002.776-2.75v-.002zM56.375 15.654v8.5a1.269 1.269 0 01-1.29 1.265c-.732 0-1.175-.576-1.175-1.265v-.267c-.955.822-2.065 1.31-3.396 1.31a5.359 5.359 0 01-3.834-9.174 5.36 5.36 0 013.834-1.546c1.331 0 2.441.51 3.396 1.287v-.111c0-.688.444-1.265 1.176-1.265a1.27 1.27 0 011.289 1.266zm-3.085 4.192a2.786 2.786 0 00-5.571 0c0 1.532 1.264 2.752 2.795 2.752a2.771 2.771 0 002.774-2.75l.002-.002zM70 19.959a5.622 5.622 0 01-5.615 5.615 5.822 5.822 0 01-3.13-.932v5.194a1.342 1.342 0 01-2.593.524 1.344 1.344 0 01-.092-.524V15.718a1.342 1.342 0 011.354-1.332 1.368 1.368 0 011.287.933 5.54 5.54 0 013.174-.977A5.622 5.622 0 0170 19.959zm-2.686 0a2.93 2.93 0 10-2.93 2.93 2.941 2.941 0 002.93-2.93zM12.511 19.491c0 2.357-.607 4.714-1.823 7.054a1.571 1.571 0 01-2.79-1.448c1.777-3.418 1.943-6.75.502-10.15-1.32-2.718-1.82-4.692-1.82-7.046 0-2.355.608-4.714 1.824-7.054a1.571 1.571 0 012.788 1.448c-1.776 3.418-1.942 6.75-.5 10.15 1.237 2.743 1.82 4.692 1.82 7.046z"
                  fill="#000"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="3.884"
                    y1="3.301"
                    x2="16.669"
                    y2="37.337"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#933EFF" />
                    <stop offset="1" stopColor="#0047FF" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>

            <PublicNav open={open} setOpen={setOpen} inHeader={true} data={data} />

            <button
              open={open}
              onClick={() => setOpen(!open)}
              className={`desktop:hidden mobile-nav focus:outline-none navToggle ${
                open ? 'open' : null
              }`}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            open={open}
            onClick={() => setOpen(!open)}
            className={`overlay ${open ? 'open' : ''}`}
          />
        </header>
      </>
    );
  } else if (!inHeader) {
    return <PublicNav inHeader={false} data={data} />;
  }
}

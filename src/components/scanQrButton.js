import React from 'react';

// reach router import
import { Link } from '@reach/router';

export default function ScanQrButton(props) {
  return (
    <div className="flex justify-center my-10 desktop:hidden">
      <div className="purple rounded-full p-6">
        <Link to="scanqr">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.1655 30.4685C36.1655 31.2239 35.8654 31.9483 35.3313 32.4824C34.7971 33.0166 34.0727 33.3166 33.3173 33.3166H7.68408C6.9287 33.3166 6.20427 33.0166 5.67014 32.4824C5.13601 31.9483 4.83594 31.2239 4.83594 30.4685V14.8037C4.83594 14.0484 5.13601 13.3239 5.67014 12.7898C6.20427 12.2557 6.9287 11.9556 7.68408 11.9556H13.3804L16.2285 7.6834H24.7729L27.6211 11.9556H33.3173C34.0727 11.9556 34.7971 12.2557 35.3313 12.7898C35.8654 13.3239 36.1655 14.0484 36.1655 14.8037V30.4685Z"
              stroke="white"
              strokeWidth="2.84814"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.501 27.6204C23.6469 27.6204 26.1972 25.0701 26.1972 21.9241C26.1972 18.7781 23.6469 16.2278 20.501 16.2278C17.355 16.2278 14.8047 18.7781 14.8047 21.9241C14.8047 25.0701 17.355 27.6204 20.501 27.6204Z"
              stroke="white"
              strokeWidth="2.84814"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

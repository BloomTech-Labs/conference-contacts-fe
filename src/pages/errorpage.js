import React from 'react';

// auth0 import
import { useAuth0 } from '../react-auth0-spa';

// apollo client import
import { useApolloClient } from '@apollo/react-hooks';

export default function ErrorPage() {
  const { logout } = useAuth0();
  const client = useApolloClient();

  const handleLogout = () => {
    const hosts = {
      'localhost:3000': 'http://localhost:3000',
      'swaap.co': 'https://swaap.co',
      'staging.swaap.co': 'https://staging.swaap.co'
    };
    client.writeData({ data: { isLoggedIn: false } });
    sessionStorage.clear();
    logout({ returnTo: hosts[window.location.host] });
  };

  return (
    <section className="flex flex-col text-center container mx-auto content-center justify-center h-full min-h-screen">
      <h1 className="text-4xl z-10">Sorry, something went wrong :(</h1>
      <div className="flex content-center justify-center mt-10 z-10">
        <p className="mr-5 z-10">please proceed to the landing site</p>

        <div
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded z-10 hover:cursor-pointer"
          onClick={handleLogout}
        >
          Continue
        </div>
      </div>
      <p
        className="absolute text-gray-300 left-0 right-0"
        style={{ fontSize: '35vw', zIndex: '1' }}
      >
        404
      </p>
    </section>
  );
}

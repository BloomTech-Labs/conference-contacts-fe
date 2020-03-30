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
    localStorage.clear();
    logout({ returnTo: hosts[window.location.host] });
  };

  return (
    <section
      className="flex flex-col text-center container mx-auto content-center justify-center"
      style={{ height: '100vh' }}
    >
      <h1 className="text-4xl">Sorry, something went wrong :(</h1>
      <div className="flex content-center justify-center mt-10">
        <p className="mr-5">please proceed to the landing site</p>

        <div
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Continue
        </div>
      </div>
    </section>
  );
}

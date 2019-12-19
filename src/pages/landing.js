import React from 'react';
import { useAuth0 } from '../react-auth0-spa';

const Landing = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <h1>Swaap Landing</h1>
      <p>Please login to continue.</p>
      <button onClick={loginWithRedirect}>Continue</button>
    </div>
  );
};

export default Landing;

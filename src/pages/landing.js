import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import Button from '../components/button';

const Landing = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <h1>Swaap Landing</h1>
      <p>Please login to continue.</p>
      <Button onClick={loginWithRedirect}>Continue</Button>
    </div>
  );
};

export default Landing;

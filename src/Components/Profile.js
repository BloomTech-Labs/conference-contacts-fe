import React, { useEffect } from 'react';
import { useAuth0 } from '../react-auth0-spa';

const Profile = () => {
  const { loading, user, getTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      const token = await getTokenSilently();
      console.log('token', token);
    })();
  }, [user, getTokenSilently]);

  if (loading || !user) return <div>Loading...</div>;

  return (
    <>
      <img src={user.picture} alt="Profile" width="200" />
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </>
  );
};

// Ask him how to get a proper JWT back from Auth0 because at the moment we're getting a malformed JWT error.

export default Profile;

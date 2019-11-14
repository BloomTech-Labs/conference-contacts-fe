import React from 'react';
import { useAuth0 } from '../react-auth0-spa';

const Profile = () => {
  const { loading, user } = useAuth0();

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

export default Profile;

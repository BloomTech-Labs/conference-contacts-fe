import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
// import ReactGA from 'react-ga';
// function initizeAnalytics() {
//   ReactGA.initialize('UA-152876258-1');
//   ReactGA.pageview('/Profile');
// }
const Profile = () => {
  // initizeAnalytics()
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

// Ask him how to get a proper JWT back from Auth0 because at the moment we're getting a malformed JWT error.

export default Profile;

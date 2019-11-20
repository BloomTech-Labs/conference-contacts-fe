import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_USER_PROFILE = gql`
  query GetUserProfile {
    user {
      id
      name
      picture
    }
  }
`;

const Profile = () => {
  const { loading, error, data } = useQuery(GET_USER_PROFILE);

  if (loading || !data) return <div>Loading...</div>;
  if (error) return <p>There was an error: {error}</p>;

  const { email, name, picture } = data.user;

  return (
    <>
      <div className="max-w-sm mx-auto m-10 rounded overflow-hidden shadow-lg">
        <img className="w-full" src={picture} alt={`profile picuture of ${name}`} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          {email && <p className="text-gray-700 text-base">{email}</p>}
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>

      {/* <img src={user.picture} alt="Profile" width="200" /> */}
      {/* <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre> */}
    </>
  );
};

// Ask him how to get a proper JWT back from Auth0 because at the moment we're getting a malformed JWT error.

export default Profile;

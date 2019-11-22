import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from '@reach/router';

const GET_USER_PROFILE = gql`
  query GetUserProfile {
    user {
      name
      picture
      bio
      birthdate
      jobtitle
      gender
      industry
    }
  }
`;

const Profile = () => {
  const { loading, error, data } = useQuery(GET_USER_PROFILE);

  if (loading || !data) return <div>Loading...</div>;
  if (error) return <p>There was an error: {error}</p>;

  // const { name, picture, bio, birthdate, jobtitle, gender, industry } = data.user;
  console.log(data.user);

  return (
    <>
      <div className="overflow-hidden">
        {/* IMG ROUNG LARGE */}
        <img
          className="rounded-br-full rounded-tr-full
        rounded-bl-full round-tl-lg mt-16 -ml-12 left-2 top-0 max-w-sm shadow-md"
          src={data.user.picture}
          alt={`profile picuture of ${data.user.name}`}
        />

        <Link to="settings" className="flex justify-end mr-12">
          {/* EDIT ICON */}
          <svg className="h-16 w-16 bg-gray-400 rounded-full padding-edit-icon shadow-sm mb-2" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg" > <path d="M14.34 0c-.39 0-.77.15-1.07.44l-2.12 2.12 5.3 5.31 2.12-2.1c.6-.61.6-1.56 0-2.14L15.4.44C15.1.15 14.72 0 14.34 0zm-3.9 3.27l-8.1 8.11 2.56.28.18 2.29 2.28.17.29 2.56 8.1-8.11-5.31-5.3zm-8.69 9.04L0 19l6.7-1.79-.24-2.16-2.31-.17-.18-2.32" fill="#007AFF" /> </svg>
        </Link>
      </div>
      {/* BLACK TEXT XL-4XL */}
      <div className="mt-8 ml-12 max-w-md">
        <h1 className="text-4xl font-medium">{data.user.name}</h1>
        <p className="text-xl mt-4">{data.user.industry}</p>
        <p className="text-2xl mt-2">{data.user.jobtitle}</p>
        <p className="social-tag text-xl mt-6"></p>
        <p className="text-xl mt-6">{data.user.bio}</p>
        <p className="text-xl mt-4">{data.user.gender}</p>
        <p className="text-xl mt-4">{data.user.birthdate}</p>
        {/* GRAY TEXT */}
        <p className="mt-6 text-2xl text-gray-600">Preferred Contact Method</p>

        <div className="flex items-center mt-4">
          <p className="">{data.user.email}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;

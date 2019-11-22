import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const GET_USER_PROFILE = gql`
  query GetUserProfile {
    user {
      name
      picture
    }
  }
`;

const UPDATE_USER_INFO = gql`
  mutation updateUser($id: ID!, $data: updateUserInput!) {
    updateUser(id: $id, data: $data) {
      id
      data
    }
  }
`;

const Settings = ({ id }) => {
  let input;
  const [updateUser] = useMutation(UPDATE_USER_INFO);

  const { loading, error, data } = useQuery(GET_USER_PROFILE);
  let [upload, setupload] = useState(null);

  if (loading || !data) return <div>Loading...</div>;

  if (error) return <p>There was an error: {error}</p>;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateUser({ variables: { id, data: input.value } });
          input.value = '';
        }}
      >
        <div className="pt-32 pb-32 bg-gray-200">
          <div className="flex justify-between pl-10 pr-10 mb-8 text-xl">
            {/* CANCEL BTN */}
            <button className="text-red-500 focus:outline-none hover:text-red-400">Cancel</button>
            {/* SAVE BTN */}
            <button
              type="submit"
              className="text-blue-500 bg-gray-300 py-2 px-4 focus:outline-none rounded-lg hover:shadow-md"
            >
              Save
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button className="focus:outline-none" onClick={e => upload.click()}>
              <div className="relative flex items-center justify-center">
                <img
                  className="shadow-lg w-56 m-auto mb-10 rounded-full"
                  src={data.user.picture}
                  alt={`picture of ${data.user.name}`}
                />
                <svg
                  className="m-auto absolute ml-2 opacity-75 w-16 h-16 hover:opacity-100"
                  viewBox="0 0 48 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {' '}
                  <path
                    d="M42.667 9.33339C43.9047 9.33339 45.0917 9.82505 45.9668 10.7002C46.842 11.5754 47.3337 12.7624 47.3337 14.0001V37.3334C47.3337 38.5711 46.842 39.758 45.9668 40.6332C45.0917 41.5084 43.9047 42.0001 42.667 42.0001H5.33366C4.09598 42.0001 2.909 41.5084 2.03383 40.6332C1.15866 39.758 0.666992 38.5711 0.666992 37.3334V14.0001C0.666992 11.4334 2.76699 9.33339 5.33366 9.33339H10.887L14.9237 1.28339C15.1176 0.898589 15.4142 0.574996 15.7808 0.348477C16.1473 0.121959 16.5694 0.0013625 17.0003 5.65228e-05H31.0003C31.4352 -0.00296978 31.8622 0.115584 32.2333 0.342342C32.6043 0.569101 32.9046 0.89504 33.1003 1.28339L37.0903 9.33339H42.667ZM18.447 4.66672L14.4103 12.7167C14.2164 13.1015 13.9198 13.4251 13.5532 13.6516C13.1867 13.8782 12.7646 13.9987 12.3337 14.0001H5.33366V37.3334H42.667V14.0001H35.667C35.2321 14.0031 34.8051 13.8845 34.434 13.6578C34.063 13.431 33.7627 13.1051 33.567 12.7167L29.577 4.66672H18.447ZM24.0003 32.6667C21.525 32.6667 19.151 31.6834 17.4007 29.933C15.6503 28.1827 14.667 25.8087 14.667 23.3334C14.667 20.858 15.6503 18.4841 17.4007 16.7337C19.151 14.9834 21.525 14.0001 24.0003 14.0001C26.4757 14.0001 28.8497 14.9834 30.6 16.7337C32.3503 18.4841 33.3337 20.858 33.3337 23.3334C33.3337 25.8087 32.3503 28.1827 30.6 29.933C28.8497 31.6834 26.4757 32.6667 24.0003 32.6667ZM24.0003 28.0001C25.238 28.0001 26.425 27.5084 27.3002 26.6332C28.1753 25.758 28.667 24.5711 28.667 23.3334C28.667 22.0957 28.1753 20.9087 27.3002 20.0336C26.425 19.1584 25.238 18.6667 24.0003 18.6667C22.7626 18.6667 21.5757 19.1584 20.7005 20.0336C19.8253 20.9087 19.3337 22.0957 19.3337 23.3334C19.3337 24.5711 19.8253 25.758 20.7005 26.6332C21.5757 27.5084 22.7626 28.0001 24.0003 28.0001Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="">
            {/* INPUT DIV */}
            <div className="mb-6 w-2/3 m-auto">
              {/* LABEL FOR INPUT */}
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              {/* INPUT */}
              <input
                ref={node => {
                  input = node;
                }}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-6 w-2/3 m-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="industry">
                Industry
              </label>
              <input
                ref={node => {
                  input = node;
                }}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="industry"
                type="text"
                placeholder="Industry"
              />
            </div>
            <div className="mb-6 w-2/3 m-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobtitle">
                Job Title
              </label>
              <input
                ref={node => {
                  input = node;
                }}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="jobtitle"
                type="text"
                placeholder="Job Title"
              />
            </div>
            <div className="mb-6 w-2/3 m-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                ref={node => {
                  input = node;
                }}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6 w-2/3 m-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferred">
                Preferred Form Of Contact
              </label>
              <input
                ref={node => {
                  input = node;
                }}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="preferred"
                type="text"
                placeholder="Preferred form of contact"
              />
            </div>
            <div className="mb-6 w-2/3 m-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="socialmedia">
                Social Media
              </label>
              <input
                ref={node => {
                  input = node;
                }}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="socialmedia"
                type="text"
                placeholder="Social Media"
              />
            </div>
            <div className="mb-6 w-2/3 m-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image
              </label>
              <input
                ref={node => {
                  input = node;
                }}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                ref={ref => (upload = ref)}
                id="image"
                type="file"
                name="pic"
                accept="image/*"
                placeholder="Upload Image"
              />
            </div>
            <div className="relative mb-6 w-2/3 m-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Gender
              </label>
              {/* SELECT INPUT */}
              <select className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white">
                <option selected disabled>Your preference</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="NONBINARY">Non-Binary</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 pt-6 pr-4 flex items-center px-2 text-gray-700">
                {/* ARROW SVG */}
                <svg
                  className="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {/* TEXTAREA DIV */}
            <div className="mb-6 w-2/3 m-auto h-24">
              {/* TEXTAREA LABEL */}
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                Bio
              </label>
              {/* TEXTAREA */}
              <textarea
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                id="bio"
                type="textarea"
                placeholder="Tell Me About Yourself..."
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;

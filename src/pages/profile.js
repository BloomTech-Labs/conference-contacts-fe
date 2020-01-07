import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';
import { FETCH_USER_PROFILE, DELETE_CONNECTION, GET_USER_CONNECTIONS } from '../queries/index';
import Icon from '../components/icon';
import HashLoader from 'react-spinners/HashLoader';

const Profile = props => {
  const viewingContact = Boolean(props.location.state.userId);
  const { loading, error, data } = useQuery(FETCH_USER_PROFILE, {
    variables: { id: props.location.state.userId }
  });

  const [deleteConnection, { loading: deleteLoading }] = useMutation(DELETE_CONNECTION, {
    update(cache, { data: { deleteConnection: { connection } } }) {
      const { user } = cache.readQuery({ query: GET_USER_CONNECTIONS });
      cache.writeQuery({
        query: GET_USER_CONNECTIONS,
        data: {
          user: {
            ...user,
            connections: user.connections.filter(c => c.id !== connection.id)
          }
        },
      });
    }
  });

  if (loading || !data)
    return (
      <div className="flex justify-center h-screen items-center">
        <HashLoader size={150} loading={!loading} color="#136FE7" />
      </div>
    );

  if (error) return <p>There was an error: {error}</p>;

  const preferredContact = data.user.profile.find(field => field.preferredContact);
  const contacts = preferredContact
    ? data.user.profile.filter(field => field.id !== preferredContact.id)
    : data.user.profile;

  return (
    <div className="pt-5 flex flex-col overflow-hidden">
      {/* IMG ROUNG LARGE */}
      <div className="self-end mt-6 -mr-20 w-full">
        <img
          className="rounded-full shadow-lg object-cover"
          src={data.user.picture}
          alt={`profile picuture of ${data.user.name}`}
        />
      </div>
      {/* BLACK TEXT XL-4XL */}
      <div className="mt-12 mx-6 mb-8">
        <section>
          <div className="flex justify-between items-center">
            <h5 className="text-2xl font-bold">{data.user.name}</h5>
            {!viewingContact ? (
              <Link to="edit">
                {/* EDIT ICON */}
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4285 4.28564L19.7142 8.57136L8.57136 19.7142H4.28564V15.4285L15.4285 4.28564Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ) : (
                <Icon
                  size={24}
                  type="TRASH"
                  onClick={async () => {
                    if (deleteLoading) return;
                    await deleteConnection({
                      variables: {
                        id: props.location.state.connectionId
                      }
                    });
                    props.navigate('/contacts');
                  }}
                />
              )}
          </div>
          <p className="text-gray-700 tracking-wide">{data.user.industry}</p>
        </section>
        {preferredContact && (
          <section className="mt-10">
            <h2 className="uppercase text-xs text-gray-900 tracking-widest">Preferred Contact</h2>
            <div className="flex mt-3">
              <Icon type={preferredContact.type} size={24} />
              <span className="ml-4 text-blue-500">{preferredContact.value}</span>
            </div>
          </section>
        )}
        <section className="mt-10">
          <h2 className="uppercase text-xs text-gray-900 tracking-widest">Contact Methods</h2>
          <ul className="mt-3">
            {contacts.map(field => (
              <li key={field.id} className="flex mb-3">
                <Icon type={field.type} size={24} />
                <span className="ml-4">{field.value}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="uppercase text-xs text-gray-900 tracking-widest">Interests</h2>
          <div className="flex flex-wrap">
            <div className="flex items-center bg-gray-200 text-gray-700 rounded-full py-1 px-4 mr-3 mt-3">
              <span className="text-gray-700 uppercase text-sm tracking-widest">#ai</span>
            </div>
            <div className="flex items-center bg-gray-200 text-gray-700 rounded-full py-1 px-4 mr-3 mt-3">
              <span className="text-gray-700 uppercase text-sm tracking-widest">#fluent</span>
            </div>
            <div className="flex items-center bg-gray-200 text-gray-700 rounded-full py-1 px-4 mr-3 mt-3">
              <span className="text-gray-700 uppercase text-sm tracking-widest">#asia</span>
            </div>
            <div className="flex items-center bg-gray-200 text-gray-700 rounded-full py-1 px-4 mr-3 mt-3">
              <span className="text-gray-700 uppercase text-sm tracking-widest">#bunnies</span>
            </div>
            <div className="flex items-center bg-gray-200 text-gray-700 rounded-full py-1 px-4 mr-3 mt-3">
              <span className="text-gray-700 uppercase text-sm tracking-widest">#kitties</span>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <h2 className="uppercase text-xs text-gray-900 tracking-widest">Future Events</h2>
          <p className="mt-4">None</p>
        </section>
        <section className="mt-10">
          <h2 className="uppercase text-xs text-gray-900 tracking-widest">Past Events</h2>
          <p className="mt-4">None</p>
        </section>
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import Popup from 'reactjs-popup';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';
import { FETCH_USER_PROFILE, DELETE_CONNECTION, GET_USER_CONNECTIONS } from '../queries/index';
import Icon from '../components/icon';
import SVGIcon from '../components/SocialLinks/SocialIcons/SVGIcon';
import BeatLoader from 'react-spinners/BeatLoader';
import * as moment from 'moment';

const iconSizing = {
  transform: 'scale(1.5)',
};
const Profile = ({ location, navigate }) => {
  const viewingContact = Boolean(location.state.userId);
  const { loading, error, data } = useQuery(FETCH_USER_PROFILE, {
    variables: { id: location.state.userId },
  });

  const [deleteConnection, { loading: deleteLoading }] = useMutation(DELETE_CONNECTION, {
    update(
      cache,
      {
        data: {
          deleteConnection: { connection },
        },
      }
    ) {
      const { user } = cache.readQuery({ query: GET_USER_CONNECTIONS });
      const connections = user.connections.filter((c) => c.id !== connection.id);
      const pendingConnections = user.pendingConnections.filter((c) => c.id !== connection.id);
      cache.writeQuery({
        query: GET_USER_CONNECTIONS,
        data: {
          user:
            location.state.status === 'PENDING'
              ? { ...user, pendingConnections }
              : { ...user, connections },
        },
      });
    },
  });
  if (loading || !data)
    return (
      <div className="flex justify-center h-screen items-center">
        <BeatLoader size={35} loading={loading} color="#7B41FF" />
      </div>
    );
  if (error) return <p>There was an error: {error}</p>;
  const preferredContact = data.user.profile.find((field) => field.preferredContact);
  const contacts = preferredContact
    ? data.user.profile.filter((field) => field.id !== preferredContact.id)
    : data.user.profile;
  return (
    // following two divs add card style
    // to profile page
    <div className="pb-6  mt-24 desktop:flex desktop:justify-end">
      <div className="profile-card pb-4 bg-white mx-6 desktop:mx-0 shadow-md overflow-hidden desktop:w-11/12">
        <div className="pt-5 desktop:pt-0 flex flex-col overflow-hidden px-6 pb-8">
          {viewingContact && (
            <div className="absolute desktop:pt-4">
              <div style={iconSizing}>
                <Icon size={28} type="BACK" onClick={() => navigate('/contacts')} />
              </div>
            </div>
          )}
          <div className="flex flex-col desktop:flex-row-reverse justify-between">
            {/* IMG ROUND LARGE */}
            <div className="self-end -mt-16 -mr-12 desktop:m-0">
              <img
                className="rounded-full shadow-lg w-96 h-96 object-cover "
                src={data.user.picture}
                alt={`profile picuture of ${data.user.name}`}
              />
            </div>

            {/* BLACK TEXT XL-4XL */}

            <div className="flex flex-col pl-0 m-0">
              {/* name, industry, and edit icon if on own profile */}
              <section className="mt-12">
                <div className="flex justify-between items-center">
                  <h5 className="text-2xl font-bold">{data.user.name}</h5>
                  {!viewingContact ? (
                    <Link to="edit">
                      {/* EDIT ICON */}
                      <svg
                        className="ml-3"
                        width="60"
                        height="40"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
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
                    <Popup
                      trigger={
                        <button>
                          <div style={iconSizing}>
                            <Icon size={60} type="TRASH" />
                          </div>
                        </button>
                      }
                      modal
                      position="top left"
                    >
                      {(close) => (
                        <div className="modal text-center font-bold my-4 w-full object-contain">
                          Are you sure you want to delete this contact?
                          <div className="">
                            <br />
                            <div className="flex">
                              <button
                                className="flex-1 bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
                                onClick={async () => {
                                  if (deleteLoading) return;
                                  await deleteConnection({
                                    variables: {
                                      id: location.state.connectionId,
                                    },
                                  });
                                  navigate('/contacts');
                                }}
                              >
                                Delete
                              </button>
                              <button
                                className="flex-1 bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                                onClick={() => {
                                  console.log('modal closed');
                                  close();
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Popup>
                  )}
                </div>
                <p className="text-gray-700 tracking-wide text-xl">{data.user.industry}</p>
              </section>
              {/* job title */}
              <section className="mt-10">
                <h2 className="block uppercase text-sm text-gray-700 tracking-widest mobile:text-lg">
                  Job Title
                </h2>
                <p className=" text-xl">
                  {data.user.jobtitle ? data.user.jobtitle : <span>None</span>}
                </p>
              </section>
              {/* preffered contact method if user has one selected */}
              {preferredContact && (
                <section className="mt-10">
                  <h2 className="block uppercase text-sm text-gray-700 tracking-widest mobile:text-lg">
                    Preferred Contact
                  </h2>
                  <div className="text-base">
                    <a
                      className="flex text-blue-500 hover:text-blue-800 duration-200 w-full"
                      href={
                        preferredContact.type == 'EMAIL'
                          ? `mailto:${preferredContact.value}`
                          : preferredContact.value
                      }
                      target="_blank"
                    >
                      <SVGIcon
                        type={preferredContact.type}
                        size={'1.75rem'}
                        divClass={'flex items-center content-center'}
                        classes={'h-full truncate mr-2'}
                      />
                      <span className="self-end"> {preferredContact.value}</span>
                    </a>
                  </div>
                </section>
              )}
              {/* other contact methods */}
              <section className="mt-10">
                <h2 className="block uppercase text-sm text-gray-700 tracking-widest mobile:text-lg">
                  Contact Methods
                </h2>
                {/* loop through links and check what they are to construct the correct anchor href */}
                <div className="flex flex-no-wrap ">
                  {contacts.length ? (
                    contacts.map((field) => {
                      return (
                        <a
                          className="text-blue-500 hover:text-blue-800 duration-200 mr-8"
                          href={
                            field.type == 'EMAIL'
                              ? `mailto:${field.value}`
                              : field.type == 'PHONE'
                              ? `tel:${field.value}`
                              : field.type == 'SMS'
                              ? `sms:${field.value}`
                              : ''
                          }
                          target="_blank"
                        >
                          <SVGIcon
                            type={field.type}
                            size={'1.75rem'}
                            divClass={'flex items-center content-center'}
                            classes={'h-full truncate'}
                          />
                        </a>
                      );
                    })
                  ) : viewingContact ? (
                    <p>They have not shared any other methods of contact.</p>
                  ) : (
                    <p>You have not added any other methods of contact.</p>
                  )}
                </div>
              </section>
            </div>
          </div>
          <div className="desktop:flex desktop:justify-between">
            <div className="">
              {/* location */}
              <section className="mt-10">
                <h2 className="block uppercase text-sm text-gray-700 tracking-widest mobile:text-lg">
                  Location
                </h2>
                <p className=" text-xl">
                  {data.user.location ? data.user.location : <span>None</span>}
                </p>
              </section>
              {/* DOB */}
              <section className="mt-10">
                <h2 className="block uppercase text-sm text-gray-700 tracking-widest mobile:text-lg">
                  Birthdate
                </h2>
                <p className=" text-xl">
                  {data.user.birthdate ? (
                    moment(data.user.birthdate).format('L')
                  ) : (
                    <span>None</span>
                  )}
                </p>
              </section>
              {/* tagline */}
              <section className="mt-10">
                <h2 className="block uppercase text-sm text-gray-700 tracking-widest mobile:text-lg">
                  Tagline
                </h2>
                <p className=" text-xl">
                  {data.user.tagline ? data.user.tagline : <span>None</span>}
                </p>
              </section>
            </div>
            {/* bio */}
            <section className="mt-10 desktop:w-96 desktop:shadow-lg desktop:p-5 desktop:border-t-4 desktop:border-indigo-500 desktop:rounded-b-lg">
              <h2 className="block uppercase text-sm text-gray-700 tracking-widest mobile:text-lg">
                Bio
              </h2>
              <p className=" text-xl">{data.user.bio ? data.user.bio : <span>None</span>}</p>
            </section>
          </div>
        </div>
        {/* <!-- closing the two card style divs: --> */}
      </div>
    </div>
  );
};
export default Profile;

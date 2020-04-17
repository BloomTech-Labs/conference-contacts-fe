import React, { Fragment } from 'react';
import Popup from 'reactjs-popup';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FETCH_USER_PROFILE, FETCH_HOME_USER, DELETE_CONNECTION, GET_USER_CONNECTIONS } from '../../queries/index';
import SVGIcon from '../../components/SocialLinks/SocialIcons/SVGIcon';
import BeatLoader from 'react-spinners/BeatLoader';

import ConnectionCount from '../PublicProfile/ConnectionCount';
import PublicNavBar from '../../containers/publicnavbar';

const iconSizing = {
    transform: 'scale(1.5)',
  };

const PublicProfile = () => {
    const { loading, error, data } = useQuery(FETCH_USER_PROFILE);

    if (loading || !data)
      return (
        <div className="flex justify-center h-screen items-center">
          <BeatLoader size={35} loading={loading} color="#7B41FF" />
        </div>
      );
    if (error) return <p>There was an error: {error}</p>;

    const preferredContact = data.user.profile.find((field) => field.preferredContact);

      
    return (
      <Fragment>
          <PublicNavBar inHeader={true} />
          {/* public profile page */}
      <div className="pb-6  mt-24 ">
        <div className="flex pb-4 mt-8 bg-white mx-6 desktop:mx-auto overflow-hidden desktop:w-11/12">
           <PublicNavBar inHeader={false} />
          <div className="container pt-5 flex flex-col overflow-hidden px-6 -mt-8 desktop:ml-8">
            <div className="p-0 flex flex-col">
              {/* IMG ROUND LARGE */}
              <div className="self-end -mr-8 mb-4">
                <img
                  className="rounded-full shadow-lg object-cover "
                  src={data.user.picture}
                  alt={`profile picuture of ${data.user.name}`}
                />
              </div>
  
              <div className="flex flex-col pl-0 m-0">
                {/* name */}
                <section className="">
                  <div className="flex justify-between items-center">
                    <h5 className="text-2xl">{data.user.name}</h5>
                  </div>
                </section>
                {/* bio */}
                <section className="mt-4 text-gray-700">
                  <p className="">
                    {data.user.bio ? data.user.bio : <span>This user doesn't have a bio</span>}
                  </p>
                </section>
                {/* preffered contact method */}
                {preferredContact && (
                  <section className="mt-4">
                    <div className="flex text-base items-end">
                      <a
                        className="text-blue-500 hover:text-blue-800 duration-200 mr-2"
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
                          classes={'h-full truncate'}
                        />
                      </a>
                      <span> {preferredContact.value}</span>
                    </div>
                  </section>
                )}
              </div>
              <div className="my-4">
                <ConnectionCount />
              </div>
            </div>
            <div className="bg-gray-300 -mx-6">
                <div className="flex justify-center">
                    <button className="mobile:w-2/3 rounded-full my-12 px-16 bg-purple-700 text-white w-2/5 py-1">Send Request</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default PublicProfile;
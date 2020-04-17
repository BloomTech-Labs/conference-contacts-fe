import React from 'react';
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
      // public profile page
      <div className="pb-6  mt-24">
        {/* <div className="public-card pb-4 bg-white mx-6 desktop:mx-auto shadow-md overflow-hidden desktop:w-4/5"> */}
        <div className="public-card pb-4 bg-white mx-6 desktop:mx-auto shadow-md overflow-hidden desktop:w-1/2">
           <PublicNavBar inHeader={true} />
          <div className="pt-5 flex flex-col overflow-hidden px-6 pb-8">
            <div className="">
              {/* IMG ROUND LARGE */}
              <div className={`self-end -mt-16 -mr-12 desktop:m-0 ${data.user.id}`}>
                <img
                  className="rounded-full shadow-lg w-96 h-96 object-cover "
                  src={data.user.picture}
                  alt={`profile picuture of ${data.user.name}`}
                />
              </div>
  
              <div className="flex flex-col pl-0 m-0">
                {/* name */}
                <section className="mt-12">
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
              <div className="mt-4">
                <ConnectionCount />
              </div>
            </div>
          <button className="bg-purple-700 text-white w-1/2">Send Request</button>
          </div>
        </div>
      </div>
    );
}

export default PublicProfile;
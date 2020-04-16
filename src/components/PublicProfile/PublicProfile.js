import React from 'react';
import Popup from 'reactjs-popup';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FETCH_USER_PROFILE, DELETE_CONNECTION, GET_USER_CONNECTIONS } from '../../queries/index';
import SVGIcon from '../../components/SocialLinks/SocialIcons/SVGIcon';
import BeatLoader from 'react-spinners/BeatLoader';

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

      console.log(data.user.profile)
      console.log(data.user)
    return (
      // to profile page
      <div className="pb-6  mt-24 desktop:flex desktop:justify-end">
        <div className="profile-card pb-4 bg-white mx-6 desktop:mx-0 shadow-md overflow-hidden desktop:w-11/12">
          <div className="pt-5 desktop:pt-0 flex flex-col overflow-hidden px-6 pb-8">
            <div className="flex flex-col desktop:flex-row-reverse justify-between">
              {/* IMG ROUND LARGE */}
              <div className={`self-end -mt-16 -mr-12 desktop:m-0 ${data.user.id}`}>
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
                  </div>
                </section>
                {/* job title */}
                {/* <section className="mt-10">
                  <h2 className="block uppercase text-sm text-gray-700 tracking-widest mobile:text-lg">
                    Job Title
                  </h2>
                  <p className=" text-xl">
                    {data.user.jobtitle ? data.user.jobtitle : <span>None</span>}
                  </p>
                </section> */}
                {/* preffered contact method if user has one selected */}
                {preferredContact && (
                  <section className="mt-10">
                    <h2 className="block uppercase text-sm text-gray-700 tracking-widest mobile:text-lg">
                      Preferred Contact
                    </h2>
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
            </div>
          </div>
          {/* <!-- closing the two card style divs: --> */}
        </div>
      </div>
    );
}

export default PublicProfile;
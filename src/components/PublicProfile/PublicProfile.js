import React, { Fragment } from 'react';

import { useParams } from '@reach/router';
import { useQuery} from '@apollo/react-hooks';
import { FETCH_PUBLIC_PROFILE } from '../../queries/index';
import SVGIcon from '../../components/SocialLinks/SocialIcons/SVGIcon';
import BeatLoader from 'react-spinners/BeatLoader';

//components

//import PublicNavBar from '../../containers/publicnavbar';
import AddButton from './AddButton/AddButton';

const PublicProfile = () => {
  const params = useParams();

  const { loading, error, data } = useQuery(FETCH_PUBLIC_PROFILE, {
    variables: { id: params.id },
  });

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
      
      {/* public profile page */}
      <div className="bg-gray-300  pt-24" style={{ minHeight: '100vh' }}>
        <div
          className="container rounded-lg shadow-lg mx-auto flex flex-col bg-white overflow-hidden mobile:w-10/12"
          style={{ maxWidth: '350px' }}
        >
          
          <div className="px-4 flex flex-col">
            {/* IMG ROUND LARGE */}
            <div className="self-end -mr-10 -mt-8 mb-4 w-64">
              <img
                className="rounded-full shadow-lg object-cover "
                src={data.user.picture}
                alt={`${data.user.name}`}
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
              {/* preferred contact method */}
              {preferredContact && (
                <section className="mt-4">
                  <div className="flex text-base items-end">
                    <a
                      className="flex items-end text-blue-500 hover:text-blue-800 duration-200 mr-2"
                      href={
                        preferredContact.type === 'EMAIL'
                          ? `mailto:${preferredContact.value}`
                          : preferredContact.value
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SVGIcon
                        type={preferredContact.type}
                        size={'1.75rem'}
                        divClass={'flex items-center content-center mr-2'}
                        classes={'h-full truncate'}
                      />

                      <span> {preferredContact.value}</span>
                    </a>
                  </div>
                </section>
              )}
            </div>
          </div>
          <AddButton params={params} />
        </div>
      </div>
    </Fragment>
  );
};

export default PublicProfile;

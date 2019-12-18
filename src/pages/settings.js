import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  GET_USER_PROFILE,
  UPDATE_USER_INFO,
  CREATE_PROFILE_FIELD,
  UPDATE_PROFILE_FIELD,
  DELETE_PROFILE_FIELD
} from '../queries';
import Icon from '../components/icon';
import { Link } from '@reach/router';

export default function Settings(props) {
  const [fields, setFields] = useState({});
  const [link, setLink] = useState('GLOBAL');
  const { loading, error, data } = useQuery(GET_USER_PROFILE);

  const [updateUserInfo] = useMutation(UPDATE_USER_INFO);

  const [updateProfileField] = useMutation(UPDATE_PROFILE_FIELD);

  const [createProfileField] = useMutation(CREATE_PROFILE_FIELD, {
    update(
      cache,
      {
        data: {
          createProfileField: { profileField }
        }
      }
    ) {
      const { user } = cache.readQuery({ query: GET_USER_PROFILE });
      cache.writeQuery({
        query: GET_USER_PROFILE,
        data: {
          user: {
            ...user,
            profile: user.profile.concat(profileField)
          }
        }
      });
    }
  });

  const [deleteProfileField] = useMutation(DELETE_PROFILE_FIELD, {
    update(
      cache,
      {
        data: {
          deleteProfileField: { profileField }
        }
      }
    ) {
      const { user } = cache.readQuery({ query: GET_USER_PROFILE });
      cache.writeQuery({
        query: GET_USER_PROFILE,
        data: {
          user: {
            ...user,
            profile: user.profile.filter(field => field.id !== profileField.id)
          }
        }
      });
    }
  });

  useEffect(() => {
    setFields(data?.user || {});
  }, [data]);

  const handleFieldChange = ({ target: { name, value } }) =>
    setFields({
      ...fields,
      [name]: value
    });

  const handleSave = async () => {
    try {
      const { id, picture, link, profile, __typename, ...changes } = fields;
      console.log(changes);
      await updateUserInfo({ variables: { data: changes } });
      props.navigate('/profile');
    } catch (error) {
      console.error('handleSave', error);
    }
  };

  const handleCancel = () => props.navigate('/settings');

  const handleNewLink = async event => {
    if (event.key !== 'Enter') return;

    const profileData = {
      value: fields.link,
      type: link,
      privacy: 'PRIVATE',
      preferredContact: false
    };

    try {
      await createProfileField({
        variables: {
          data: profileData
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createProfileField: {
            __typename: 'ProfileMutationResponse',
            code: 201,
            success: true,
            message: 'Profile field created successfully',
            profileField: {
              __typename: 'ProfileField',
              id: Math.random().toString(),
              ...profileData
            }
          }
        }
      });
    } catch (error) {
      console.error('createProfileField', error);
    }
  };

  const updateLink = async (field, changes) => {
    try {
      await updateProfileField({
        variables: { id: field.id, data: changes },
        optimisticResponse: {
          __typename: 'Mutation',
          updateProfileField: {
            __typename: 'ProfileMutationResponse',
            code: 200,
            success: true,
            message: 'Profile field updated successfully',
            profileField: {
              __typename: 'ProfileField',
              ...field,
              ...changes
            }
          }
        }
      });
    } catch (error) {
      console.error('updateLink', error);
    }
  };

  const removeLink = async id => {
    try {
      await deleteProfileField({
        variables: { id },
        optimisticResponse: {
          __typename: 'Mutation',
          deleteProfileField: {
            __typename: 'ProfileMutationResponse',
            code: 204,
            success: true,
            message: 'Profile field deleted successfully',
            profileField: {
              __typename: 'ProfileField',
              id
            }
          }
        }
      });
    } catch (error) {
      console.error('removeLink', error);
    }
  };

  if (loading || !data)
    return (
      <div className="flex justify-center h-screen items-center">
        {/* <HashLoader size={150} loading={!loading} color="#136FE7" /> */}
      </div>
    );

  if (error) return <p>Error! ${error}</p>;

  // cloudinary upload widget
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
      uploadPreset: process.env.REACT_APP_CLOUDINARY_PRESET
    },
    (error, result) => {
      if (!error && result?.event === 'success') {
        updateUserInfo({
          variables: {
            data: {
              picture: result.info.url
            }
          }
        });
      }
    }
  );

  // track preferred contact for validation
  const preferredContact = fields?.profile?.find(field => field.preferredContact);

  return (
    <div className="pt-24 p-6">
      <div className=" mt-4 flex justify-between">
        <Link to="/" className="flex justify-between"><button >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13L1 7L7 1" stroke="#9A99A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
       </button>
       </Link>
       <h2 className=" m-auto text-3xl tracking-wide p-3">Settings</h2>
      </div>
      <div>
        <h1 className="block font-bold text-xl pt-8">Account</h1>
      </div>
      <div className="mt-4">
        <label className="block font-medium text-xs mb-1" htmlFor="email">
          EMAIL
        </label>
        <span classname="text-gray-600">{fields.name|| ''}</span>
      </div>
      <div className="mt-4">
        <label className="block font-medium text-xs mb-1" htmlFor="password">
          PASSWORD
        </label>
        <div>

        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm mb-1" htmlFor="industry">
          Industry
        </label>
        <input
          type="text"
          name="industry"
          id="industry"
          className="w-full border border-gray-900 rounded p-2"
          onChange={handleFieldChange}
          value={fields.industry || ''}
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm mb-1" htmlFor="location">
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          className="w-full border border-gray-900 rounded p-2"
          onChange={handleFieldChange}
          value={fields.location || ''}
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm mb-1" htmlFor="birthdate">
          Birthdate
        </label>
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          className="w-full border border-gray-900 rounded p-2"
          onChange={handleFieldChange}
          value={fields.birthdate || ''}
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm mb-1" htmlFor="bio">
          Bio
        </label>
        <textarea
          name="bio"
          id="bio"
          rows="5"
          className="w-full border border-gray-900 rounded p-2"
          onChange={handleFieldChange}
          value={fields.bio || ''}
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <label className="block text-sm mb-1">Links</label>
          <button
            type="button"
            className="text-xs text-blue-500"
            onClick={() => document.getElementById('new-link').classList.toggle('hidden')}
          >
            &#43; add link
          </button>
        </div>
        <ul className="mt-3">
          {fields?.profile?.map((field, idx) => (
            <li key={field.id} className="flex mb-3">
              <Icon type={field.type} size={24} />
              <span
                className={field.preferredContact ? 'ml-4 mr-auto text-blue-500' : 'ml-4 mr-auto'}
              >
                {field.value}
              </span>
              <Icon
                type="MORE"
                size={24}
                classes="mr-3 relative"
                onClick={() => {
                  for (let i = 0; i < fields.profile.length; i++) {
                    const element = document.getElementById(`link-privacy-${i}`);
                    if (i !== idx && !element.classList.contains('hidden')) {
                      element.classList.add('hidden');
                    }
                  }

                  document.getElementById(`link-privacy-${idx}`).classList.toggle('hidden');
                }}
              />
              <div
                id={`link-privacy-${idx}`}
                className="absolute right-0 mr-16 mt-6 p-3 bg-white border border-gray-300 z-10 hidden"
              >
                <div
                  className="flex items-center mb-3"
                  onClick={() => updateLink(field, { privacy: 'PRIVATE' })}
                >
                  <Icon
                    classes="mr-5"
                    type="LOCK"
                    size={17}
                    fill={field.privacy === 'PRIVATE' && '#007AFF'}
                  />
                  <span style={{ color: field.privacy === 'PRIVATE' ? '#007AFF' : 'unset' }}>
                    Private
                  </span>
                </div>
                <div
                  className="flex items-center mb-3"
                  onClick={() => updateLink(field, { privacy: 'PUBLIC' })}
                >
                  <Icon
                    classes="mr-5"
                    type="GLOBE"
                    size={17}
                    fill={field.privacy === 'PUBLIC' && '#007AFF'}
                  />
                  <span style={{ color: field.privacy === 'PUBLIC' ? '#007AFF' : 'unset' }}>
                    Public
                  </span>
                </div>
                <div
                  className="flex items-center"
                  onClick={() => updateLink(field, { privacy: 'CONNECTED' })}
                >
                  <Icon
                    classes="mr-5"
                    type="SWAAP"
                    size={17}
                    fill={field.privacy === 'CONNECTED' && '#007AFF'}
                  />
                  <span style={{ color: field.privacy === 'CONNECTED' ? '#007AFF' : 'unset' }}>
                    Connected
                  </span>
                </div>
                {(!preferredContact || preferredContact.id === field.id) && (
                  <>
                    <hr className="my-3" />
                    <div
                      className="flex items-center mt-3"
                      onClick={() =>
                        updateLink(field, { preferredContact: !field.preferredContact })
                      }
                    >
                      <Icon
                        classes="mr-3"
                        type="CHECK"
                        size={24}
                        fill={field.preferredContact && '#007AFF'}
                      />
                      <span style={{ color: field.preferredContact ? '#007AFF' : 'unset' }}>
                        Main contact
                      </span>
                    </div>
                  </>
                )}
              </div>
              <Icon onClick={() => removeLink(field.id)} type="MINUS-CIRCLE" size={24} />
            </li>
          ))}
        </ul>
      </div>
      <div id="new-link" className="hidden">
        <div className="relative flex items-center">
          <input
            type="text"
            name="link"
            placeholder="Username or URL"
            className="w-full border border-gray-900 rounded p-2 pr-10"
            onChange={handleFieldChange}
            value={fields.link || ''}
            onKeyPress={handleNewLink}
          />
          <div id="link-types" className="absolute flex items-center right-0 mr-10 hidden">
            {['INSTAGRAM', 'LINKEDIN', 'FACEBOOK', 'TWITTER', 'EMAIL'].map(
              type =>
                type !== link && (
                  <Icon
                    key={type}
                    type={type}
                    size={24}
                    onClick={() => {
                      setLink(type);
                      document.getElementById('link-types').classList.toggle('hidden');
                    }}
                  />
                )
            )}
          </div>
          <Icon
            type={link}
            size={24}
            classes="absolute right-0 mr-3"
            onClick={() => document.getElementById('link-types').classList.toggle('hidden')}
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <label className="block text-sm mb-1">Interests</label>
          <button type="button" className="text-xs text-blue-500">
            &#43; add interest
          </button>
        </div>
        <div className="flex flex-wrap">
          <div className="flex items-center bg-gray-200 text-gray-700 rounded-full py-1 px-4 mr-3 mt-3">
            <span className="text-gray-700 uppercase text-sm mr-2 tracking-widest">#ai</span>
            <Icon type="DELETE" size={14} />
          </div>
          <div className="flex items-center bg-gray-200 text-gray-700 rounded-full py-1 px-4 mr-3 mt-3">
            <span className="text-gray-700 uppercase text-sm mr-2 tracking-widest">#fluent</span>
            <Icon type="DELETE" size={14} />
          </div>
          <div className="flex items-center bg-gray-200 text-gray-700 rounded-full py-1 px-4 mr-3 mt-3">
            <span className="text-gray-700 uppercase text-sm mr-2 tracking-widest">#asia</span>
            <Icon type="DELETE" size={14} />
          </div>
          <div className="flex items-center bg-gray-200 text-gray-700 rounded-full py-1 px-4 mr-3 mt-3">
            <span className="text-gray-700 uppercase text-sm mr-2 tracking-widest">#bunnies</span>
            <Icon type="DELETE" size={14} />
          </div>
          <div className="flex items-center bg-gray-200 text-gray-700 rounded-full py-1 px-4 mr-3 mt-3">
            <span className="text-gray-700 uppercase text-sm mr-2 tracking-widest">#kitties</span>
            <Icon type="DELETE" size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  FETCH_USER_PROFILE,
  UPDATE_USER_INFO,
  CREATE_PROFILE_FIELD,
  UPDATE_PROFILE_FIELD,
  DELETE_PROFILE_FIELD,
} from '../queries';
import Icon from '../components/icon';
import BeatLoader from 'react-spinners/BeatLoader';
import { CSSTransition } from 'react-transition-group';

// components
import InputsComponent from '../components/editComponents/inputsComponent';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import LinkStatusModal from '../components/SocialLinks/LinkStatusModal/LinkStatusModal';

export default function ProfileEdit(props) {
  //State
  const [fields, setFields] = useState({});
  const [linkError, setLinkError] = useState(false);
  const [showLinkInput, setLinkInput] = useState(false);
  const [showEditLink, setShowEditLink] = useState(false);
  const [linkToEdit, setLinkToEdit] = useState();

  //Profile links type state
  const [link, setLink] = useState('');

  //GraphQL Queries
  const { loading, error, data } = useQuery(FETCH_USER_PROFILE);

  const [updateUserInfo] = useMutation(UPDATE_USER_INFO);

  const [updateProfileField] = useMutation(UPDATE_PROFILE_FIELD);

  useEffect(() => {
    setFields(data?.user || {});
  }, [data]);

  //create profile link
  const [createProfileField] = useMutation(CREATE_PROFILE_FIELD, {
    update(
      cache,
      {
        data: {
          createProfileField: { profileField },
        },
      }
    ) {
      const { user } = cache.readQuery({ query: FETCH_USER_PROFILE });
      cache.writeQuery({
        query: FETCH_USER_PROFILE,
        data: {
          user: {
            ...user,
            profile: user.profile.concat(profileField),
          },
        },
      });
    },
  });

  //Delete Profile link
  const [deleteProfileField] = useMutation(DELETE_PROFILE_FIELD, {
    update(
      cache,
      {
        data: {
          deleteProfileField: { profileField },
        },
      }
    ) {
      const { user } = cache.readQuery({ query: FETCH_USER_PROFILE });
      cache.writeQuery({
        query: FETCH_USER_PROFILE,
        data: {
          user: {
            ...user,
            profile: user.profile.filter((field) => field.id !== profileField.id),
          },
        },
      });
    },
  });

  const handleFieldChange = ({ target: { name, value } }) =>
    setFields({
      ...fields,
      [name]: value,
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

  const handleCancel = () => props.navigate('/profile');

  const handleNewLink = async (event) => {
    if (!fields.link || link === '') {
      setLinkError(true);
      return;
    } else {
      setLinkError(false);
    }

    console.log('inside handleNewLink | \n ', fields);

    const profileData = {
      value: fields.link,
      type: link,
      privacy: 'PRIVATE',
      preferredContact: false,
    };

    try {
      setLinkInput(false);
      await createProfileField({
        variables: {
          data: profileData,
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
              ...profileData,
            },
          },
        },
      });
    } catch (error) {
      console.error('createProfileField', error);
    }
  };

  const updateLink = async (field, changes) => {
    setShowEditLink(false);
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
              ...changes,
            },
          },
        },
      });
    } catch (error) {
      console.error('updateLink', error);
    }
  };

  const removeLink = async (id) => {
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
              id,
            },
          },
        },
      });
    } catch (error) {
      console.error('removeLink', error);
    }
  };

  const toggleEdit = (field) => {
    setLinkInput(false);
    setShowEditLink(!showEditLink);
    setLinkToEdit(field);
    setFields({
      ...fields,
      link: field.value,
    });
    setLink(field.type);
  };

  if (loading || !data)
    return (
      <div className="flex justify-center h-screen items-center">
        <BeatLoader size={35} loading={loading} color="#7B41FF" />
      </div>
    );

  if (error) return <p>Error! ${error}</p>;

  // cloudinary upload widget
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
      uploadPreset: process.env.REACT_APP_CLOUDINARY_PRESET,
    },
    (error, result) => {
      if (!error && result?.event === 'success') {
        updateUserInfo({
          variables: {
            data: {
              picture: result.info.secure_url,
            },
          },
        });
      }
    }
  );

  // track preferred contact for validation
  const preferredContact = fields?.profile?.find((field) => field.preferredContact);

  return (
    <div className="px-6 mt-24">
      <div>
        <div
          className="flex justify-between mx-auto rounded desktop:w-full mobile:w-96 mobile:inset-x-0"
          style={{
            position: 'fixed',
            bottom: '20px',
            background: '#000',
            height: '64px',
            maxWidth: '751px',
            padding: '16px',
            boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
            zIndex: '1000',
          }}
        >
          <button
            type="button"
            className="text-red-600 focus:outline-none font-bold"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-blue-700 focus:outline-none font-bold"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <div className="flex justify-center items-center mt-2">
          <div
            alt="profile"
            className="rounded-full shadow-lg w-56 h-56 flex justify-center items-center"
            onClick={() => widget.open()}
            style={{
              backgroundImage: `url("${data.user.picture}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Icon type="CAMERA" classes="absolute " size={34} />
          </div>
        </div>
      </div>

      {/* Link Section Starts */}
      <div className="mt-4 text-2xl">
        <div className="flex justify-between items-center">
          <label className="block uppercase text-sm text-gray-700 tracking-widest mb-1 mobile:text-lg">
            Contact Methods
          </label>
          <button
            type="button"
            className="text-sm text-blue-500 focus:outline-none mobile:text-lg"
            onClick={() => {
              setShowEditLink(false);
              setLinkInput(!showLinkInput);
              setFields({
                ...fields,
                link: '',
              });
              setLink('');
            }}
          >
            &#43; add contact
          </button>
        </div>
        {/* User privacy drop down menu */}
        <LinkStatusModal
          fields={fields}
          preferredContact={preferredContact}
          updateLink={updateLink}
          removeLink={removeLink}
          toggleEdit={toggleEdit}
        />
        {/* User privacy drop down menu ends */}
      </div>
      {/* Link Section ENDS */}
      {/* Link Form Input Starts */}
      <CSSTransition in={showEditLink} classNames="inputs" timeout={300} unmountOnExit>
        <SocialLinks
          updateLink={updateLink}
          field={linkToEdit}
          fields={fields}
          handleFieldChange={handleFieldChange}
          link={link}
          setLink={setLink}
          linkError={linkError}
          preferredContact={preferredContact}
        />
      </CSSTransition>
      {/* Social Links Component */}
      <CSSTransition in={showLinkInput} classNames="inputs" timeout={300} unmountOnExit>
        <SocialLinks
          handleNewLink={handleNewLink}
          fields={fields}
          handleFieldChange={handleFieldChange}
          link={link}
          setLink={setLink}
          linkError={linkError}
          preferredContact={preferredContact}
        />
      </CSSTransition>
      {/* Start of profile inputs, span to animate */}

      <InputsComponent
        fields={fields}
        handleFieldChange={handleFieldChange}
        showLinkInput={showLinkInput}
        showEditLink={showEditLink}
      />
    </div>
  );
}

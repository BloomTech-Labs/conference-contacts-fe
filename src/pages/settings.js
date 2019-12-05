import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';
import { GET_USER_PROFILE, UPDATE_USER_INFO, CREATE_PROFILE_FIELD } from '../queries/index';
import { navigate, Redirect } from '@reach/router';
import Profile from '../pages/profile';
import { Image } from 'cloudinary-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const Settings = () => {
  const [fields, setFields] = useState({ bio: '', name: '', });
  const [upload, setUpload] = useState({ file: null });
  const [profileField, setProfileField] = useState({  value: '' })

  // const onDrop = async files => {
  //   setUpload({ file: files[0] })
  // }

  const { loading: queryLoading, error: queryError, data, refetch } = useQuery(GET_USER_PROFILE);

  const [updateUser, { loading: mutationLoading, error: mutationError }] = useMutation(
    UPDATE_USER_INFO
  );

  const [createProfileField, { loading: profileFieldLoading, error: profileFieldError }] = useMutation(
    CREATE_PROFILE_FIELD,
    {
      refetchQueries: [
        { query: GET_USER_PROFILE }
      ] 
    }
    )

  let emails, socialLinks, phoneNumbers;

  useEffect(() => {
    if (!queryLoading) setFields(data.user);

    // emails = data.user.profile.filter(field => field.type === 'EMAIL')
    // socialLinks = data.user.profile.filter(field => field.type === 'SOCIAL')
    // phoneNumbers = data.user.profile.filter(field => field.type === 'PHONE')

  }, [queryLoading, data]);


  if (queryLoading) return <div>Loading...</div>;
  if (queryError) return <p>There was an error: {queryError}</p>;

  const handleFieldUpdate = e =>
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { id, profile, user, __typename, ...changes } = fields;
      await updateUser({ variables: { id, data: changes } });
      navigate('profile');
      // <Link to='/profile'></Link>

      // const formData = new FormData();
      // formData.append('file', data.user.picture);
      // formData.append('upload preset', 'hat6weiu')
      // await axios.post(`https://api.cloudinary.com/v1_1/swaap/image/upload`,
      // formData,)
    } catch (error) {
      console.error(error);
    }
  };

  const handleProfileField = e => {
    e.preventDefault();
    try {
        console.log('submitting email', profileField)
          createProfileField({ variables: { data: {
            id: profileField.id,
            type: 'EMAIL',
            value: profileField.email,
            privacy: 'PUBLIC',
            preferredContact: false,
          }

        }
      });
      console.log(data)
    }
    catch(error) {
      console.log(error)
    }
  }

  const handleProfileFieldUpdate = e => {
    setProfileField({
      ...data.profileField,
      [e.target.name]: e.target.value
    })
  }

  // let widget = window.cloudinary.applyUploadWidget('#upload_widget_opener',{ 
  //   cloudName: 'swaap', uploadPreset: 'hat6weiu' }, 
  //   (error, result) => { });  

  // let widget = window.cloudinary.createUploadWidget({
  //   cloudName: "swaap",
  //   uploadPreset: "hat6weiu"
  // }, (error, result) => {})

  const showWidget = (widget) => {
    widget.open()
  }

  return (
    <div>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
      <form onSubmit={handleSubmit}>
        <div className="pt-32 pb-32 bg-gray-200">
          <div className="flex justify-between pl-10 pr-10 mb-8 text-xl">
            {/* CANCEL BTN */}
            <button
              onClick={() => navigate('profile')}
              className="text-red-500 focus:outline-none hover:text-red-400"
            >
              Cancel
            </button>
            {/* SAVE BTN */}
            <button
              type="submit"
              className="text-blue-600 bg-gray-400 py-2 px-4 focus:outline-none rounded-lg hover:shadow-md"
            >
              Save
            </button>
          </div>
          {/* PICTURE / UPLOAD */}
          <div className="flex items-center justify-center">
            <button className="focus:outline-none">
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
          {/* NAME INPUT */}
          <div className="">
            <div className="mb-6 w-2/3 m-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                onChange={handleFieldUpdate}
                value={fields.name}
              />
            </div>
            {/* INDUSTRY INPUT */}
            <div className="mb-6 w-2/3 m-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="industry">
                Industry
              </label>
              <input
                name="industry"
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="industry"
                type="text"
                placeholder="Industry"
                onChange={handleFieldUpdate}
                value={fields.industry}
              />
            </div>
            {/* JOBTITLE INPUT */}
            <div className="mb-6 w-2/3 m-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobtitle">
                Job Title
              </label>
              <input
                name="jobtitle"
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="jobtitle"
                type="text"
                placeholder="Job Title"
                onChange={handleFieldUpdate}
                value={fields.jobtitle}
              />
            </div>
            {/* GENDER INPUT */}
            <div className="relative mb-6 w-2/3 m-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Gender
              </label>
              <select
                name="gender"
                onChange={handleFieldUpdate}
                value={fields.gender}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              >
                <option defaultValue disabled>
                  Your preference
                </option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="NONBINARY">Non-Binary</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 pt-6 pr-4 flex items-center px-2 text-gray-700">
                {/* CHEVERON SVG */}
                <svg
                  className="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {/* BIO */}
            <div className="mb-6 w-2/3 m-auto h-24">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                Bio
              </label>
              <textarea
                name="bio"
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                id="bio"
                type="textarea"
                placeholder="Tell Me About Yourself..."
                onChange={handleFieldUpdate}
                value={fields.bio}
              ></textarea>
            </div>
            {/* EMAILS */}
            <div className='mt-24 mb-6 w-2/3 m-auto'>
            <p className='block text-gray-700 text-sm font-bold mb-2'>Emails:</p>
              <div className='appearance-none rounded w-full bg-gray-200'>
                <div className='flex inline-block pl-4 pr-4 pt-4 pb-8 justify-between items-end'>
                  <div className='w-full mr-6'>
                    <input 
                      name="email"
                      className="w-full shadow-md appearance-none border rounded text-gray-700 px-2 py-2 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Add Email"
                      onChange={handleProfileFieldUpdate}
                      // value={profileField}
                    />
                    <button
                      type='button'
                      onClick={handleProfileField}
                    >THIS IS THE BUTTON!</button>
                  </div>
                  <div className='self-start pt-3'>
                      <svg className='' width="24" height="24"  fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4167 5.91667C12.704 5.91667 12.9795 6.0308 13.1827 6.23397C13.3859 6.43713 13.5 6.71268 13.5 7C13.5 7.28732 13.3859 7.56287 13.1827 7.76603C12.9795 7.9692 12.704 8.08333 12.4167 8.08333H8.08333V12.4167C8.08333 12.704 7.9692 12.9795 7.76603 13.1827C7.56287 13.3859 7.28732 13.5 7 13.5C6.71268 13.5 6.43713 13.3859 6.23397 13.1827C6.0308 12.9795 5.91667 12.704 5.91667 12.4167V8.08333H1.58333C1.29602 8.08333 1.02047 7.9692 0.817301 7.76603C0.614137 7.56287 0.5 7.28732 0.5 7C0.5 6.71268 0.614137 6.43713 0.817301 6.23397C1.02047 6.0308 1.29602 5.91667 1.58333 5.91667H5.91667V1.58333C5.91667 1.29602 6.0308 1.02047 6.23397 0.817301C6.43713 0.614137 6.71268 0.5 7 0.5C7.28732 0.5 7.56287 0.614137 7.76603 0.817301C7.9692 1.02047 8.08333 1.29602 8.08333 1.58333V5.91667H12.4167Z" fill="#4A5568"/>
                      </svg>
                </div>
                </div>
                {data.user ? data.user.profile.map(profile => {
                  return (
                  <>
                  <div className='flex items-start inline-block justify-between'>
                    <h2 className='ml-6 mb-2'>{profile.value}</h2>
                    {/* <span className=''> */}
                      <svg className='mr-6' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.53686 7.82999C9.70069 8.02129 9.7863 8.26737 9.77658 8.51904C9.76685 8.77072 9.66252 9.00946 9.48443 9.18755C9.30633 9.36565 9.06759 9.46998 8.81592 9.4797C8.56424 9.48942 8.31816 9.40381 8.12686 9.23999L5.29686 6.40999L2.46686 9.23999C2.27556 9.40381 2.02949 9.48942 1.77781 9.4797C1.52613 9.46998 1.28739 9.36565 1.1093 9.18755C0.931206 9.00946 0.826873 8.77072 0.817152 8.51904C0.807431 8.26737 0.893037 8.02129 1.05686 7.82999L3.88686 4.99999L1.05686 2.16999C0.893037 1.97869 0.807431 1.73261 0.817152 1.48094C0.826873 1.22926 0.931206 0.99052 1.1093 0.812425C1.28739 0.634331 1.52613 0.529998 1.77781 0.520277C2.02949 0.510556 2.27556 0.596162 2.46686 0.759989L5.29686 3.58999L8.12686 0.759989C8.31816 0.596162 8.56424 0.510556 8.81592 0.520277C9.06759 0.529998 9.30633 0.634331 9.48443 0.812425C9.66252 0.99052 9.76685 1.22926 9.77658 1.48094C9.7863 1.73261 9.70069 1.97869 9.53686 2.16999L6.70686 4.99999L9.53686 7.82999Z" fill="#4A5568"/>
                      </svg>
                    {/* </span> */}
                  </div>
                  </>
                  )
                }) : <p className='ml-6 mb-2'>no emails found</p>}
              </div>
            </div>
            {/* SOCIAL LINKS */}
            <div className='mb-6 w-2/3 m-auto'>
            <p className='block text-gray-700 text-sm font-bold mb-2'>Social Links:</p>
              <div className='shadow-md appearance-none border rounded w-full bg-white'>
                <div className='flex inline-block pl-4 pr-4 pt-4 pb-20 justify-between items-end'>
                  <div className='w-full mr-6'>
                    <input 
                      name="email"
                      className="w-full shadow-md appearance-none border rounded text-gray-700 px-2 py-2 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="Enter Social Link"
                      onChange={handleFieldUpdate}
                      // value={fields.jobtitle}
                    />
                  </div>
                  <div className='self-start pt-3'>
                    <svg className='' width="24" height="24"  fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4167 5.91667C12.704 5.91667 12.9795 6.0308 13.1827 6.23397C13.3859 6.43713 13.5 6.71268 13.5 7C13.5 7.28732 13.3859 7.56287 13.1827 7.76603C12.9795 7.9692 12.704 8.08333 12.4167 8.08333H8.08333V12.4167C8.08333 12.704 7.9692 12.9795 7.76603 13.1827C7.56287 13.3859 7.28732 13.5 7 13.5C6.71268 13.5 6.43713 13.3859 6.23397 13.1827C6.0308 12.9795 5.91667 12.704 5.91667 12.4167V8.08333H1.58333C1.29602 8.08333 1.02047 7.9692 0.817301 7.76603C0.614137 7.56287 0.5 7.28732 0.5 7C0.5 6.71268 0.614137 6.43713 0.817301 6.23397C1.02047 6.0308 1.29602 5.91667 1.58333 5.91667H5.91667V1.58333C5.91667 1.29602 6.0308 1.02047 6.23397 0.817301C6.43713 0.614137 6.71268 0.5 7 0.5C7.28732 0.5 7.56287 0.614137 7.76603 0.817301C7.9692 1.02047 8.08333 1.29602 8.08333 1.58333V5.91667H12.4167Z" fill="#4A5568"/>
                    </svg>
                </div>
                </div>

                {socialLinks && socialLinks.length > 0 && (
                  <>
                  <div>
                    {socialLinks.map(link => {
                      return (
                        <div>
                          <h2>{link.value}</h2>
                        </div>
                      )
                    })}
                  </div>
                  </>
                )}
              </div>
            </div>
            {/* PHONE NUMBERS */}
            <div className='mb-6 w-2/3 m-auto'>
            <p className='block text-gray-700 text-sm font-bold mb-2'>Phone Numbers:</p>
              <div className='shadow-md appearance-none border rounded w-full bg-white'>
                <div className='flex inline-block pl-4 pr-4 pt-4 pb-20 justify-between items-end'>
                  <div className='w-full mr-6'>
                    <input 
                      name="email"
                      className="w-full shadow-md appearance-none border rounded text-gray-700 px-2 py-2 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="Enter Phone Number"
                      onChange={handleFieldUpdate}
                      // value={fields.jobtitle}
                    />
                  </div>
                  <div className='self-start pt-3'>
                    <svg className='' width="24" height="24"  fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4167 5.91667C12.704 5.91667 12.9795 6.0308 13.1827 6.23397C13.3859 6.43713 13.5 6.71268 13.5 7C13.5 7.28732 13.3859 7.56287 13.1827 7.76603C12.9795 7.9692 12.704 8.08333 12.4167 8.08333H8.08333V12.4167C8.08333 12.704 7.9692 12.9795 7.76603 13.1827C7.56287 13.3859 7.28732 13.5 7 13.5C6.71268 13.5 6.43713 13.3859 6.23397 13.1827C6.0308 12.9795 5.91667 12.704 5.91667 12.4167V8.08333H1.58333C1.29602 8.08333 1.02047 7.9692 0.817301 7.76603C0.614137 7.56287 0.5 7.28732 0.5 7C0.5 6.71268 0.614137 6.43713 0.817301 6.23397C1.02047 6.0308 1.29602 5.91667 1.58333 5.91667H5.91667V1.58333C5.91667 1.29602 6.0308 1.02047 6.23397 0.817301C6.43713 0.614137 6.71268 0.5 7 0.5C7.28732 0.5 7.56287 0.614137 7.76603 0.817301C7.9692 1.02047 8.08333 1.29602 8.08333 1.58333V5.91667H12.4167Z" fill="#4A5568"/>
                    </svg>
                </div>
                </div>

                {phoneNumbers && phoneNumbers.length > 0 && (
                  <>
                  <div>
                    {phoneNumbers.map(number => {
                      return (
                        <div>
                          <h2>{number.value}</h2>
                        </div>
                      )
                    })}
                  </div> 
                  </>
                )}
              </div>
            </div>
            <div className='flex justify-center'>
              <button
                type="submit"
                className="text-blue-600 text-xl bg-gray-400 mt-6 py-2 px-16 focus:outline-none rounded-lg hover:shadow-md"
              >
                Save
              </button>
            </div>
            {/* IMAGE UPLOAD / SECONDARY */}
            {/* <div className="mb-6 w-2/3 m-auto">
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
                value={fields.picture}
                onChange={handleFieldUpdate}
              />
              <Dropzone onDrop={onDrop}>
                <p>Upload Files</p>
              </Dropzone>            
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;

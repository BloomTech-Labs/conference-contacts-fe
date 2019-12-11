import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';
import { GET_USER_PROFILE } from '../queries/index';

const Profile = () => {
  const { loading, error, data } = useQuery(GET_USER_PROFILE);

  if (loading || !data) return <div>Loading...</div>;
  if (error) return <p>There was an error: {error}</p>;

  console.log(data.user);

  return (
    <>
      <div className='bg-gray-100 pt-24 pb-6'>
        <div className='main-container bg-white mx-6 shadow-xl overflow-hidden'>
          <div className=''>
            <div className='relative'>
              <Link to='/'>
                <svg className='absolute top-0 left-0 ml-6 mt-8' width="12" height="18" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 15L1 8L8 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </Link>
            </div>
            {/* IMG ROUNG LARGE */}
            <img
              className="rounded-bl-full rounded-tl-full
            rounded-br-full ml-8 rounded-tr-lg shadow-md profile-picture object-cover"
              src={data.user.picture}
              alt={`profile picuture of ${data.user.name}`}
            />
          </div>
          {/* BLACK TEXT XL-4XL */}
          <div className="mt-10 ml-6 mr-4 mb-8">
            <div className='flex justify-between items-center'>
              <h1 className="text-2xl ">{data.user.name}</h1>
              <Link to="/settings" className="mr-8">
              {/* EDIT ICON */}
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4285 4.28564L19.7142 8.57136L8.57136 19.7142H4.28564V15.4285L15.4285 4.28564Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </Link>
            </div>
              <p className="text-sm mt-2">{data.user.industry}</p>
              <p className="text-xl mt-2">{data.user.jobtitle}</p>
              <p className="gray-text text-lg mt-6">Location</p>
              <p className="text-xl">{data.user.location}</p>
              <p className="gray-text text-lg mt-6">Bio</p>
              <p className="text-xl">{data.user.bio}</p>
              <p className="gray-text text-xl mt-6">Social Media</p>
              <div className='flex mt-2'>
                <svg  className='mr-4'width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.868 0.625H2.13203C1.3 0.625 0.625 1.3 0.625 2.13203V17.868C0.625 18.7 1.3 19.375 2.13203 19.375H17.868C18.7 19.375 19.375 18.7 19.375 17.868V2.13203C19.375 1.3 18.7 0.625 17.868 0.625ZM17.868 17.875C7.37266 17.8727 2.125 17.8703 2.125 17.868C2.12734 7.37266 2.12969 2.125 2.13203 2.125C12.6273 2.12734 17.875 2.12969 17.875 2.13203C17.8727 12.6273 17.8703 17.875 17.868 17.875ZM3.40469 7.65391H6.18672V16.6023H3.40469V7.65391ZM4.79688 6.43047C5.68516 6.43047 6.40937 5.70859 6.40937 4.81797C6.40937 4.60621 6.36767 4.39653 6.28663 4.20089C6.2056 4.00525 6.08682 3.82749 5.93709 3.67776C5.78735 3.52802 5.60959 3.40925 5.41395 3.32821C5.21831 3.24718 5.00863 3.20547 4.79688 3.20547C4.58512 3.20547 4.37544 3.24718 4.1798 3.32821C3.98416 3.40925 3.8064 3.52802 3.65667 3.67776C3.50693 3.82749 3.38815 4.00525 3.30712 4.20089C3.22608 4.39653 3.18437 4.60621 3.18437 4.81797C3.18203 5.70859 3.90391 6.43047 4.79688 6.43047ZM10.7102 12.175C10.7102 11.0078 10.9328 9.87812 12.3789 9.87812C13.8039 9.87812 13.825 11.2117 13.825 12.25V16.6023H16.6047V11.6945C16.6047 9.28516 16.0844 7.43125 13.2695 7.43125C11.9172 7.43125 11.0102 8.17422 10.6375 8.87734H10.6V7.65391H7.93047V16.6023H10.7102V12.175Z" fill="black"/>
                </svg>
                <svg className='mr-4' width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.7501 1.96017C19.033 2.26954 18.2525 2.4922 17.4486 2.57892C18.2832 2.08306 18.9082 1.2997 19.2064 0.375791C18.4232 0.841703 17.5652 1.16841 16.6705 1.34142C16.2965 0.941634 15.8442 0.62315 15.3418 0.405808C14.8394 0.188467 14.2976 0.0769255 13.7501 0.0781347C11.5353 0.0781347 9.75405 1.87345 9.75405 4.07657C9.75405 4.38595 9.79155 4.69532 9.85249 4.99298C6.53608 4.81954 3.57827 3.23517 1.61187 0.809385C1.25357 1.42137 1.0658 2.1182 1.06811 2.82735C1.06811 4.21485 1.77358 5.43829 2.84936 6.15782C2.21539 6.13285 1.59626 5.9586 1.04233 5.64923V5.69845C1.04233 7.64142 2.41577 9.25157 4.24624 9.62189C3.90255 9.71116 3.54899 9.75683 3.1939 9.75782C2.93374 9.75782 2.68765 9.73204 2.43921 9.69689C2.94546 11.2813 4.41968 12.432 6.17515 12.4695C4.80171 13.5453 3.0814 14.1781 1.21343 14.1781C0.878272 14.1781 0.568896 14.1664 0.247803 14.1289C2.01968 15.2656 4.12202 15.9219 6.38608 15.9219C13.7361 15.9219 17.758 9.83282 17.758 4.54767C17.758 4.37423 17.758 4.20079 17.7462 4.02735C18.5244 3.45782 19.2064 2.75235 19.7501 1.96017Z" fill="black"/>
                </svg>
              </div>
            <p className="text-xl mt-4">{data.user.birthdate}</p>
            <p className="gray-text text-xl mt-6">Contact</p>
              <div className='flex mt-2'>
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.75 0.75H1.25C0.835156 0.75 0.5 1.08516 0.5 1.5V16.5C0.5 16.9148 0.835156 17.25 1.25 17.25H20.75C21.1648 17.25 21.5 16.9148 21.5 16.5V1.5C21.5 1.08516 21.1648 0.75 20.75 0.75ZM19.8125 3.34687V15.5625H2.1875V3.34687L1.54063 2.84297L2.46172 1.65938L3.46484 2.43984H18.5375L19.5406 1.65938L20.4617 2.84297L19.8125 3.34687ZM18.5375 2.4375L11 8.29688L3.4625 2.4375L2.45938 1.65703L1.53828 2.84062L2.18516 3.34453L10.1914 9.56953C10.4217 9.74841 10.7049 9.84551 10.9965 9.84551C11.2881 9.84551 11.5713 9.74841 11.8016 9.56953L19.8125 3.34687L20.4594 2.84297L19.5383 1.65938L18.5375 2.4375Z" fill="black"/>
                </svg>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

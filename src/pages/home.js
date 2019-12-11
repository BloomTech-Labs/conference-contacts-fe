import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';
import { GET_USER_PROFILE } from '../queries/index';
import Popup from '../components/modal'; 

const Home = () => {
    const { loading, error, data } = useQuery(GET_USER_PROFILE);

    if (loading || !data) return <div>Loading...</div>;
    if (error) return <p>There was an error: {error}</p>;
  
    console.log(data.user);

    return (
        <div className='pt-24 pb-6 bg-gray-100'>
            <div className='main-container pb-4 bg-white mx-6 shadow-xl overflow-hidden'>
                <img
                className="rounded-bl-full rounded-tl-full
                rounded-br-full ml-8 rounded-tr-lg shadow-md object-cover object-center"
                src={data.user.picture}
                alt={`profile picuture of ${data.user.name}`}
                />
                <div className='flex justify-center'>
                    <h1 className="text-3xl pt-10">{data.user.name}</h1>    
                </div>
            </div>
            <div className='flex justify-around mt-24 m-8'>
                <Popup></Popup>
            <p className='text-2xl'>or</p>
            <svg width="54" height="46" viewBox="0 0 54 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49 7.5H40.5L38.475 1.825C38.3351 1.43668 38.0787 1.10101 37.7409 0.86386C37.4031 0.626709 37.0003 0.499636 36.5875 0.500001H17.4125C16.5687 0.500001 15.8125 1.03125 15.5312 1.825L13.5 7.5H5C2.2375 7.5 0 9.7375 0 12.5V41C0 43.7625 2.2375 46 5 46H49C51.7625 46 54 43.7625 54 41V12.5C54 9.7375 51.7625 7.5 49 7.5ZM49.5 41C49.5 41.275 49.275 41.5 49 41.5H5C4.725 41.5 4.5 41.275 4.5 41V12.5C4.5 12.225 4.725 12 5 12H16.6687L17.7375 9.0125L19.1687 5H34.825L36.2562 9.0125L37.325 12H49C49.275 12 49.5 12.225 49.5 12.5V41ZM27 16C21.475 16 17 20.475 17 26C17 31.525 21.475 36 27 36C32.525 36 37 31.525 37 26C37 20.475 32.525 16 27 16ZM27 32C23.6875 32 21 29.3125 21 26C21 22.6875 23.6875 20 27 20C30.3125 20 33 22.6875 33 26C33 29.3125 30.3125 32 27 32Z" fill="black"/>
            </svg>

            </div>
            <div className='box bg-gray-400 mx-6 mt-24 pb-32'>
                <div className='flex justify-between mx-4 pt-4'>
                    <p>New Messages</p>
                    <p>View All</p>
                </div>
            </div>
            <div className='box bg-gray-400 mx-6 mt-6 pb-32'>
                <div className='flex justify-between mx-4 pt-4'>
                    <p>New Contacts</p>
                    <p>View All</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
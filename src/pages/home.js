import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_PROFILE } from '../queries/index';
import QrCodeGenerator from '../components/qrCodeGenerator'; 
import QrCodeReader from '../components/qrCodeReader';

const Home = () => {
    const { loading, error, data } = useQuery(GET_USER_PROFILE);

    if (loading || !data) return <div>Loading...</div>;
    if (error) return <p>There was an error: {error}</p>;
  
    return (
        <div className='pt-24 pb-6'>
            <div className='main-container pb-4 bg-white mx-6 shadow-xl overflow-hidden'>
                <img
                className=" profile-picture rounded-bl-full rounded-tl-full
                rounded-br-full ml-8 rounded-tr-lg shadow-md object-cover object-center"
                src={data.user.picture}
                alt={`profile picuture of ${data.user.name}`}
                />
                <div className='flex justify-center'>
                    <h1 className="text-3xl pt-10">{data.user.name}</h1>    
                </div>
            </div>
            <div className='flex justify-around mt-24 m-8'>
                <QrCodeGenerator />
                <p className='text-2xl'>or</p>
                <QrCodeReader />
            </div>
            <div className='box bg-gray-300 mx-6 mt-24 pb-32'>
                <div className='flex justify-between mx-4 pt-4'>
                    <p>New Messages</p>
                    <p>View All</p>
                </div>
            </div>
            <div className='box bg-gray-300 mx-6 mt-6 pb-32'>
                <div className='flex justify-between mx-4 pt-4'>
                    <p>New Contacts</p>
                    <p>View All</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
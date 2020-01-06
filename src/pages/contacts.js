import React, { useState } from 'react';
import { GET_USER_CONNECTIONS } from '../queries/index';
import { useQuery } from '@apollo/react-hooks';
import HashLoader from 'react-spinners/HashLoader';

const Contacts = () => {
    let { loading, error, data } = useQuery(GET_USER_CONNECTIONS);
    const [ name, setName ] = useState('');

const handleSearch = (e) => {
    setName(e.target.value);
}

    if (loading || !data)
    return (
      <div className="flex justify-center h-screen items-center">
        <HashLoader size={150} loading={!loading} color="#136FE7" />
      </div>
    );

    if (error) return <p>There was an error: {error}</p>;

    let connections = data.user.connections;

    if ( name?.length > 0)
        connections = connections.filter(c=>c.sender.name.toLowerCase().includes(name.toLowerCase()))


    return (
        <div>
            <div className='flex justify-center items-center mt-24 mb-6'>
                <div className='pl-10 m-auto'>
                    <p className='text-2xl'>Contacts</p>
                </div>
            </div>
            <div className='mx-4 flex items-center border-black'>
                <span className='absolute pl-6 top-20 left-0 z-20'>
                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.81429 0.666016C8.48894 0.666016 10.095 1.33127 11.2792 2.51543C12.4633 3.69959 13.1286 5.30565 13.1286 6.9803C13.1286 8.5443 12.5554 9.98202 11.6131 11.0894L11.8754 11.3517H12.6429L17.5 16.2089L16.0429 17.666L11.1857 12.8089V12.0414L10.9234 11.7792C9.816 12.7214 8.37829 13.2946 6.81429 13.2946C5.13963 13.2946 3.53357 12.6293 2.34941 11.4452C1.16525 10.261 0.5 8.65495 0.5 6.9803C0.5 5.30565 1.16525 3.69959 2.34941 2.51543C3.53357 1.33127 5.13963 0.666016 6.81429 0.666016ZM6.81429 2.60887C4.38571 2.60887 2.44286 4.55173 2.44286 6.9803C2.44286 9.40887 4.38571 11.3517 6.81429 11.3517C9.24286 11.3517 11.1857 9.40887 11.1857 6.9803C11.1857 4.55173 9.24286 2.60887 6.81429 2.60887Z" fill="#686B6F"/>
                    </svg>
                </span>
                <input
                    className='relative border border-gray-500 rounded-lg text-left p-2 pl-10 text-xl w-full'
                    placeHolder='Search'
                    value={name}
                    onChange={handleSearch}
                />
                <div className='absolute pr-6 top-20 right-0'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9688 3H3.75C3.33516 3 3 3.33516 3 3.75V10.9688C3 11.0719 3.08437 11.1562 3.1875 11.1562H10.9688C11.0719 11.1562 11.1562 11.0719 11.1562 10.9688V3.1875C11.1562 3.08437 11.0719 3 10.9688 3ZM9.65625 9.65625H4.5V4.5H9.65625V9.65625ZM6.42188 7.92188H7.73438C7.8375 7.92188 7.92188 7.8375 7.92188 7.73438V6.42188C7.92188 6.31875 7.8375 6.23438 7.73438 6.23438H6.42188C6.31875 6.23438 6.23438 6.31875 6.23438 6.42188V7.73438C6.23438 7.8375 6.31875 7.92188 6.42188 7.92188ZM10.9688 12.8438H3.1875C3.08437 12.8438 3 12.9281 3 13.0312V20.25C3 20.6648 3.33516 21 3.75 21H10.9688C11.0719 21 11.1562 20.9156 11.1562 20.8125V13.0312C11.1562 12.9281 11.0719 12.8438 10.9688 12.8438ZM9.65625 19.5H4.5V14.3438H9.65625V19.5ZM6.42188 17.7656H7.73438C7.8375 17.7656 7.92188 17.6812 7.92188 17.5781V16.2656C7.92188 16.1625 7.8375 16.0781 7.73438 16.0781H6.42188C6.31875 16.0781 6.23438 16.1625 6.23438 16.2656V17.5781C6.23438 17.6812 6.31875 17.7656 6.42188 17.7656ZM20.25 3H13.0312C12.9281 3 12.8438 3.08437 12.8438 3.1875V10.9688C12.8438 11.0719 12.9281 11.1562 13.0312 11.1562H20.8125C20.9156 11.1562 21 11.0719 21 10.9688V3.75C21 3.33516 20.6648 3 20.25 3ZM19.5 9.65625H14.3438V4.5H19.5V9.65625ZM16.2656 7.92188H17.5781C17.6812 7.92188 17.7656 7.8375 17.7656 7.73438V6.42188C17.7656 6.31875 17.6812 6.23438 17.5781 6.23438H16.2656C16.1625 6.23438 16.0781 6.31875 16.0781 6.42188V7.73438C16.0781 7.8375 16.1625 7.92188 16.2656 7.92188ZM20.8125 12.8438H19.6875C19.5844 12.8438 19.5 12.9281 19.5 13.0312V16.1719H17.6719V13.0312C17.6719 12.9281 17.5875 12.8438 17.4844 12.8438H13.0312C12.9281 12.8438 12.8438 12.9281 12.8438 13.0312V20.8125C12.8438 20.9156 12.9281 21 13.0312 21H14.1562C14.2594 21 14.3438 20.9156 14.3438 20.8125V15.0938H16.1719V17.4844C16.1719 17.5875 16.2563 17.6719 16.3594 17.6719H20.8125C20.9156 17.6719 21 17.5875 21 17.4844V13.0312C21 12.9281 20.9156 12.8438 20.8125 12.8438ZM17.4844 19.5H16.3594C16.2563 19.5 16.1719 19.5844 16.1719 19.6875V20.8125C16.1719 20.9156 16.2563 21 16.3594 21H17.4844C17.5875 21 17.6719 20.9156 17.6719 20.8125V19.6875C17.6719 19.5844 17.5875 19.5 17.4844 19.5ZM20.8125 19.5H19.6875C19.5844 19.5 19.5 19.5844 19.5 19.6875V20.8125C19.5 20.9156 19.5844 21 19.6875 21H20.8125C20.9156 21 21 20.9156 21 20.8125V19.6875C21 19.5844 20.9156 19.5 20.8125 19.5Z" fill="black"/>
                    </svg>

                </div>
            </div>
            <div className='mt-10'>
                {connections.map(connection => (
                    <button onClick={() => console.log(`staging.swaap.co/profile`)} className='flex justify-start items-center my-2 ml-4 pb-2 border-b-2 w-11/12'>
                        <div>
                            <img className='rounded-full w-12 mr-6' src={connection.sender.picture} alt={connection.sender.name} />
                        </div>
                        <div>
                            {connection.sender.name}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Contacts;
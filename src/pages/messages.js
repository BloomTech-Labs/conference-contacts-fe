import React, { useState } from 'react';
import { GET_USER_CONNECTIONS } from '../queries/index';
import { useQuery } from '@apollo/react-hooks';
import HashLoader from 'react-spinners/HashLoader';

const Messages = () => {
    let { loading, error, data } = useQuery(GET_USER_CONNECTIONS);
    const [ name, setName ] = useState('');
    
    if (loading || !data)
    return (
      <div className="flex justify-center h-screen items-center">
        <HashLoader size={150} loading={!loading} color="#136FE7" />
      </div>
    );

    const handleSearch = (e) => {
        setName(e.target.value);
    }

    if (error) return <p>There was an error: {error}</p>;

    let connections = data.user.connections;

    if ( name?.length > 0)
        connections = connections.filter(c => c.sender.name.toLowerCase().includes(name.toLowerCase()))

    return (
        <div>
            <div className='flex justify-center items-center mt-24 mb-6'>
                <div className='m-auto'>
                    <p className='text-2xl'>Messages</p>
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
            </div>
            <div className='mt-10'>
                {/* switch connections with relevant query */}
                {connections.map(connection => (
                    <button onClick={() => console.log(`staging.swaap.co/profile`)} className='flex justify-start items-center my-2 ml-4 pb-2 border-b-2 w-11/12'>
                        <div>
                            <img className='rounded-full w-12 mr-6' src={connection.sender.picture} alt={connection.sender.name} />
                        </div>
                        <div className='flex flex-col items-start'>
                            <p className='font-bold pb-1'>{connection.sender.name}
                            {/* <span className='self-end ml-48 text-sm text-gray-500'>3:04pm</span> */}
                            </p>
                            <p className='' className='text-gray-600 font-light'>This is the messages awesome dude!</p>
                        </div>
                    </button>
                    // <button onClick={() => console.log(`staging.swaap.co/profile`)} className='flex justify-start items-center my-2 ml-4 pb-2 border-b-2 w-11/12'>
                    //     <div className=''>
                    //         <div>
                    //             <img className='rounded-full w-12 mr-6' src={connection.sender.picture} alt={connection.sender.name} />
                    //         </div>
                    //         <div className='flex justify-between w-3/4'>
                    //             <p className='font-bold pb-1'>{connection.sender.name}</p>
                    //             <p className='text-sm text-gray-500'>3:04pm</p>
                    //         </div>
                    //         <div className=''>
                    //             <p className='text-gray-600 font-light'>This is the messages awesome dude!</p>
                    //         </div>
                    //     </div>
                    // </button>
                ))}
            </div>
        </div>
    )
}

export default Messages;
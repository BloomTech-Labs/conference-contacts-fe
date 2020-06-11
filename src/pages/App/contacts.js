import React, { useState } from 'react';
import { GET_USER_CONNECTIONS } from '../../queries/index';
import { useQuery } from '@apollo/react-hooks';
import BeatLoader from 'react-spinners/BeatLoader';
import DrpBtn from '../../components/Contact/dropButton';
import ContactButton from '../../components/Contact/ContactButton';
import ConnectionCount from '../../components/PublicProfile/ConnectionCount'
// import { AtoZ, Recent, ContactList } from '../../components/contactList';

// import components
import ErrorPage from '../errorpage';

const Contacts = ({ navigate }) => {
  
  let { loading, error, data } = useQuery(GET_USER_CONNECTIONS);
  
  const [name, setName] = useState('');

  const handleSearch = (e) => {
    setName(e.target.value);
  };

  if (loading || !data) {
    return (
      <div className="flex justify-center h-screen items-center">
        <BeatLoader size={35} loading={loading} color="#7B41FF" />
      </div>
    );
  } else if (error) {
    return <ErrorPage />;
  } else {
    let pendingConnections = data.user.pendingConnections.reduce((acc, cur) => {
     
      const contact = cur.sender.id === data.user.id ? cur.receiver : cur.sender;
      return acc.concat({ ...cur, contact });
    }, []);

    pendingConnections.sort((a, b) => (a.contact.name > b.contact.name ? 1 : -1));

    let connections = data.user.connections.reduce((acc, cur) => {
      const contact = cur.sender.id === data.user.id ? cur.receiver : cur.sender;
      return acc.concat({ ...cur, contact });
    }, []);

    if (name?.length > 0) {
      const pattern = new RegExp(name, 'i');
      pendingConnections = pendingConnections.filter(
        (c) =>
          c.contact.name?.match(pattern) ||
          c.contact.industry?.match(pattern) ||
          c.contact.jobtitle?.match(pattern) ||
          c.contact.location?.match(pattern) ||
          c.contact.tagline?.match(pattern) ||
          c.contact.bio?.match(pattern) ||
          (c.contact.profile.length > 0 && c.contact.profile[0].value.match(pattern)) ||
          (c.contact.profile.length > 1 && c.contact.profile[1].value.match(pattern)) ||
          (c.contact.profile.length > 2 && c.contact.profile[2].value.match(pattern)) ||
          (c.contact.profile.length > 3 && c.contact.profile[3].value.match(pattern)) ||
          (c.contact.profile.length > 4 && c.contact.profile[4].value.match(pattern))
      );
      connections = connections.filter(
        (c) =>
          c.contact.name?.match(pattern) ||
          c.contact.industry?.match(pattern) ||
          c.contact.jobtitle?.match(pattern) ||
          c.contact.location?.match(pattern) ||
          c.contact.tagline?.match(pattern) ||
          c.contact.bio?.match(pattern) ||
          (c.contact.profile.length > 0 && c.contact.profile[0].value.match(pattern)) ||
          (c.contact.profile.length > 1 && c.contact.profile[1].value.match(pattern)) ||
          (c.contact.profile.length > 2 && c.contact.profile[2].value.match(pattern)) ||
          (c.contact.profile.length > 3 && c.contact.profile[3].value.match(pattern)) ||
          (c.contact.profile.length > 4 && c.contact.profile[4].value.match(pattern))
      );
    }

    return (
      <div className="pb-6 mobile:pt-20 desktop:pt-24 min-h-screen max-h-full">
        <div className="flex justify-center items-center pb-6">
          <div className="m-auto">
            <p className="text-2xl">CONTACTS</p>
          </div>
        </div>
        <div className="mx-4 flex items-center border-black">
          <span className="absolute pl-6 top-20" style={{ zIndex: 1 }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.81429 0.666016C8.48894 0.666016 10.095 1.33127 11.2792 2.51543C12.4633 3.69959 13.1286 5.30565 13.1286 6.9803C13.1286 8.5443 12.5554 9.98202 11.6131 11.0894L11.8754 11.3517H12.6429L17.5 16.2089L16.0429 17.666L11.1857 12.8089V12.0414L10.9234 11.7792C9.816 12.7214 8.37829 13.2946 6.81429 13.2946C5.13963 13.2946 3.53357 12.6293 2.34941 11.4452C1.16525 10.261 0.5 8.65495 0.5 6.9803C0.5 5.30565 1.16525 3.69959 2.34941 2.51543C3.53357 1.33127 5.13963 0.666016 6.81429 0.666016ZM6.81429 2.60887C4.38571 2.60887 2.44286 4.55173 2.44286 6.9803C2.44286 9.40887 4.38571 11.3517 6.81429 11.3517C9.24286 11.3517 11.1857 9.40887 11.1857 6.9803C11.1857 4.55173 9.24286 2.60887 6.81429 2.60887Z"
                fill="#686B6F"
              />
            </svg>
          </span>
          <input
            className="relative border border-gray-500 rounded-lg text-left p-2 pl-12 text-xl w-full"
            placeholder="Search"
            value={name}
            onChange={handleSearch}
          />
        </div>

        <div className="mt-6">
          <div className="bg-gray-300 py-2">
            <strong className="ml-4">PENDING</strong>
          </div>
          {pendingConnections.length ? (
            pendingConnections.map((connection) => (
              <ContactButton connection={connection} navigate={navigate} />
            ))
          ) : (
            <p className="ml-4 my-2">None</p>
          )}
        <div className="flex justify-between bg-gray-300">
          <div className="w-1/5 items-center py-2">
            <p>
              <strong className="ml-4">CONNECTED</strong>
            </p>
          </div>
          <div className="w-1/2 mt-2">
             <ConnectionCount data={data}/>
          </div>
          </div>
         
            <DrpBtn connections={connections} navigate={navigate} />
           
          
        </div>
        
      </div>
    );
  }
};
export default Contacts;
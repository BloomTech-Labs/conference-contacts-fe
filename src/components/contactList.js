import React from 'react';

export const Alphabetical = ({ connections, navigate }) => {
  console.log(connections, 'a to z');
  return connections.length > 0 ? (
    [...connections]
      .sort((a, b) => a.contact.name.localeCompare(b.contact.name))
      .map((connection) => (
        <button
          key={connection.id}
          onClick={() =>
            navigate('/profile', {
              state: {
                userId: connection.contact.id,
                connectionId: connection.id,
                location: connection.location,
                status: 'CONNECTED',
                senderLat: connection.senderLat,
                senderLon: connection.senderLon,
                receiverLat: connection.receiverLat,
                receiverLon: connection.receiverLon,
              },
            })
          }
          className="flex justify-start items-center my-2 ml-4 pb-2 border-b-2 w-11/12"
        >
          <div>
            <img
              className="rounded-full w-12 h-12 object-cover mr-6"
              src={connection.contact.picture}
              alt={connection.contact.name}
            />
          </div>
          <div className="flex flex-col items-start">
            <span>{connection.contact.name}</span>
            <small>{connection.contact.industry}</small>
          </div>
        </button>
      ))
  ) : (
    <p className="ml-4 my-2">None</p>
  );
};

export const Recent = ({ connections, navigate }) => {
  console.log(connections, 'recent');
  return connections.length > 0 ? (
    [...connections].reverse().map((connection) => (
      <button
        key={connection.id}
        onClick={() =>
          navigate('/profile', {
            state: {
              userId: connection.contact.id,
              connectionId: connection.id,
              location: connection.location,
              status: 'CONNECTED',
              senderLat: connection.senderLat,
              senderLon: connection.senderLon,
              receiverLat: connection.receiverLat,
              receiverLon: connection.receiverLon,
            },
          })
        }
        className="flex justify-start items-center my-2 ml-4 pb-2 border-b-2 w-11/12"
      >
        <div>
          <img
            className="rounded-full w-12 h-12 object-cover mr-6"
            src={connection.contact.picture}
            alt={connection.contact.name}
          />
        </div>
        <div className="flex flex-col items-start">
          <span>{connection.contact.name}</span>
          <small>{connection.contact.industry}</small>
        </div>
      </button>
    ))
  ) : (
    <p className="ml-4 my-2">None</p>
  );
};

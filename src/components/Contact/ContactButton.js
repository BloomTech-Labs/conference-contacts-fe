import React from 'react';

export default function ContactButton({ connection, navigate }) {
  return (
    <div
      key={connection.id}
      // onClick={() =>
      //   navigate('/profile', {
      //     state: {
      //       userId: connection.contact.id,
      //       connectionId: connection.id,
      //       location: connection.location,
      //       status: 'PENDING',
      //     },
      //   })
      // }
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
        <span>
          {connection.contact.name}
          {connection.receiver.id === connection.contact.id ? (
            <small> (Sent)</small>
          ) : (
            <small> (Received)</small>
          )}
        </span>
        <small>{connection.contact.industry}</small>
      </div>
    </div>
  );
}

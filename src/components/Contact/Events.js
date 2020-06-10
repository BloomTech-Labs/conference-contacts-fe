import React, { useState } from 'react';
import { UPDATE_CONNECTION_EVENT } from '../../queries/index';
import { useMutation } from '@apollo/react-hooks';
import DisplayValue from '../../components/Profile/DisplayValue';
export const Events = ({ connectionId, contacts }) => {
  //converting the connectionId to something I can use for the updateConnectionEvent()
  //this also allows us to use the connection id to find the correct connection in contacts. 
  const id = connectionId
  const userId = contacts.user.id
  //This is the connection we will be working with 
  const connection = contacts.user.connections.find(connection => connection.id === id)
  //declaring input for the updateConnectionEvent form
  let input
  //just setting our function for making the update.
  const [updateConnectionEvent] = useMutation(UPDATE_CONNECTION_EVENT);
  //This is the state of the connection event. When editing, the event UI will convert to a form we can update.
  const [editing, setEditing] = useState(false);
  //declare the event we want to render.
  const event = (userId === connection.sender.id) ? connection.senderEvent : connection.receiverEvent
  //decide if event is sender or receiver event
   
  //set up an event handler for clicking on the edit icon on the connection event UI
  const handleEditEventClick = (e) => {
    e.preventDefault();
    editing ? (setEditing(false)) : (setEditing(true));
  }
  return (
    <section className='mt-8'>
      {editing ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            { (userId === connection.sender.id) ? (
                updateConnectionEvent({ variables: { id, senderEvent: input.value } })
              ):(
                updateConnectionEvent({ variables: { id, receiverEvent: input.value } })
              )
            } 
            setEditing(false)
          }}
        >
          <input className="bg-gray-100 shadow-lg p-8 pt-6 rounded mt-4 mx-4 ht-24"
            type="textarea"
            ref={node => {
              input = node
            }}
          />
          <button type="submit"className="w-3/6 py-5 rounded bg-purple-700 text-white mx-4 mt-2">Save</button>
          <button onClick={() => setEditing(false)} className="mx-6 mt-2 text-purple-700 font-semi-bold text-lg shadow-sm">X</button>
        </form>
      ) : (
          <div className="flex">
          
            <div className="w-3/4">
              <DisplayValue title="Event of Meeting" value={event} />
            </div>
            {/* EDIT ICON */}
            <div className="w-1/4">
              <svg onClick={handleEditEventClick}
                className="ml-3"
                width="60"
                height="40"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M15.4285 4.28564L19.7142 8.57136L8.57136 19.7142H4.28564V15.4285L15.4285 4.28564Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )
      }
    </section>
  )
}

// if viewingContact = true 
  //Access data.user.connections and loop through it, displaying sender/receiver note.
  // Display senderNote if connection.sender.id return senderNote
  //else if connection.receiver.id  return receiverNote
//data.user.connections.senderNote
// contacts.user.connections[6].receiverNote
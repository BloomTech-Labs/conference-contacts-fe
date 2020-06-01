import React, {useState, useEffect} from 'react';
import {UPDATE_CONNECTION_NOTE, FETCH_USER_PROFILE} from '../../queries/index';
import {useMutation} from '@apollo/react-hooks';
import DisplayValue from '../../components/Profile/DisplayValue';

export const Notes = ({ contacts }) => {
    console.log(contacts);
    const [editing, setEditing] = useState(false);
    let input
    const id = contacts.user.connections[6].id
     
    const [updateConnectionNote] = useMutation(UPDATE_CONNECTION_NOTE);
        
    
     const handleEditNoteClick = (e) => {
         e.preventDefault();
         editing ? (setEditing(false)
         ): (setEditing(true));
         
     }
     
     return(     
   
         <section className="mt-10 desktop:w-96 desktop:shadow-lg desktop:p-5 desktop:border-t-4 desktop:border-indigo-500 desktop:rounded-b-lg">
                
                {/* EDIT ICON */}
                <svg onClick={handleEditNoteClick}
                         className="ml-3 mt-6"
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
                 {editing ? (
                 
                      <form
                         onSubmit = {e => {
                           e.preventDefault();
                           updateConnectionNote({ variables: {id, receiverNote: input.value}}) 
                           setEditing(false)
                         }}
                       >
                         <input
                           ref={node => {
                             input = node
                           }}
                         />
                         <button type="submit">Submit</button>
                       </form>
                     
                 ) : (
                 <DisplayValue title="Notes to remember me by..." value={contacts.user.connections[6].receiverNote}/>
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

import React from 'react';
import Popup from "reactjs-popup";
import Icon from '../../icon';
import SVGIcon from '../SocialIcons/SVGIcon';


const LinkStatusModal = ({ fields, preferredContact, updateLink, removeLink }) => {
  return (
    <ul className="mt-3">
      {fields?.profile?.map((field, idx) => (
        <li key={field.id} className="flex mb-3">
          <SVGIcon type={field.type} classes={'stationary-social-icons'} />
          <span
            className={
              field.preferredContact
                ? 'ml-4 mr-auto text-blue-500 truncate'
                : 'ml-4 mr-auto truncate'
            }
            title={field.value}
          >
            {field.value}
          </span>
          <Icon
            type="MORE"
            size={24}
            classes="mr-3 relative flex-shrink-0"
            onClick={() => {
              for (let i = 0; i < fields.profile.length; i++) {
                const element = document.getElementById(`link-privacy-${i}`);
                if (i !== idx && !element.classList.contains('hidden')) {
                  element.classList.add('hidden');
                }
              }
              document.getElementById(`link-privacy-${idx}`).classList.toggle('hidden');
            }}
          />
          <div
            id={`link-privacy-${idx}`}
            className="absolute right-0 mr-16 mt-6 p-3 bg-white border border-gray-300 z-10 hidden"
          >
            <div
              className="flex items-center mb-3"
              onClick={() => updateLink(field, { privacy: 'PRIVATE' })}
            >
              <Icon
                classes="mr-5"
                type="LOCK"
                size={17}
                fill={field.privacy === 'PRIVATE' && '#007AFF'}
              />
              <span style={{ color: field.privacy === 'PRIVATE' ? '#007AFF' : 'unset' }}>
                Private
              </span>
            </div>
            <div
              className="flex items-center mb-3"
              onClick={() => updateLink(field, { privacy: 'PUBLIC' })}
            >
              <Icon
                classes="mr-5"
                type="GLOBE"
                size={17}
                fill={field.privacy === 'PUBLIC' && '#007AFF'}
              />
              <span style={{ color: field.privacy === 'PUBLIC' ? '#007AFF' : 'unset' }}>
                Public
              </span>
            </div>
            <div
              className="flex items-center"
              onClick={() => updateLink(field, { privacy: 'CONNECTED' })}
            >
              <Icon
                classes="mr-5"
                type="SWAAP"
                size={17}
                fill={field.privacy === 'CONNECTED' && '#007AFF'}
              />
              <span style={{ color: field.privacy === 'CONNECTED' ? '#007AFF' : 'unset' }}>
                Connected
              </span>
            </div>
            
          </div>
          {(!preferredContact || preferredContact.id === field.id) && (
              <>
                <hr className="my-3" />
                <div
                  className="flex items-center mt-3"
                  onClick={() => updateLink(field, { preferredContact: !field.preferredContact })}
                >
                  {!field.preferredContact ? (
                    <SVGIcon
                    classes="mr-3"
                    type="STAR"
                    // size={24}
                    // fill={field.preferredContact && '#007AFF'}
                    />

                  ): (
                    <SVGIcon
                    classes="mr-3"
                    type="SELECTEDSTAR"
                      // size={24}
                      // fill={field.preferredContact && '#007AFF'}
                    />
                  ) }

                  {/* {field.preferredContact && (
                    <SVGIcon
                    classes="mr-3"
                    type="SELECTEDSTAR"
                      // size={24}
                      // fill={field.preferredContact && '#007AFF'}
                    />
                  )} */}
                  
                  <span style={{ color: field.preferredContact ? '#007AFF' : 'unset' }}>
                    Main contact
                  </span>
                </div>
              </>
            )}
          {/* Delete Btn/Minus-Circle */}
          <Popup
            //produces the delete icon to trigger modal as per documentation
            trigger={    
              //Minus-Circle/Delete Icon
              <SVGIcon
                classes="flex-shrink-0 delete-social-link"
                type="MINUS-CIRCLE"
              />
            }
            modal
          >
            {/* Modal Content */}
            {(close) => (
              <div className="modal text-center font-bold my-4 px-5 w-full object-contain">
                <h4>Are You Sure You Want to Delete Link?</h4>
                {/* Delete Button */}
                <button 
                  className="flex-1 bg-purple-700 hover:bg-purple-900 text-white font-bold my-5 mr-2  py-2 px-4 rounded"
                  onClick={() => removeLink(field.id)}>
                    Delete
                </button>


                {/* Cancel/Close Modal Button */}
                <button 
                  className="flex-1 bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => close()}>
                    Cancel
                </button>
              </div>  
            )}
           </Popup>
        </li>
      ))}
    </ul>
  );
};

export default LinkStatusModal;

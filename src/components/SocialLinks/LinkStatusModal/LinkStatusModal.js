import React from 'react';
import Popup from 'reactjs-popup';
import Icon from '../../icon';
import SVGIcon from '../SocialIcons/SVGIcon';

const LinkStatusModal = ({ fields, preferredContact, updateLink, removeLink, toggleEdit }) => {
  const updatePrivacy = (field) => {
    if (field.privacy === 'PRIVATE') {
      updateLink(field, { privacy: 'PUBLIC' });
    } else if (field.privacy === 'PUBLIC') {
      updateLink(field, { privacy: 'PRIVATE' });
    }
  };

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
            onClick={() => toggleEdit(field)}
          >
            {field.value}
          </span>
          {/* SELECT PREFERRED CONTACT */}
          {(!preferredContact || preferredContact.id === field.id) && (
            <>
              <div onClick={() => updateLink(field, { preferredContact: !field.preferredContact })}>
                {!field.preferredContact ? (
                  //shows outlined star
                  <SVGIcon classes="mr-3 social-link-main-contact" type="STAR" />
                ) : (
                  //shows filled in star
                  <SVGIcon classes="mr-3 social-link-main-contact-selected" type="SELECTEDSTAR" />
                )}
              </div>
            </>
          )}
          {/* Make Contact PRIVATE/PUBLIC toggle icons */}
          <div className="flex items-center mb-3">
            {field.privacy === 'PUBLIC' ? (
              //field.privacy is public and will show unlock icon.
              //ONCLICK changes from 'PUBLIC' Value to 'PRIVATE' value.
              <SVGIcon
                classes="mr-5 social-link-privacy-public "
                type="UNLOCK"
                onClick={() => updatePrivacy(field)}
              />
            ) : (
              // field.privacy is PRIVATE on default, LOCK Icon will show by default.
              //ONCLICK changes from 'PRIVATE' value to 'PUBLIC' value.
              <SVGIcon
                classes="mr-5 social-link-privacy-private"
                type="LOCK"
                onClick={() => updatePrivacy(field)}
              />
            )}
          </div>

          {/* Delete Btn/Minus-Circle */}
          <Popup
            //produces the delete icon to trigger modal as per documentation
            trigger={
              //Minus-Circle/Delete Icon
              <SVGIcon classes="flex-shrink-0 delete-social-link" type="MINUS-CIRCLE" />
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
                  onClick={() => removeLink(field.id)}
                >
                  Delete
                </button>

                {/* Cancel/Close Modal Button */}
                <button
                  className="flex-1 bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => close()}
                >
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

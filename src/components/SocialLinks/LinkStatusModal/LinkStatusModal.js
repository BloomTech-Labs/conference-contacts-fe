import React from 'react';
import Popup from 'reactjs-popup';
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
        <li
          key={field.id}
          className="flex justify-between mb-3 text-base mobile:text-sm bg-gray-300 rounded py-2 px-4"
        >
          {/* SELECT PREFERRED CONTACT */}
          {(!preferredContact || preferredContact.id === field.id) && (
            <>
              <div
                className="flex flex-wrap mr-4"
                onClick={() => updateLink(field, { preferredContact: !field.preferredContact })}
              >
                {!field.preferredContact ? (
                  //shows outlined star
                  <SVGIcon
                    divClass={'flex items-center content-center w-full social-link-main-contact'}
                    classes=""
                    size="1.5rem"
                    type="STAR"
                  />
                ) : (
                  //shows filled in star
                  <SVGIcon
                    divClass={'flex items-center content-center w-full '}
                    classes="social-link-main-contact-selected"
                    size="1.5rem"
                    type="SELECTEDSTAR"
                  />
                )}
              </div>
            </>
          )}
          {/* Social Media/Contact Icons */}
          <SVGIcon
            type={field.type}
            size={'1.75rem'}
            divClass={'flex items-center content-center'}
            classes={field.preferredContact ? 'h-full text-blue-500 truncate' : 'h-full truncate'}
          />

          {/* Social Media/Contact Icons Field Values */}
          <span
            className={
              field.preferredContact
                ? 'flex items-center ml-3 text-blue-500 truncate w-full cursor-pointer'
                : 'flex items-center ml-3 truncate w-full cursor-pointer'
            }
            onClick={() => toggleEdit(field)}
            title={field.value}
          >
            {field.value}
          </span>

          {/* Make Contact PRIVATE/PUBLIC toggle icons */}
          <div className="flex flex-wrap w-16">
            {field.privacy === 'PUBLIC' ? (
              // field.privacy is PUBLIC on default, UNLOCK Icon will show by default.
              //ONCLICK changes from 'PUBLIC' value to 'PRIVATE' value and 'UNLOCK' icon to 'LOCK'.

              <SVGIcon
                divClass={'flex items-center content-center w-full'}
                classes="m-auto social-link-privacy-public"
                size="1.5rem"
                type="UNLOCK"
                onClick={() => updatePrivacy(field)}
              />
            ) : (
              //ONCLICK below changes from 'PRIVATE' value to 'PUBLIC' value and 'LOCK' icon to 'UNLOCK'.

              <SVGIcon
                divClass={'flex items-center content-center w-full'}
                classes="m-auto social-link-privacy-private"
                size="1.5rem"
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
              <div className="flex flex-wrap">
                <SVGIcon
                  divClass={'flex items-center content-center w-full'}
                  classes="m-auto delete-social-link"
                  size="1.5rem"
                  type="MINUS-CIRCLE"
                />
              </div>
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

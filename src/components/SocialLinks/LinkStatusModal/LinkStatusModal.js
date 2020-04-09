import React from 'react';
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
            {(!preferredContact || preferredContact.id === field.id) && (
              <>
                <hr className="my-3" />
                <div
                  className="flex items-center mt-3"
                  onClick={() => updateLink(field, { preferredContact: !field.preferredContact })}
                >
                  <Icon
                    classes="mr-3"
                    type="CHECK"
                    size={24}
                    fill={field.preferredContact && '#007AFF'}
                  />
                  <span style={{ color: field.preferredContact ? '#007AFF' : 'unset' }}>
                    Main contact
                  </span>
                </div>
              </>
            )}
          </div>
          <Icon
            classes="flex-shrink-0"
            type="MINUS-CIRCLE"
            size={24}
            onClick={() => removeLink(field.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default LinkStatusModal;

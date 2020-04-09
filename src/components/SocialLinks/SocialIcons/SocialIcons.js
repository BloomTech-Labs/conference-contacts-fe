import React, { useState } from 'react';
import Icon from '../../icon';

const SocialLinks = ({ setLink, link }) => {
  // useState toggle to show/hide icons
  const [visibleIcons, setVisibleIcons] = useState(false);
  return (
    <div className="flex justify-center border border-gray-900 rounded p-2 text-center">
      {/* PLUS Icon within link input */}
      {!visibleIcons && !link && (
        <span classes="" onClick={() => setVisibleIcons(true)}>
          +
        </span>
      )}

      {visibleIcons && !link && (
        <span classes="" onClick={() => setVisibleIcons(false)}>
          -
        </span>
      )}

      {visibleIcons && (
        <div
          id="link-types"
          className="flex justify-between absolute w-1/4"
          style={{ marginTop: '-40px', marginLeft: '-70%' }}
        >
          {['INSTAGRAM', 'LINKEDIN', 'FACEBOOK', 'TWITTER', 'EMAIL'].map(
            (type) =>
              type !== link && (
                <Icon
                  id={type}
                  key={type}
                  type={type}
                  size={24}
                  classes={'social-icons'}
                  onClick={() => {
                    setLink(type);
                    setVisibleIcons(false);
                  }}
                />
              )
          )}
        </div>
      )}
      {link && (
        <div className="flex bg-red-500">
          <Icon
            id={link}
            key={link}
            type={link}
            size={24}
            classes={'social-icons'}
            onClick={() => {
              setVisibleIcons(!visibleIcons);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SocialLinks;

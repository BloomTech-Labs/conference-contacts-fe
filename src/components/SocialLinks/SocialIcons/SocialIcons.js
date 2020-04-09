import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

//Components
import SVGIcon from './SVGIcon';

const SocialLinks = ({ setLink, link }) => {
  // useState toggle to show/hide icons
  const [visibleIcons, setVisibleIcons] = useState(false);
  return (
    <div className="flex justify-center border border-gray-900 rounded p-2 text-center">
      {/* PLUS Icon within link input */}
      {!visibleIcons && !link && (
        <span classes="flex justify-center plus-minus-icons" onClick={() => setVisibleIcons(true)}>
          <FaPlus />
        </span>
      )}

      {visibleIcons && !link && (
        <span classes="flex plus-minus-icons" onClick={() => setVisibleIcons(false)}>
          <FaMinus />
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
                <SVGIcon
                  id={type}
                  key={type}
                  type={type}
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
          <SVGIcon
            id={link}
            key={link}
            type={link}
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

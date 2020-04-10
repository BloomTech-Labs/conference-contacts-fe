import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

//Components
import SVGIcon from './SVGIcon';

const SocialLinks = ({ setLink, link }) => {
  // useState toggle to show/hide icons
  const [visibleIcons, setVisibleIcons] = useState(false);
  return (
    <>
      {visibleIcons && (
        <div id="link-types" className="flex justify-between absolute w-2/4 -mt-8">
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
      <div className="flex justify-center align-center border border-gray-900 rounded border-l-0 rounded-l-none p-2 text-center">
        {/* PLUS Icon within link input */}
        {!visibleIcons && !link && (
          <span classes="flex plus-minus-icons" onClick={() => setVisibleIcons(true)}>
            <FaPlus />
          </span>
        )}

        {visibleIcons && !link && (
          <span classes="flex plus-minus-icons" onClick={() => setVisibleIcons(false)}>
            <FaMinus />
          </span>
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
    </>
  );
};

export default SocialLinks;

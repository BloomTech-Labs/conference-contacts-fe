import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

//Components
import SVGIcon from './SVGIcon';

const SocialLinks = ({ setLink, link }) => {
  // useState toggle to show/hide icons
  const [visibleIcons, setVisibleIcons] = useState(false);
  return (
    <>
      <CSSTransition in={visibleIcons} classNames="icons" timeout={200} unmountOnExit>
        <div
          id="link-types"
          className="flex justify-between absolute w-2/4 -mt-10 bg-white p-2 rounded-t-md"
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
      </CSSTransition>

      <div className="flex justify-center align-center border border-gray-400 rounded border-l-0 rounded-l-none p-4 text-center">
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
          <div className="flex">
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

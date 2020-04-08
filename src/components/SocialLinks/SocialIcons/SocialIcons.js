import React, { useState } from 'react';
import Icon from '../../icon';

const SocialLinks = ({ setLink, link }) => {
  // useState toggle to show/hide icons
  const [visibleIcons, setVisibleIcons] = useState(false);
  return (
    <div className="flex self-start">
      {/* PLUS Icon within link input */}
      {!visibleIcons ? (
        <span classes="" onClick={() => setVisibleIcons(true)}>
          +
        </span>
      ) : (
        <div id="link-types" className="flex ">
          <span classes="" onClick={() => setVisibleIcons(false)}>
            -
          </span>
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
          <label>Current Icon: </label>
          <Icon id={link} key={link} type={link} size={24} classes={'social-icons'} />
        </div>
      )}
    </div>
  );
};

export default SocialLinks;

import React from 'react';
import Icon from '../../icon';

const SocialLinks = (props) => {
    const { setLink, link} = props;
    return(
        <div className="relative flex items-center">
          {/* Social Media Icons */}
          <div id="link-types" className="absolute flex items-center right-1 mr-10 hidden">
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
                      document.getElementById('link-types').classList.toggle('hidden');
                    }}
                  />
                )
            )}
          </div>
          {/* End Social Media Icons */}
          {/* PLUS Icon within link input */}
          <Icon
            type={link}
            size={24}
            classes="absolute right-1 mr-3"
            onClick={() => document.getElementById('link-types').classList.toggle('hidden')}
          />
        </div>
    );
}

export default SocialLinks;
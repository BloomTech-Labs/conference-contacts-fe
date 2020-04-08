import React from 'react';
import LinkInput from './LinkInput/LinkInput';
import SocialIcons from './SocialIcons/SocialIcons';
import SocialLinksError from './SocialLinksError/SocialLinksError';

const SocialLinks = (props) => {
  const { handleFieldChange, handleNewLink, fields, link, setLink, linkError } = props;
  return (
    <div className="relative flex flex-col items-center">
      <SocialLinksError linkError={linkError} />
      <SocialIcons setLink={setLink} link={link} />
      <LinkInput
        handleNewLink={handleNewLink}
        fields={fields}
        handleFieldChange={handleFieldChange}
        link={link}
      />
    </div>
  );
};

export default SocialLinks;

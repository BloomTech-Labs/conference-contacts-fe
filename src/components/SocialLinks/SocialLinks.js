import React from 'react';
import LinkInput from './LinkInput/LinkInput';
import SocialLinksError from './SocialLinksError/SocialLinksError';

const SocialLinks = (props) => {
  const { handleFieldChange, handleNewLink, fields, link, setLink, linkError } = props;
  return (
    <div className="relative flex flex-col items-center ">
      <SocialLinksError linkError={linkError} fields={fields} />

      <LinkInput
        handleNewLink={handleNewLink}
        fields={fields}
        handleFieldChange={handleFieldChange}
        link={link}
        setLink={setLink}
      />
    </div>
  );
};

export default SocialLinks;

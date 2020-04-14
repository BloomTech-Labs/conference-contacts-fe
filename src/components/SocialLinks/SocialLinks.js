import React from 'react';
import LinkInput from './LinkInput/LinkInput';
import SocialLinksError from './SocialLinksError/SocialLinksError';

const SocialLinks = (props) => {
  const {
    handleFieldChange,
    handleNewLink,
    updateLink,
    fields,
    link,
    setLink,
    linkError,
    field,
  } = props;
  return (
    <div className="relative flex flex-col items-center ">
      <SocialLinksError linkError={linkError} />

      <LinkInput
        updateLink={updateLink}
        handleNewLink={handleNewLink}
        fields={fields}
        handleFieldChange={handleFieldChange}
        link={link}
        setLink={setLink}
        field={field}
      />
    </div>
  );
};

export default SocialLinks;

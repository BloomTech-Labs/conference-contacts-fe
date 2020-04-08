import React from 'react';
import LinkInput from './LinkInput/LinkInput';
import SocialIcons  from './SocialIcons/SocialIcons';
import SocialLinksError from './SocialLinksError/SocialLinksError';

const SocialLinks = (props) => {
    const {handleFieldChange, handleNewLink, fields, link, setLink, linkError } = props;
    return(
        <div className="relative flex items-center">
            <SocialLinksError linkError={linkError}/>
            <LinkInput handleNewLink={handleNewLink} fields={fields} handleFieldChange={handleFieldChange} link={link} />
            <SocialIcons setLink={setLink} link={link}/>
        </div>
    );
}

export default SocialLinks;
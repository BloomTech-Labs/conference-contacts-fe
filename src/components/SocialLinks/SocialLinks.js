import React from 'react';
import LinkInput from './LinkInput/LinkInput';
import SocialIcons  from './SocialIcons/SocialIcons';

const SocialLinks = (props) => {
    const {handleFieldChange, handleNewLink, fields, link, setLink } = props;
    return(
        <div className="relative flex items-center">
            <LinkInput handleNewLink={handleNewLink} fields={fields} handleFieldChange={handleFieldChange} link={link} />
            <SocialIcons setLink={setLink} link={link}/>
        </div>
    );
}

export default SocialLinks;
import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import SVGIcon from '../SocialIcons/SVGIcon';

const LinkInput = (props) => {
  const { handleFieldChange, handleNewLink, fields, link, setLink } = props;
  
  return (
    <div className="flex w-full mt-8">
      {/* Link Input */}
      <input
        type="text"
        name="link"
        placeholder="Username or URL"
        className="w-full border border-r-0 rounded-r-none border-gray-400 rounded p-2 pr-10 z-10"
        onChange={handleFieldChange}
        value={fields.link || ''}
        //onKeyPress={handleNewLink}
      />

      <SocialIcons setLink={setLink} link={link} />

      {/* Check Icon Btn */}
      <button
        className={`bg-gray-300 hover:text-white text-gray-800 font-bold py-2 px-5 ml-5 rounded inline-flex items-center ${
          link === 'PLUS' ? 'hover:bg-gray-500 cursor-not-allowed' : 'hover:bg-green-500'
        }`}
        onClick={handleNewLink}
      >
        {/* Check Icon on Add Button */}
        <SVGIcon 
          type={'CHECK'}
          classes={"fill-current w-4 h-4 mr-2"}
        />
        <span> Add</span>
      </button>
    </div>
  );
};

export default LinkInput;

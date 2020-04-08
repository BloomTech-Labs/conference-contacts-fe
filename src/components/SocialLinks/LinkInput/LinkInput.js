import React from 'react';

const LinkInput = (props) => {
  const { handleFieldChange, handleNewLink, fields, link } = props;

  return (
    <div className="flex w-full">
      {/* Link Input */}
      <input
        type="text"
        name="link"
        placeholder="Username or URL"
        className="w-full border border-gray-900 rounded p-2 pr-10"
        onChange={handleFieldChange}
        value={fields.link || ''}
        //onKeyPress={handleNewLink}
      />
      {/* Check Icon Btn */}
      <button
        className={`bg-gray-300 hover:text-white text-gray-800 font-bold py-2 px-5 ml-5 rounded inline-flex items-center ${
          link === 'PLUS' ? 'hover:bg-gray-500 cursor-not-allowed' : 'hover:bg-green-500'
        }`}
        onClick={handleNewLink}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 34 35"
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30.2805 6.50024H27.9596C27.6342 6.50024 27.3254 6.64966 27.1262 6.90532L13.4366 24.2473L6.8723 15.9299C6.773 15.8039 6.64643 15.7019 6.50209 15.6318C6.35775 15.5616 6.19939 15.525 6.0389 15.5249H3.71801C3.49554 15.5249 3.37269 15.7805 3.50883 15.9532L12.6032 27.4747C13.0282 28.0125 13.845 28.0125 14.2733 27.4747L30.4897 6.92524C30.6258 6.75591 30.503 6.50024 30.2805 6.50024Z" />
        </svg>
        <span> Add</span>
      </button>
    </div>
  );
};

export default LinkInput;

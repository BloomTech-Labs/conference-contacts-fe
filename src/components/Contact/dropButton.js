import React, { useState } from 'react';
import { Alphabetical, Recent } from './contactList';

const DrpBtn = ({ connections, navigate }) => {
  const [sortBy, setSortBy] = useState('recent');

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <div className="inline-block relative w-24 h-8 float-right -mt-11">
        <select
          value={sortBy}
          className="block appearance-none w-full h-8 border border-gray-400 hover:border-gray-500 px-1 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleSort}
        >
          <option value="alphabetical"> A-Z</option>
          <option value="recent">Recent</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {sortBy === 'recent' ? (
        <Recent connections={connections} navigate={navigate} />
      ) : (
        <Alphabetical connections={connections} navigate={navigate} />
      )}
    </div>
  );
};

export default DrpBtn;

import React from 'react';

import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';

export default function TeamMemberInfo({ img, name, title, linkedin, github }) {
  return (
    <div className="m-6 bg-gray-200 rounded shadow-lg p-2 w-3/12">
      <div className="flex">
        <img className="rounded-lg rounded-bl-none h-24" src={img} alt={name} border="0"></img>
        <div className="ml-4 flex flex-col items-start justify-start">
          <h4 className="text-lg text-gray-800 font-bold">{name}</h4>
          <p className="text-sm text-gray-500 mb-2">{title}</p>
          <div className="flex">
            <a
              href={linkedin}
              className="text-2xl mr-4 duration-300 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              href={github}
              className="text-2xl mr-4 duration-300 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

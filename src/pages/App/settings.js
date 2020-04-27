import React, { useState } from 'react';
import Icon from '../../components/icon';
import { Link } from '@reach/router';

export default function Settings(props) {
  const [fields, setFields] = useState({
    autoconnect: true,
  });

  const handleToggle = (setting) => {
    return () => {
      setFields({
        ...fields,
        [setting]: !fields[setting],
      });
    };
  };

  return (
    <div className="pt-24 p-6">
      <div className=" mt-4 flex justify-between">
        <Link to="/" className="flex justify-between">
          <button>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 7L7 1"
                stroke="#9A99A2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
        <h2 className=" m-auto text-3xl tracking-wide p-2">Settings</h2>
      </div>
      <div>
        <h1 className="block font-bold text-xl pt-8">Account</h1>
      </div>
      <div className="mt-4">
        <label className="block font-medium text-xs mb-1" htmlFor="email">
          EMAIL
        </label>
        <span className="text-gray-600">good@try.com</span>
      </div>
      <div className="mt-4">
        <label className="block font-medium text-xs mb-1" htmlFor="password">
          PASSWORD
        </label>
        <span className="text-gray-600">***********</span>
      </div>
      <div className="mt-4 flex flex-row-reverse justify-between">
        <Link to="" className="flex  ">
          <button>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L7 7L1 1"
                stroke="#1A202C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
        <p className="text-base tracking-wide">Deactivate account</p>
      </div>

      <div className="mt-4">
        <label className="block font-bold text-xl mb-4" htmlFor="Display">
          Display
        </label>
        <div className=" mt-4 flex justify-start items-center ">
          <button onClick={handleToggle('autoconnect')}>
            {!fields.autoconnect ? (
              <Icon type="TOGGLE OFF" size="30" />
            ) : (
              <Icon type="TOGGLE ON" size="30" />
            )}
          </button>
          <p className="ml-2">Automatically connect after scan</p>
        </div>
      </div>
      <div className=" flex items-center">
        <button className={`toggle switch `} onClick={handleToggle('darkmode')}>
          {!fields.darkmode ? (
            <Icon type="TOGGLE OFF" size="30" />
          ) : (
            <Icon type="TOGGLE ON" size="30" />
          )}
        </button>
        <p className="ml-2">Dark mode</p>
      </div>
      <div className="mt-4">
        <label className="block font-bold text-xl mb-4" htmlFor="Display">
          Notifications
        </label>
        <div className="flex justify-start items-center ">
          <button onClick={handleToggle('browser')}>
            {!fields.browser ? (
              <Icon type="TOGGLE OFF" size="30" />
            ) : (
              <Icon type="TOGGLE ON" size="30" />
            )}
          </button>
          <p className="ml-2">Browser</p>
        </div>
        <div className="flex justify-start items-center ">
          <button onClick={handleToggle('email')}>
            {!fields.email ? (
              <Icon type="TOGGLE OFF" size="30" />
            ) : (
              <Icon type="TOGGLE ON" size="30" />
            )}
          </button>
          <p className="ml-2">Email</p>
        </div>
        <div className="flex justify-start items-center ">
          <button onClick={handleToggle('sms')}>
            {!fields.sms ? (
              <Icon type="TOGGLE OFF" size="30" />
            ) : (
              <Icon type="TOGGLE ON" size="30" />
            )}
          </button>
          <p className="ml-2">SMS</p>
        </div>
      </div>
      <div className="mt-4">
        <label className="block font-bold text-xl mb-4" htmlFor="Display">
          Accessibility
        </label>
        <div className="mt-4 flex flex-row-reverse justify-between">
          <Link to="" className="flex  ">
            <button>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L7 7L1 1"
                  stroke="#1A202C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
          <p className="text-base tracking-wide">Language</p>
        </div>
        <div className="mt-4 flex flex-row-reverse justify-between">
          <Link to="" className="flex  ">
            <button>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L7 7L1 1"
                  stroke="#1A202C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
          <p className="text-base tracking-wide">Color blind mode</p>
        </div>
      </div>
    </div>
  );
}

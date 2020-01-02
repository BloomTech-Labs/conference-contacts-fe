import React from 'react';

export default function Title() {
  return (
    <div className="" id="reviews">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-black-600 mb-8">
          Don't take our word for it.
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">
                "Spend Stack is a truly high-quality, well designed new app."
              </p>
              <p className="text-gray-500 text-xs md:text-sm px-6">Ryan Christoffel</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">
                "The app syncs across devices and makes it easy to share lists and more."
              </p>
              <p className="text-gray-500 text-xs md:text-sm px-6">chance Miller</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">
                I don't regret buying this wearble gadget. One of the best gadgets I own!.
              </p>
              <p className="text-gray-500 text-xs md:text-sm px-6" id="reviews">
                James Doe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

export default function NavBarLanding() {
  return (
    <div className="text-center container mx-auto">
      <div className="">
        <h2 className="mx-auto m-auto mt-16 desktop:text-5xl mobile:text-3xl font-bold mb-2 text-black">
          Leave the business cards at home
        </h2>
        <h3 className="mx-auto m-auto desktop:text-2xl mobile:text-lg mb-8 text-black-200">
          Business cards get thrown in the trash. Swaap makes trading business information
          effortless. Never loose another contact!
        </h3>
      </div>
      <img
        className="mx-auto w-1/2"
        src="https://i.ibb.co/TgYq6kk/Hero-Image.png"
        alt="Hero-Image"
        border="0"
      ></img>
      <section className="container padding-title mx-auto px-5 p-10">
        <div className="flex items-center justify-center flex-wrap mb-20">
          <div className="w-full desktop:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Connect Seamlessly</h4>
            <p className="text-gray-600 mb-8">
              Adding contacts has never been easier. Search by name, scan QR code or download the
              app and "Swaap" with bluetooth.
            </p>
          </div>
          <div className="ml-8">
            <img
              src="https://i.ibb.co/ckBNHs6/Connect-Seamlessly.png"
              alt="Connect-Seamlessly"
              border="0"
            />
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap mb-20">
          <div className="w-full desktop:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Stay in touch</h4>
            <p className="text-gray-600 mb-8">
              Keep all your business contacts in one place with all their important information and
              preferred form of contact.
            </p>
          </div>
          <img
            src="https://i.ibb.co/qBrvpvL/undraw-online-chat-d7ek-1.png"
            alt="undraw-online-chat-d7ek-1"
            border="0"
          ></img>
        </div>
        <div className="flex items-center justify-center flex-wrap mb-20">
          <div className="w-full desktop:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Never forget a meeting</h4>
            <p className="text-gray-600 mb-8">
              Remember when and where you met someone, keep track of events, and take notes of
              meetings so that you can look professional in follow ups.
            </p>
          </div>
          <div className="ml-8">
            <img
              src="https://i.ibb.co/RhdWXbB/Never-Forget-a-Meeting.png"
              alt="Never-Forget-a-Meeting"
              border="0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

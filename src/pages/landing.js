import React, { useState } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import Button from '../components/button';
import { Link } from '@reach/router';

export default function Landing() {
  const { loginWithRedirect } = useAuth0();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <section>
        <nav>
          <div className="px-16 flex justify-between items-center">
            <svg
              className="ml-4"
              width="70"
              height="30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.018 5.105a1.022 1.022 0 00-1.904-.74 9.641 9.641 0 00-.673 3.51c.007 1.214.233 2.416.67 3.55a1.021 1.021 0 001.91-.721c-.72-1.914-.721-3.746-.003-5.599zm-3.663 6.992c-1.336-2.842-1.337-5.585 0-8.385a1.297 1.297 0 00-2.34-1.117c-.834 1.75-1.251 3.518-1.251 5.29 0 1.773.416 3.546 1.248 5.315a1.296 1.296 0 002.344-1.103zM1.981 15.965a1.024 1.024 0 10-1.915.722c.72 1.915.722 3.747.004 5.6a1.022 1.022 0 101.904.74 9.657 9.657 0 00.673-3.51 10.033 10.033 0 00-.666-3.552zm4.229-1.504c-.04-.09-.083-.18-.125-.27a1.297 1.297 0 10-2.346 1.102c1.338 2.842 1.339 5.585 0 8.385a1.296 1.296 0 102.34 1.116c.044-.09.083-.182.127-.273.75-1.66 1.124-3.332 1.125-5.015.003-1.68-.372-3.364-1.121-5.043v-.002z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M30.827 21.402v.133c-.089 2.242-2.02 4.062-4.395 4.062a4.552 4.552 0 01-3.062-1.199 4.51 4.51 0 01-3.063 1.199c-2.42 0-4.395-1.887-4.395-4.193v-5.573a1.333 1.333 0 012.664 0v5.571c0 .843.776 1.531 1.73 1.531.955 0 1.732-.688 1.732-1.53V15.83a1.332 1.332 0 112.663 0v5.571c0 .843.777 1.531 1.732 1.531.954 0 1.73-.688 1.73-1.53v-5.616a1.332 1.332 0 012.664 0v5.615zM43.5 15.654v8.5a1.269 1.269 0 01-1.287 1.265c-.733 0-1.177-.576-1.177-1.265v-.267c-.954.822-2.064 1.31-3.395 1.31a5.36 5.36 0 110-10.72c1.331 0 2.441.51 3.395 1.287v-.111c0-.688.444-1.265 1.177-1.265a1.269 1.269 0 011.287 1.266zm-3.085 4.192a2.786 2.786 0 00-5.57 0c0 1.532 1.264 2.752 2.794 2.752a2.771 2.771 0 002.776-2.75v-.002zM56.375 15.654v8.5a1.269 1.269 0 01-1.29 1.265c-.732 0-1.175-.576-1.175-1.265v-.267c-.955.822-2.065 1.31-3.396 1.31a5.359 5.359 0 01-3.834-9.174 5.36 5.36 0 013.834-1.546c1.331 0 2.441.51 3.396 1.287v-.111c0-.688.444-1.265 1.176-1.265a1.27 1.27 0 011.289 1.266zm-3.085 4.192a2.786 2.786 0 00-5.571 0c0 1.532 1.264 2.752 2.795 2.752a2.771 2.771 0 002.774-2.75l.002-.002zM70 19.959a5.622 5.622 0 01-5.615 5.615 5.822 5.822 0 01-3.13-.932v5.194a1.342 1.342 0 01-2.593.524 1.344 1.344 0 01-.092-.524V15.718a1.342 1.342 0 011.354-1.332 1.368 1.368 0 011.287.933 5.54 5.54 0 013.174-.977A5.622 5.622 0 0170 19.959zm-2.686 0a2.93 2.93 0 10-2.93 2.93 2.941 2.941 0 002.93-2.93zM12.511 19.491c0 2.357-.607 4.714-1.823 7.054a1.571 1.571 0 01-2.79-1.448c1.777-3.418 1.943-6.75.502-10.15-1.32-2.718-1.82-4.692-1.82-7.046 0-2.355.608-4.714 1.824-7.054a1.571 1.571 0 012.788 1.448c-1.776 3.418-1.942 6.75-.5 10.15 1.237 2.743 1.82 4.692 1.82 7.046z"
                fill="#000"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="3.884"
                  y1="3.301"
                  x2="16.669"
                  y2="37.337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#933EFF" />
                  <stop offset="1" stopColor="#0047FF" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex">
              <ul className="desktop-nav flex items-center">
                <Button onClick={loginWithRedirect}>Sign Up</Button>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* Title */}
      <div className="text-center container mx-auto px-20">
        <h2 className="text-6xl font-bold mb-2 text-black">Meet Spend Stack</h2>
        <h3 className="text-3xl mb-8 text-black-200">
          Smarter lists that calculate how much its items cost. And, to the penny.
        </h3>
        <Button onClick={loginWithRedirect}>Download</Button>
        <img src="https://i.ibb.co/NLCGt1Z/darkMode.png" alt="darkMode" border="0"></img>
      </div>

      {/* Features */}
      <div>
        <section className="container mx-auto px-6 p-10" id="features">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Features</h2>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">A grocery List</h4>
              <p className="text-gray-600 mb-8">
                Check off items and easily keep tabs on the cost of your next grocery trip
              </p>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">The "envelope" Budget</h4>
              <p className="text-gray-600 mb-8">
                Keep track of your budget and enter items throughout the week.
              </p>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Christmas or Birthday Lists</h4>
              <p className="text-gray-600 mb-8">
                Manage everyone's wants, and keep tabs on how much each person's gifts cost.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* DarkMode needs to be reviewed */}
      <section className="container mx-auto bg-white p-5 ">
        <section className="container mx-auto bg-white p-5">
          <div classname="container">
            <div classname="row">
              <div className="col-12">
                <div classname="section-heading text-center">
                  <h2 className="text-4xl flex justify-center font-sembold text-purple-600 ">
                    Awesome Features
                  </h2>
                </div>
                <div>
                  <h2 className="border-b-2 border-pink-500 w-2/12"></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-center p-5" id="demo">
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2 font-sembold text-purple-500">
                <img
                  className="w-8 ml-32"
                  src="https://i.ibb.co/XzktDZK/smartphone.png"
                  alt="smartphone"
                  border="0"
                />
                DarkMode
              </h4>
              <p className="mb-8 p-2 ">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2 font-sembold text-purple-500">
                <img
                  className="w-8 ml-32"
                  src="https://i.ibb.co/XzktDZK/smartphone.png"
                  alt="smartphone"
                  border="0"
                />
                Dark Mode
              </h4>
              <p className="mb-8 p-2">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2 font-sembold text-purple-500">
                <img
                  className="w-8 ml-32"
                  src="https://i.ibb.co/XzktDZK/smartphone.png"
                  alt="smartphone"
                  border="0"
                />
                Dark Mode
              </h4>
              <p className="text-start mb-8 p-2">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2 font-sembold text-purple-500">
                <img
                  className="w-8 ml-32"
                  src="https://i.ibb.co/XzktDZK/smartphone.png"
                  alt="smartphone"
                  border="0"
                />
                Dark Mode
              </h4>
              <p className="mb-8 p-2 ">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto bg-white p-5">
          <div className="flex justify-between text-center p-5" id="demo">
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2 font-sembold text-purple-500">
                <img
                  className="w-8 ml-32"
                  src="https://i.ibb.co/XzktDZK/smartphone.png"
                  alt="smartphone"
                  border="0"
                />
                Dark Mode
              </h4>
              <p className="mb-8 p-2 ">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2">
                <img
                  className="w-8 ml-32"
                  src="https://i.ibb.co/XzktDZK/smartphone.png"
                  alt="smartphone"
                  border="0"
                />
                Dark Mode
              </h4>
              <p className="mb-8 p-2">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className=" p-2">
                <img
                  className="w-8 ml-32"
                  src="https://i.ibb.co/XzktDZK/smartphone.png"
                  alt="smartphone"
                  border="0"
                />
                Dark Mode
              </h4>
              <p className="text-start mb-8 p-2">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2">
                <img
                  className="w-8 ml-32"
                  src="https://i.ibb.co/XzktDZK/smartphone.png"
                  alt="smartphone"
                  border="0"
                />
                Dark Mode
              </h4>
              <p className="mb-8 p-2 ">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* Features part 2 */}
      {/* <div>
        <section className="container mx-auto px-6 p-10" id="team">
          <section className="flex flex-row container mx-auto px-6 p-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">The Heist Pullers</h2>

          <div className="md:flex bg-white rounded-lg p-6">
            <div className="flex-row">
              <img
                className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                src="https://vignette.wikia.nocookie.net/berserk/images/6/6f/BTCG_Skull_Knight.png/revision/latest?cb=20170930084349" alt=""
              ></img>

              <h4 className="text-3xl text-gray-800 font-bold mb-3">Jonathan Picazo</h4>

              <p className="text-gray-600 mb-8">Team Lead/Software Engineer</p>

              <img
                className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                src="https://vignette.wikia.nocookie.net/berserk/images/7/7b/Serpico_wind.jpg/revision/latest/window-crop/width/40/x-offset/0/y-offset/99/window-width/2032/window-height/1524?cb=20160828173038" alt=""
              ></img>

              <h4 className="text-3xl text-gray-800 font-bold mb-3">Bobby Hall</h4>

              <p className="text-gray-600 mb-8">Software Engineer</p>

              <img
                className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                src="https://vignette.wikia.nocookie.net/berserk/images/a/a9/Corkus_Manga.jpg/revision/latest?cb=20150810010522" alt=""
              ></img>

              <h4 className="text-3xl text-gray-800 font-bold mb-3">Tyler Quinn</h4>

              <p className="text-gray-600 mb-8">Software Engineer</p>

              <img
                className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                src="https://vignette.wikia.nocookie.net/berserk/images/c/ca/Roderick_Manga.jpg/revision/latest/window-crop/width/40/x-offset/0/y-offset/24/window-width/410/window-height/308?cb=20150809233216" alt=""
              ></img>

              <h4 className="text-3xl text-gray-800 font-bold mb-3">Zachary Peasly</h4>

              <p className="text-gray-600 mb-8">Software Engineer</p>

              <img
                className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                src="https://vignette.wikia.nocookie.net/berserk/images/4/40/Manga_V38_Guts.png/revision/latest/window-crop/width/40/x-offset/0/y-offset/19/window-width/400/window-height/300?cb=20170919104357" alt=""
              ></img>

              <h4 className="text-3xl text-gray-800 font-bold mb-3">Jarvise Billups-Brown</h4>

              <p className="text-gray-600 mb-8">Software Engineer</p>

              <img
                className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                src="https://vignette.wikia.nocookie.net/berserk/images/b/b0/BTCG_Griffith_Holding_Sabre.png/revision/latest?cb=20170930052614" alt=""
              ></img>

              <h4 className="text-3xl text-gray-800 font-bold mb-3">Marlon Raskin</h4>

              <p className="text-gray-600 mb-8">Software Engineer</p>

              <img
                className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                src="https://vignette.wikia.nocookie.net/berserk/images/e/e4/Pippin_Manga.jpg/revision/latest/window-crop/width/40/x-offset/0/y-offset/49/window-width/990/window-height/743?cb=20150810011043" alt=""
              ></img>

              <h4 className="text-3xl text-gray-800 font-bold mb-3">Michael Reding</h4>

              <p className="text-gray-600 mb-8">Software Engineer</p>

              <img
                className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                src="https://vignette.wikia.nocookie.net/berserk/images/1/10/Rickert_Profile.jpg/revision/latest/window-crop/width/40/x-offset/0/y-offset/49/window-width/998/window-height/749?cb=20160830163701" alt=""
              ></img>

              <h4 className="text-3xl text-gray-800 font-bold mb-3">Tyler Nishida</h4>

              <p className="text-gray-600 mb-8">Software Engineer</p>

              <img
                className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                src="https://vignette.wikia.nocookie.net/berserk/images/9/9e/Farnese_de_Vandimion_Manga.jpg/revision/latest/window-crop/width/40/x-offset/0/y-offset/99/window-width/2016/window-height/1512?cb=20160918013313" alt=""
              ></img>

              <h4 className="text-3xl text-gray-800 font-bold mb-3">Emily Arias</h4>

              <p className="text-gray-600 mb-8">Software Engineer</p>
            </div>
          </div>
        </section>
        </section>
      </div> */}

      {/* Review */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Don't take our word for it.
          </h2>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Reviews</h2>
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

      {/* Download */}
      <section className="background-color: #FFFFFF">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-black">
            Handle any list dealing with money on ios
          </h2>
        </div>
      </section>

      {/* footer */}
      <footer className="text-center bg-green-100">
        <div className="text-center container mx-auto px-6 pt-10 pb-6">
          <div className="text-center flex flex-wrap">
            <div className=" text-center w-full ">
              <p className="text-blue-500">
                Built by ZAdas fa sdf in minn, mn and releaseed under his L.L.C
              </p>
            </div>
          </div>
        </div>
      </footer>

      <section>
        <nav>
          <div className="px-6 flex justify-between items-center">
            <svg
              className="ml-4"
              width="70"
              height="30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.018 5.105a1.022 1.022 0 00-1.904-.74 9.641 9.641 0 00-.673 3.51c.007 1.214.233 2.416.67 3.55a1.021 1.021 0 001.91-.721c-.72-1.914-.721-3.746-.003-5.599zm-3.663 6.992c-1.336-2.842-1.337-5.585 0-8.385a1.297 1.297 0 00-2.34-1.117c-.834 1.75-1.251 3.518-1.251 5.29 0 1.773.416 3.546 1.248 5.315a1.296 1.296 0 002.344-1.103zM1.981 15.965a1.024 1.024 0 10-1.915.722c.72 1.915.722 3.747.004 5.6a1.022 1.022 0 101.904.74 9.657 9.657 0 00.673-3.51 10.033 10.033 0 00-.666-3.552zm4.229-1.504c-.04-.09-.083-.18-.125-.27a1.297 1.297 0 10-2.346 1.102c1.338 2.842 1.339 5.585 0 8.385a1.296 1.296 0 102.34 1.116c.044-.09.083-.182.127-.273.75-1.66 1.124-3.332 1.125-5.015.003-1.68-.372-3.364-1.121-5.043v-.002z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M30.827 21.402v.133c-.089 2.242-2.02 4.062-4.395 4.062a4.552 4.552 0 01-3.062-1.199 4.51 4.51 0 01-3.063 1.199c-2.42 0-4.395-1.887-4.395-4.193v-5.573a1.333 1.333 0 012.664 0v5.571c0 .843.776 1.531 1.73 1.531.955 0 1.732-.688 1.732-1.53V15.83a1.332 1.332 0 112.663 0v5.571c0 .843.777 1.531 1.732 1.531.954 0 1.73-.688 1.73-1.53v-5.616a1.332 1.332 0 012.664 0v5.615zM43.5 15.654v8.5a1.269 1.269 0 01-1.287 1.265c-.733 0-1.177-.576-1.177-1.265v-.267c-.954.822-2.064 1.31-3.395 1.31a5.36 5.36 0 110-10.72c1.331 0 2.441.51 3.395 1.287v-.111c0-.688.444-1.265 1.177-1.265a1.269 1.269 0 011.287 1.266zm-3.085 4.192a2.786 2.786 0 00-5.57 0c0 1.532 1.264 2.752 2.794 2.752a2.771 2.771 0 002.776-2.75v-.002zM56.375 15.654v8.5a1.269 1.269 0 01-1.29 1.265c-.732 0-1.175-.576-1.175-1.265v-.267c-.955.822-2.065 1.31-3.396 1.31a5.359 5.359 0 01-3.834-9.174 5.36 5.36 0 013.834-1.546c1.331 0 2.441.51 3.396 1.287v-.111c0-.688.444-1.265 1.176-1.265a1.27 1.27 0 011.289 1.266zm-3.085 4.192a2.786 2.786 0 00-5.571 0c0 1.532 1.264 2.752 2.795 2.752a2.771 2.771 0 002.774-2.75l.002-.002zM70 19.959a5.622 5.622 0 01-5.615 5.615 5.822 5.822 0 01-3.13-.932v5.194a1.342 1.342 0 01-2.593.524 1.344 1.344 0 01-.092-.524V15.718a1.342 1.342 0 011.354-1.332 1.368 1.368 0 011.287.933 5.54 5.54 0 013.174-.977A5.622 5.622 0 0170 19.959zm-2.686 0a2.93 2.93 0 10-2.93 2.93 2.941 2.941 0 002.93-2.93zM12.511 19.491c0 2.357-.607 4.714-1.823 7.054a1.571 1.571 0 01-2.79-1.448c1.777-3.418 1.943-6.75.502-10.15-1.32-2.718-1.82-4.692-1.82-7.046 0-2.355.608-4.714 1.824-7.054a1.571 1.571 0 012.788 1.448c-1.776 3.418-1.942 6.75-.5 10.15 1.237 2.743 1.82 4.692 1.82 7.046z"
                fill="#000"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="3.884"
                  y1="3.301"
                  x2="16.669"
                  y2="37.337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#933EFF" />
                  <stop offset="1" stopColor="#0047FF" />
                </linearGradient>
              </defs>
            </svg>

            <nav>
              <ul className="mainNav" style={open ? { transform: 'translateX(0)' } : null}>
                <div className="">
                  <div className="bg-gray-200 pt-10 shadow-sm">
                    <div className="w-32 m-auto flex-col justify-center items-center"></div>
                  </div>
                </div>
                <div className="mt-8"></div>
              </ul>
            </nav>

            <div className="flex">
              <ul className="desktop-nav flex items-center">
                <a
                  className="p-6 desktop-link text-lg mr-6 border-b-2 hover:border-blue-600"
                  href="#features"
                >
                  Features
                </a>
                <a
                  className="p-6 desktop-link text-lg mr-6 border-b-2 30px hover:border-blue-600 mr-6"
                  href="#demo"
                >
                  Demo
                </a>
                <a
                  className="px-6 ml-5 solid  p-6 desktop-link text-lg bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white mr-6"
                  href="#team"
                >
                  Team
                </a>
                <a
                  className="px-6 ml-5 solid  p-6 desktop-link text-lg bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white"
                  href="#reviews"
                >
                  Reviews
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

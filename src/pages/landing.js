import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import Button from '../components/button';
const Landing = () => {
  const { loginWithRedirect } = useAuth0();
 
  return (
    <div>
      {/* <NavBar /> */}
      <section>
        <nav>
          <div className="flex justify-between items-center">
            <a href className="font-bold text-2xl lg:text-4xl">
              Swaap
            </a>
            <div className="flex">
              <ul className="desktop-nav flex items-center">
                <a className="5px solid #007AFF 30px p-6 desktop-link text-lg" href="#features">
                  Features
                </a>
                <a className="5px solid #007AFF 30px p-6 desktop-link text-lg" href="#demo">
                  Demo
                </a>
                <a className="5px solid #007AFF 30px p-6 desktop-link text-lg" href="#team">
                  Team
                </a>
                <a className="5px solid #007AFF 30px p-6 desktop-link text-lg" href="#reviews">
                  Reviews
                </a>
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
      <div className="flex-start bg-gray-200 p-5" id="demo">
        <div className="w-2/5 flex-none p-2">
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-gray-700 text-center bg-gray-400 p-2 w-2/5 flex-none p-2">
              Dark Mode
            </h4>
            <p className="text-center text-center text-gray-600 mb-8 w-2/5 flex-none p-2 ">
              Turn out the lights with our gorgeous dark mode support
            </p>
            <h4 className="text-gray-700 text-center bg-gray-400 p-2 w-2/5 flex-none p-2">
              Dark Mode
            </h4>
            <p className="text-center text-gray-600 mb-8 w-2/5 flex-none p-2">
              Turn out the lights with our gorgeous dark mode support
            </p>
            <h4 className="text-gray-700 text-center bg-gray-400 p-2 w-2/5 flex-none p-2">
              Dark Mode
            </h4>
            <p className="text-center text-gray-600 mb-8 w-2/5 flex-none p-2">
              Turn out the lights with our gorgeous dark mode support
            </p>
            <h4 className="text-gray-700 text-center bg-gray-400 p-2 w-2/5 flex-none p-2">
              Dark Mode
            </h4>
            <p className=" text-center text-gray-600 mb-8 w-2/5 flex-none p-2 ">
              Turn out the lights with our gorgeous dark mode support
            </p>
          </div>
        </div>
      </div>

      {/* Features part 2 */}
      <div>
        <section className="container mx-auto px-6 p-10" id="team">
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
          <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            Download
          </button>
        </div>
      </section>

      {/* footer */}
      <footer className="text-center bg-green-100">
        <div className="text-center container mx-auto px-6 pt-10 pb-6">
          <div className="text-center flex flex-wrap">
            <div className=" text-center w-full ">
              <p
                href="#"
                className="text-center hover:underline text-black-600 hover:text-blue-500"
              >
                Built by ZAdas fa sdf in minn, mn and releaseed under his L.L.C
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

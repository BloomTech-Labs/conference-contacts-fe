import React from 'react';
import Screenshot from '../components/screenshot';
import NavbarLanding from '../containers/navbarlanding';
import Team from './teampage';
import Footer from './footer';
import Features from './features';
import Title from './title';
import Review from './review';

export default function Landing() {
  return (
    <div>
      {/* LandpageNavBar */}
      <NavbarLanding />

      {/* Title */}
      <Title />

      {/* Features */}
      <Features />

      {/* App Screenshots */}
      <h2 className="text-4xl flex justify-center font-sembold text-black-600 p-12" id="demo">
        App Screenshots
      </h2>
      <Screenshot />

      {/* Review */}
      <Review />
      {/* Team */}
      <Team />

      {/* footer */}
      <Footer />

      {/* <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20" id="nav-content">
				<ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
					<li class="mr-6 my-2 md:my-0">

            <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <div className="flex">
              <ul className="flex items-center ml-24">
              <a
                  className="p-6 desktop-link text-lg mr-6 border-b-2 hover:border-blue-600"
                  href="#features"
                >
                  Features
                </a>
                <a
                  className="p-6 desktop-link text-lg mr-6 border-b-2 hover:border-blue-600"
                  href="#demo"
                >
                  Demo
                </a>
                <a
                  className="p-6 desktop-link text-lg mr-6 border-b-2 hover:border-blue-600"
                  href="#team"
                >
                  Team
                </a>
                <a
                  className="p-6 desktop-link text-lg mr-6 border-b-2 hover:border-blue-600"
                  href="#reviews"
                >
                  Reviews
                </a>
                <Button className="ml-12" onClick={loginWithRedirect}>Sign Up</Button>
              </ul>
            </div>
            </div>
            </li>
            </ul>
            </div> */}
    </div>
  );
}

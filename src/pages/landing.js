import React from 'react';
import Screenshot from '../components/Landing/screenshot';
import NavbarLanding from '../containers/navbarlanding';
import Team from '../components/Landing/teampage';
import Footer from '../components/Landing/footer';
import Features from '../components/Landing/features';
import Title from '../components/Landing/title';
import Review from '../components/Landing/review';

export default function Landing() {
  return (
    <div className="overflow-x-hidden">
      {/* LandpageNavBar */}
      <NavbarLanding />

      {/* Title */}
      <Title />

      {/* Features */}
      <Features />

      {/* App Screenshots */}
      <h2 className="text-4xl flex justify-center font-sembold text-black-600 pt-12" id="demo">
        App Screenshots
      </h2>
      <Screenshot />

      {/* Review */}
      <Review />
      {/* Team */}
      <Team />

      {/* footer */}
      <Footer />
    </div>
  );
}

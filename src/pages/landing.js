import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
// import Button from '../components/button';
// import NavBar from '../containers/navbar'
const Landing = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      {/* <NavBar /> */}
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href class="font-bold text-2xl lg:text-4xl">
          Swaap
        </a>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none" />
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          <div className="hidden lg:block">
            <ul className="inline-flex">
              <li>
                <a className="px-4 font-bold" href="/">
                  Blog
                </a>
              </li>
              <li>
                <a href className="px-4 hover:text-gray-800">
                  Support
                </a>
              </li>
              <li>
                <a href className="px-4 hover:text-gray-800">
                  Contact
                </a>
              </li>
              <li>
                <a href className="px-4 hover:text-gray-800">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


{/* Title */}
      <div className="text-center container mx-auto px-20">
        <h2 className="text-6xl font-bold mb-2 text-black">Go Scan Go</h2>
        <h3 className="text-3xl mb-8 text-black-200">
          Smarter lists that calculate how much its items cost. And, to the penny.
        </h3>
        <a href="https://www.espn.com/college-football/stats/player/_/view/offense/stat/rushing/season/2019/table/rushing/sort/rushingYards/dir/desc">
          <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            Download
          </button>
			<button class="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            Get Started
          </button>
        </a>
      </div>



{/* Features */}
      <div>
        <section className="container mx-auto px-6 p-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Features</h2>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Conference updates</h4>
              <p className="text-gray-600 mb-8">
                See up-to-date news on what is going on at any participation conferences
              </p>
              <h4 class="text-3xl text-gray-800 font-bold mb-3">QR Scans</h4>
              <p class="text-gray-600 mb-8">
                Scan QR codes from any users to receive contacts and references
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
      <div className="flex-start bg-gray-200 p-5">
        <div className="w-2/5 flex-none p-2"></div>
        <div className="w-full md:w-1/2 pl-10">
          <h4 className="text-gray-700 text-center bg-gray-400 p-2 w-2/5 flex-none p-2">Dark Mode</h4>
          <p className="text-center text-center text-gray-600 mb-8 w-2/5 flex-none p-2 ">
            Turn out the lights with our gorgeous dark mode support
          </p>
          <h4 className="text-gray-700 text-center bg-gray-400 p-2 w-2/5 flex-none p-2">Dark Mode</h4>
          <p className="text-center text-gray-600 mb-8 w-2/5 flex-none p-2">
            Turn out the lights with our gorgeous dark mode support
          </p>
          <h4 className="text-gray-700 text-center bg-gray-400 p-2 w-2/5 flex-none p-2">Dark Mode</h4>
          <p className="text-center text-gray-600 mb-8 w-2/5 flex-none p-2">
            Turn out the lights with our gorgeous dark mode support
          </p>
          <h4 className="text-gray-700 text-center bg-gray-400 p-2 w-2/5 flex-none p-2">Dark Mode</h4>
          <p className=" text-center text-gray-600 mb-8 w-2/5 flex-none p-2 ">
            Turn out the lights with our gorgeous dark mode support
          </p>
        </div>
      </div>


{/* About Us */}
      <div>
        <section className="container mx-auto px-6 p-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">The Heist Pullers</h2>
          <div className="md:flex bg-white rounded-lg p-6">
            <div className="flex-row">
				   <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" 
src="https://vignette.wikia.nocookie.net/berserk/images/6/6f/BTCG_Skull_Knight.png/revision/latest?cb=20170930084349"></img>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Jonathan Picazo</h4>
              <p className="text-gray-600 mb-8">
               Team Lead/Software Engineer
              </p>
					<img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://vignette.wikia.nocookie.net/berserk/images/7/7b/Serpico_wind.jpg/revision/latest/window-crop/width/40/x-offset/0/y-offset/99/window-width/2032/window-height/1524?cb=20160828173038"></img>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Bobby Hall</h4>
              <p className="text-gray-600 mb-8">
                Software Engineer
              </p>
						<img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://vignette.wikia.nocookie.net/berserk/images/a/a9/Corkus_Manga.jpg/revision/latest?cb=20150810010522"></img>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Tyler Quinn</h4>
              <p className="text-gray-600 mb-8">
                Software Engineer
              </p>
							<img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://vignette.wikia.nocookie.net/berserk/images/c/ca/Roderick_Manga.jpg/revision/latest/window-crop/width/40/x-offset/0/y-offset/24/window-width/410/window-height/308?cb=20150809233216"></img>
				<h4 className="text-3xl text-gray-800 font-bold mb-3">Zachary Peasly</h4>
              <p className="text-gray-600 mb-8">
               Software Engineer
				</p> 
						<img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://vignette.wikia.nocookie.net/berserk/images/4/40/Manga_V38_Guts.png/revision/latest/window-crop/width/40/x-offset/0/y-offset/19/window-width/400/window-height/300?cb=20170919104357"></img>
				<h4 className="text-3xl text-gray-800 font-bold mb-3">Jarvise Billups-Brown</h4>
              <p className="text-gray-600 mb-8">
               Software Engineer
				</p>  
						<img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"  src="https://vignette.wikia.nocookie.net/berserk/images/b/b0/BTCG_Griffith_Holding_Sabre.png/revision/latest?cb=20170930052614"></img>
				<h4 className="text-3xl text-gray-800 font-bold mb-3">Marlon Raskin</h4>
              <p className="text-gray-600 mb-8">
               Software Engineer
				</p>  
						<img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"  src="https://vignette.wikia.nocookie.net/berserk/images/e/e4/Pippin_Manga.jpg/revision/latest/window-crop/width/40/x-offset/0/y-offset/49/window-width/990/window-height/743?cb=20150810011043"></img>
				<h4 className="text-3xl text-gray-800 font-bold mb-3">Michael Reding</h4>
              <p className="text-gray-600 mb-8">
               Software Engineer
				</p>  
							<img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"  src="https://vignette.wikia.nocookie.net/berserk/images/1/10/Rickert_Profile.jpg/revision/latest/window-crop/width/40/x-offset/0/y-offset/49/window-width/998/window-height/749?cb=20160830163701"></img>
				<h4 className="text-3xl text-gray-800 font-bold mb-3">Tyler Nishida</h4>
              <p className="text-gray-600 mb-8">
               Software Engineer
				</p>  
						<img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"  src="https://vignette.wikia.nocookie.net/berserk/images/9/9e/Farnese_de_Vandimion_Manga.jpg/revision/latest/window-crop/width/40/x-offset/0/y-offset/99/window-width/2016/window-height/1512?cb=20160918013313"></img>
				<h4 className="text-3xl text-gray-800 font-bold mb-3">Emily Arias</h4>
              <p className="text-gray-600 mb-8">
               Software Engineer
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
                <p className="text-gray-500 text-xs md:text-sm px-6">James Doe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download */}
      <section className="background-color: #FFFFFF">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-black">
            Download our iOS app for free!
          </h2>
          <button class="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            Download
          </button>
			
        </div>
      </section>

      {/* footer */}
      <footer className="text-center bg-green-100">
        <div className="text-center container mx-auto px-6 pt-10 pb-6">
          <div className="text-center flex flex-wrap">
            <div className=" text-center w-full ">
              <p href="#" class="text-center hover:underline text-black-600 hover:text-blue-500">
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

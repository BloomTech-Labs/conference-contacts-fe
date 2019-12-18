import React, { useState } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import Button from '../components/button';
import { Link } from '@reach/router';
import Screenshot from './screenshot';

export default function Landing() {
  const [open, setOpen] = useState(false);
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <section class="antialiased bg-gray-200 mx-auto">
        <div class="lg:px-16 px-2 bg-white flex flex-wrap items-center lg:py-0 py-2 mx-auto">
          <div class="flex-1 flex justify-between items-center mx-auto">
            <nav>
              <div className="flex justify-between items-center container mx-auto">
                <svg
                  className="container"
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
              </div>
            </nav>
          </div>

          <label for="menu-toggle" class="pointer-cursor lg:hidden block">
            <svg
              class="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input class="hidden" type="checkbox" id="menu-toggle" />

          <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
              <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li>
                  <a
                    class="lg:p-12 py-4 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-blue-600"
                    href="#features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    class="lg:p-12 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-blue-600"
                    href="#demo"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    class="lg:p-12 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-blue-600"
                    href="#team"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    class="lg:p-12 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2 text-blue-600"
                    href="#reviews"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <div>
                    <li>
                      <a href>
                        <Button
                          className="lg:p-6 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                          onClick={loginWithRedirect}
                        >
                          Sign Up
                        </Button>
                      </a>
                    </li>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Title */}
      <div className="text-center container mx-auto px-20">
        <h2 className="text-6xl font-bold mb-2 text-black">Go Scan Go</h2>
        <h3 className="text-3xl mb-8 text-black-200">
          A Smarter contact and conference managment that makes the conference experience more
          amusing..
        </h3>
        <img src="https://i.ibb.co/NLCGt1Z/darkMode.png" alt="darkMode" border="0"></img>
      </div>

      {/* Features */}
      {/* <div>
        <section className="container mx-auto px-6 p-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Features</h2>

          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Conference updates</h4>
              <p className="text-gray-600 mb-8">
                See up-to-date news on what is going on at any participation conferences
              </p>
              <h4 class="text-3xl text-gray-800 font-bold mb-3">QR Scans</h4>
              <div class="w-full md:w-1/2"></div>
              <p class="text-gray-600 mb-8">
                Scan QR codes from any users to receive contacts and references
              </p>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Customizability</h4>
              <p className="text-gray-600 mb-8">
                We build pretty complex tools and this allows us to take designs and turn them information
                functional quickly and easily
              </p>
            </div>
          </div>
        </section>
      </div> */}

      <div className="container mx-auto px-12 py-2">
        <div className="flex justify-around text-center p-5">
          <div className="flex flex-wrap">
            {/* <div class="text-center max-w-sm shadow-lg p-5"> */}
            <div className="single-special updates w-full md:w-1/3 px-2 mb-6">
              <div className="col-12 col-sm-6 col-lg-6">
                <h4 className="p-2 font-sembold text-purple-500">
                  <img
                    className="w-8 m-auto"
                    src="https://d33wubrfki0l68.cloudfront.net/8ae959457496f14932ca6872d8270a03c2956237/df151/assets/images/about/simple.svg"
                    alt="icon"
                    border="0"
                  />
                  Conference updates
                </h4>
                <p className="mb-8">
                  See up-to-date news on what is going on at any participation conferences.
                </p>
              </div>
            </div>
            {/* </div> */}

            {/* <div class="max-w-sm rounded overflow-hidden shadow-lg p-5"> */}
            <div className="single-special qr w-full md:w-1/3 px-2 mb-6">
              <div className="col-12 col-sm-6 col-lg-6">
                <h4 className="p-2 font-sembold text-purple-500">
                  <svg
                    className="w-8 m-auto"
                    width="24"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.25 0H2C0.89375 0 0 0.89375 0 2V21.25C0 21.525 0.225 21.75 0.5 21.75H21.25C21.525 21.75 21.75 21.525 21.75 21.25V0.5C21.75 0.225 21.525 0 21.25 0ZM17.75 17.75H4V4H17.75V17.75ZM9.125 13.125H12.625C12.9 13.125 13.125 12.9 13.125 12.625V9.125C13.125 8.85 12.9 8.625 12.625 8.625H9.125C8.85 8.625 8.625 8.85 8.625 9.125V12.625C8.625 12.9 8.85 13.125 9.125 13.125ZM21.25 26.25H0.5C0.225 26.25 0 26.475 0 26.75V46C0 47.1062 0.89375 48 2 48H21.25C21.525 48 21.75 47.775 21.75 47.5V26.75C21.75 26.475 21.525 26.25 21.25 26.25ZM17.75 44H4V30.25H17.75V44ZM9.125 39.375H12.625C12.9 39.375 13.125 39.15 13.125 38.875V35.375C13.125 35.1 12.9 34.875 12.625 34.875H9.125C8.85 34.875 8.625 35.1 8.625 35.375V38.875C8.625 39.15 8.85 39.375 9.125 39.375ZM46 0H26.75C26.475 0 26.25 0.225 26.25 0.5V21.25C26.25 21.525 26.475 21.75 26.75 21.75H47.5C47.775 21.75 48 21.525 48 21.25V2C48 0.89375 47.1062 0 46 0ZM44 17.75H30.25V4H44V17.75ZM35.375 13.125H38.875C39.15 13.125 39.375 12.9 39.375 12.625V9.125C39.375 8.85 39.15 8.625 38.875 8.625H35.375C35.1 8.625 34.875 8.85 34.875 9.125V12.625C34.875 12.9 35.1 13.125 35.375 13.125ZM47.5 26.25H44.5C44.225 26.25 44 26.475 44 26.75V35.125H39.125V26.75C39.125 26.475 38.9 26.25 38.625 26.25H26.75C26.475 26.25 26.25 26.475 26.25 26.75V47.5C26.25 47.775 26.475 48 26.75 48H29.75C30.025 48 30.25 47.775 30.25 47.5V32.25H35.125V38.625C35.125 38.9 35.35 39.125 35.625 39.125H47.5C47.775 39.125 48 38.9 48 38.625V26.75C48 26.475 47.775 26.25 47.5 26.25ZM38.625 44H35.625C35.35 44 35.125 44.225 35.125 44.5V47.5C35.125 47.775 35.35 48 35.625 48H38.625C38.9 48 39.125 47.775 39.125 47.5V44.5C39.125 44.225 38.9 44 38.625 44ZM47.5 44H44.5C44.225 44 44 44.225 44 44.5V47.5C44 47.775 44.225 48 44.5 48H47.5C47.775 48 48 47.775 48 47.5V44.5C48 44.225 47.775 44 47.5 44Z"
                      fill="black"
                    />
                  </svg>
                  QR Scans
                </h4>
                <p className="mb-8 p-2 ">
                  Scan QR codes from any users to receive contacts and references
                </p>
              </div>
            </div>
            {/* </div> */}

            {/* <div class="max-w-sm rounded overflow-hidden shadow-lg p-5"> */}
            <div className="single-special lists w-full md:w-1/3 px-2 mb-6">
              <div className="col-12 col-sm-6 col-lg-6">
                <h4 className="p-2 font-sembold text-purple-500">
                  <svg
                    className="w-8 m-auto"
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M57.8619 40.0364L53.7682 36.5364C53.9619 35.3489 54.0619 34.1364 54.0619 32.9239C54.0619 31.7114 53.9619 30.4989 53.7682 29.3114L57.8619 25.8114C58.1707 25.5471 58.3917 25.195 58.4955 24.802C58.5994 24.409 58.5811 23.9938 58.4432 23.6114L58.3869 23.4489C57.2599 20.2991 55.5723 17.3791 53.4057 14.8302L53.2932 14.6989C53.0304 14.3899 52.68 14.1677 52.2884 14.0617C51.8968 13.9557 51.4823 13.9709 51.0994 14.1052L46.0182 15.9114C44.1432 14.3739 42.0494 13.1614 39.7869 12.3114L38.8057 6.9989C38.7317 6.59917 38.5378 6.23142 38.2497 5.94451C37.9617 5.65761 37.5932 5.46513 37.1932 5.39265L37.0244 5.3614C33.7682 4.7739 30.3432 4.7739 27.0869 5.3614L26.9182 5.39265C26.5182 5.46513 26.1497 5.65761 25.8617 5.94451C25.5736 6.23142 25.3797 6.59917 25.3057 6.9989L24.3182 12.3364C22.0738 13.1866 19.9836 14.3984 18.1307 15.9239L13.012 14.1052C12.6292 13.9698 12.2144 13.9541 11.8225 14.0601C11.4307 14.1662 11.0804 14.389 10.8182 14.6989L10.7057 14.8302C8.54162 17.3809 6.8543 20.3004 5.72445 23.4489L5.6682 23.6114C5.38695 24.3927 5.6182 25.2677 6.24945 25.8114L10.3932 29.3489C10.1995 30.5239 10.1057 31.7239 10.1057 32.9177C10.1057 34.1177 10.1995 35.3177 10.3932 36.4864L6.24945 40.0239C5.94067 40.2882 5.71968 40.6403 5.61585 41.0333C5.51202 41.4263 5.53028 41.8415 5.6682 42.2239L5.72445 42.3864C6.8557 45.5364 8.5307 48.4427 10.7057 51.0052L10.8182 51.1364C11.081 51.4455 11.4314 51.6676 11.823 51.7736C12.2146 51.8796 12.6291 51.8644 13.012 51.7302L18.1307 49.9114C19.9932 51.4427 22.0744 52.6552 24.3182 53.4989L25.3057 58.8364C25.3797 59.2361 25.5736 59.6039 25.8617 59.8908C26.1497 60.1777 26.5182 60.3702 26.9182 60.4427L27.0869 60.4739C30.3731 61.0646 33.7383 61.0646 37.0244 60.4739L37.1932 60.4427C37.5932 60.3702 37.9617 60.1777 38.2497 59.8908C38.5378 59.6039 38.7317 59.2361 38.8057 58.8364L39.7869 53.5239C42.0485 52.6761 44.1541 51.4597 46.0182 49.9239L51.0994 51.7302C51.4822 51.8655 51.897 51.8812 52.2889 51.7752C52.6807 51.6691 53.031 51.4463 53.2932 51.1364L53.4057 51.0052C55.5807 48.4364 57.2557 45.5364 58.3869 42.3864L58.4432 42.2239C58.7244 41.4552 58.4932 40.5802 57.8619 40.0364ZM49.3307 30.0489C49.4869 30.9927 49.5682 31.9614 49.5682 32.9302C49.5682 33.8989 49.4869 34.8676 49.3307 35.8114L48.9182 38.3177L53.5869 42.3114C52.8792 43.942 51.9858 45.4855 50.9244 46.9114L45.1244 44.8552L43.1619 46.4677C41.6682 47.6926 40.0057 48.6552 38.2057 49.3302L35.8244 50.2239L34.7057 56.2864C32.9405 56.4864 31.1584 56.4864 29.3932 56.2864L28.2744 50.2114L25.9119 49.3052C24.1307 48.6302 22.4744 47.6677 20.9932 46.4489L19.0307 44.8302L13.1932 46.9052C12.1307 45.4739 11.2432 43.9302 10.5307 42.3052L15.2495 38.2739L14.8432 35.7739C14.6932 34.8427 14.612 33.8802 14.612 32.9302C14.612 31.9739 14.687 31.0177 14.8432 30.0864L15.2495 27.5864L10.5307 23.5552C11.237 21.9239 12.1307 20.3864 13.1932 18.9552L19.0307 21.0302L20.9932 19.4114C22.4744 18.1927 24.1307 17.2302 25.9119 16.5552L28.2807 15.6614L29.3994 9.5864C31.1557 9.3864 32.9494 9.3864 34.7119 9.5864L35.8307 15.6489L38.2119 16.5427C40.0057 17.2177 41.6744 18.1802 43.1682 19.4052L45.1307 21.0177L50.9307 18.9614C51.9932 20.3927 52.8807 21.9364 53.5932 23.5614L48.9244 27.5552L49.3307 30.0489ZM32.0619 21.3052C25.9869 21.3052 21.0619 26.2302 21.0619 32.3052C21.0619 38.3801 25.9869 43.3052 32.0619 43.3052C38.1369 43.3052 43.0619 38.3801 43.0619 32.3052C43.0619 26.2302 38.1369 21.3052 32.0619 21.3052ZM37.0119 37.2552C36.3627 37.9063 35.5911 38.4226 34.7416 38.7744C33.8921 39.1262 32.9814 39.3066 32.0619 39.3052C30.1932 39.3052 28.4369 38.5739 27.1119 37.2552C26.4608 36.6059 25.9445 35.8343 25.5927 34.9848C25.2409 34.1353 25.0605 33.2246 25.0619 32.3052C25.0619 30.4364 25.7932 28.6802 27.1119 27.3552C28.4369 26.0301 30.1932 25.3052 32.0619 25.3052C33.9307 25.3052 35.6869 26.0301 37.0119 27.3552C37.6631 28.0044 38.1794 28.776 38.5312 29.6255C38.883 30.475 39.0634 31.3857 39.0619 32.3052C39.0619 34.1739 38.3307 35.9302 37.0119 37.2552Z"
                      fill="black"
                    />
                  </svg>
                  Customizability
                </h4>
                <p className="mb-8 p-2 ">
                  We build pretty complex tools and this allows us to take designs and turn them
                  information functional quickly and easily
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* <div classname="container mx-auto px-12 py-2">
                  <h2 className="text-4xl flex justify-center font-sembold text-purple-600 ">
                    Our Philosophy
                  </h2>
             
                
                  <div className="flex justify-between text-center p-5">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-6">
              <div className="col-12 col-sm-6 col-lg-6">
                <h4 className="p-2 font-sembold text-purple-500">
          <img className="w-8 m-auto" 
          src="https://d33wubrfki0l68.cloudfront.net/8ae959457496f14932ca6872d8270a03c2956237/df151/assets/images/about/simple.svg" 
          width="80px" class="center-block img-responsive b-margin-sm" alt="Simple"/>
                Simple</h4>
              <p className="mb-8">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2 font-sembold text-purple-500">
                <img src="https://d33wubrfki0l68.cloudfront.net/00a2b651d6529b8199b3ed3ab2e54f082e03d06e/c4384/assets/images/about/collab.svg" width="80px" class="center-block img-responsive b-margin-sm" alt="Collab"/>
                Collaborative
              </h4>
              <p className="mb-8 p-2">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2 font-sembold text-purple-500">
                <img src="https://d33wubrfki0l68.cloudfront.net/795341c07b32512c1608995a27c85ac0d5bfc2d2/bb140/assets/images/about/comprehensive.svg" width="80px" class="center-block img-responsive b-margin-sm" alt="Comprehensive"/>
                Comprehensive
              </h4>
              <p className="text-start mb-8 p-2">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
          </div> */}

      


<section class="container mx-auto px-6 p-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">
            Exercise Metrics
          </h4>
          <p class="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch is able to capture you vitals
            while you exercise. You can create different category of exercises
            and can track your vitals on the go.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img
            src="https://www.dropbox.com/s/mimcvn6zxtoruis/health.svg?raw=1"
            alt="Monitoring"
          />
        </div>
      </div>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <img
            src="https://www.dropbox.com/s/hllo2ueo8zgi2tt/report.svg?raw=1"
            alt="Reporting"
          />
        </div>
        <div class="w-full md:w-1/2 pl-10">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">
            Reporting
          </h4>
          <p class="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch can generate a comprehensive
            report on your vitals depending on your settings either daily,
            weekly, monthly, quarterly or yearly.
          </p>
        </div>
      </div>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">
            Syncing
          </h4>
          <p class="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch allows you to sync data
            across all your mobile devices whether iOS, Android or Windows OS
            and also to your laptop whether MacOS, GNU/LInux or Windows OS.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img
            src="https://www.dropbox.com/s/v0x0ywlvgmw04z6/sync.svg?raw=1"
            alt="Syncing"
          />
        </div>
      </div>
    </section>















































      

      {/* DarkMode needs to be reviewed */}
      <div className="container mx-auto px-12 py-2">
        <h2 className="text-4xl flex justify-center font-sembold text-purple-600 p-12" id="demo">
          Features
        </h2>

        <div className="flex justify-between text-center p-5">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-6">
              <div className="col-12 col-sm-6 col-lg-6">
                <h4 className="p-2 font-sembold text-purple-500">
                  <img
                    className="w-8 m-auto"
                    src="https://i.ibb.co/HDm2vxV/icon.png"
                    alt="icon"
                    border="0"
                  />
                  Make friends
                </h4>

                <p className="mb-8">Scan a qr code with someone and get there information</p>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-2 mb-6">
              <div className="col-12 col-sm-6 col-lg-6">
                <h4 className="p-2 font-sembold text-purple-500">
                  <img
                    className="w-8 m-auto"
                    src="https://i.ibb.co/X7VGNtY/responsive-design.png"
                    alt="responsive-design"
                    border="0"
                  />
                  Any size
                </h4>

                <p className="mb-8 p-2 ">
                  We support every device orientation and size for multitasking.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-2 mb-6">
              <div className="col-12 col-sm-6 col-lg-6">
                <h4 className="p-2 font-sembold text-purple-500">
                  <img
                    className="w-8 m-auto"
                    src="https://i.ibb.co/Jqszh60/import.png"
                    alt="import"
                    border="0"
                  />
                  Import
                </h4>

                <p className="mb-8 p-2 ">Inport any picture you want on the app.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-center p-5" id="demo">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-6">
              <div className="col-12 col-sm-6 col-lg-6">
                <h4 className="p-2 font-sembold text-purple-500">
                  <img
                    className="w-8 m-auto"
                    src="https://i.ibb.co/4sJpbQx/runer-silhouette-running-fast.png"
                    alt="runer-silhouette-running-fast"
                    border="0"
                  />
                  Fast and Simple
                </h4>

                <p className="mb-8 p-2 ">
                  I only takes 5 minutes to set up ancount by going to auth0 and login with an email
                  of your choice
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-2 mb-6">
              <div className="col-12 col-sm-6 col-lg-6">
                <h4 className="p-2 font-sembold text-purple-500">
                  <img
                    className="w-8 m-auto"
                    src="https://i.ibb.co/BZJLDG3/two-fingers.png"
                    alt="two-fingers"
                    border="0"
                  />
                  Editing
                </h4>

                <p className="mb-8 p-2 ">
                  Simply two finger drag down to bulk edit lists or items.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-2 mb-6">
              <div className="col-12 col-sm-6 col-lg-6">
                <h4 className="p-2 font-sembold text-purple-500">
                  <img
                    className="w-8 m-auto"
                    src="https://i.ibb.co/Ptq1sVZ/moon-phase-symbol.png"
                    alt="moon-phase-symbol"
                    border="0"
                  />
                  DarkMode
                </h4>

                <p className="mb-8 p-2 ">
                  Turn out the lights with our gorgeous dark mode support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features part 2 */}

      <Screenshot />

      {/* Review */}
      <div className="bg-gray-100" id="reviews">
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

      <div className="container mx-auto px-12 py-12 text-center">
        <h2 className="text-4xl flex justify-center font-sembold text-purple-600 p-12" id="team">
          Team
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-2 mb-6">
            {/* <div className="col-12 col-sm-6 col-lg-6"> */}
              <div class="container">
                <img
                  className="hover-photo rounded-r-lg ease md:w-56 md:w-64 mx-auto"
                  src="https://i.ibb.co/cNtktWF/profile.jpg"
                  alt="profile"
                  border="0"
                  alt=""
                ></img>
              </div>

              <h4 className="text-3xl text-gray-800 font-bold mb-3">Jonathan Picazo</h4>
              <p className="text-gray-500 mb-8">Team Leader/Software Engineer</p>
            {/* </div> */}
          </div>

          <div className="w-full md:w-1/3 px-2 mb-6">
            {/* <div className="col-12 col-sm-6 col-lg-6"> */}
              <img
                className="hover-photo rounded-r-lg rounded-tl-lg md:w-56 md:w-64  mx-auto"
                src="https://i.ibb.co/3vZ5kB2/headshot.jpg"
                alt="profile"
                border="0"
                alt=""
              ></img>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Bobby Hall</h4>
              <p className="text-gray-500 mb-8">Software Engineer</p>
            {/* </div> */}
          </div>

          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="col-12 col-sm-6 col-lg-4">
              <img
                className="hover-photo rounded-r-lg rounded-tl-lg md:w-56 md:w-64  mx-auto"
                src="https://i.ibb.co/WfqQd49/T4-JUEB3-ME-UL03-FJADB-b54ed5bc71f5-512.png" alt="T4-JUEB3-ME-UL03-FJADB-b54ed5bc71f5-512"
                alt=""
              ></img>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Tyler Quinn</h4>
              <p className="text-gray-500 mb-8">Software Engineer</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="col-12 col-sm-6 col-lg-4">
              <img
                className="hover-photo rounded-r-lg rounded-tl-lg md:w-56 md:w-64 mx-auto"
              src="https://i.ibb.co/f0tsXRk/T4-JUEB3-ME-UJG8-RLWKG-3766d295008c-512.png" alt="T4-JUEB3-ME-UJG8-RLWKG-3766d295008c-512" border="0"
                alt=""
              ></img>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Zachary Peasley</h4>
              <p className="text-gray-500 mb-8">Software Engineer</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="col-12 col-sm-6 col-lg-4">
              <img
                className="hover-photo rounded-r-lg rounded-tl-lg md:w-56 md:w-64 mx-auto"
                src="https://i.ibb.co/9bMB6H5/T4-JUEB3-ME-UHV013-MQF-3a9d77644b52-512.jpg" alt="T4-JUEB3-ME-UHV013-MQF-3a9d77644b52-512" border="0"
                alt=""
              ></img>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Jarvise Billups-Brown</h4>
              <p className="text-gray-500 mb-8">Software Engineer</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="col-12 col-sm-6 col-lg-4">
              <img
                className="hover-photo rounded-r-lg rounded-tl-lg md:w-56 md:w-64 mx-auto"
                src="https://i.ibb.co/0Xfz8G3/T4-JUEB3-ME-UHF67-A9-T9-a3fb05aba2cd-512.jpg"
                alt="T4-JUEB3-ME-UHF67-A9-T9-a3fb05aba2cd-512"
                border="0"
                alt=""
              ></img>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Michael Raskin</h4>
              <p className="text-gray-500 mb-8">ISO Developer</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="col-12 col-sm-6 col-lg-4">
              <img
                className="hover-photo rounded-r-lg rounded-tl-lg md:w-56 md:w-64  mx-auto"
                src="https://i.ibb.co/XDpNQJz/T4-JUEB3-ME-UHUR873-EV-d88881406d1d-512.jpg" alt="T4-JUEB3-ME-UHUR873-EV-d88881406d1d-512" border="0"
                alt=""
              ></img>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Marlon Raskin</h4>
              <p className="text-gray-500 mb-8">ISO Developer</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="col-12 col-sm-6 col-lg-4">
              <img
                className="hover-photo rounded-r-lg rounded-tl-lg md:w-56 md:w-64 mx-auto"
                src="https://i.ibb.co/D78c7Jp/T4-JUEB3-ME-UJWG6-UZG8-b02f88fab9ce-512.jpg" alt="T4-JUEB3-ME-UJWG6-UZG8-b02f88fab9ce-512" border="0"
                alt=""
              ></img>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Tyler Nishida</h4>
              <p className="text-gray-500 mb-8">UX Designer</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="col-12 col-sm-6 col-lg-4">
              <img
                className="hover-photo rounded-r-lg rounded-tl-lg md:w-56 md:w-64  mx-auto"
                src="https://i.ibb.co/vLwBkbX/T4-JUEB3-ME-UGVBY5-QK0-0322eb799fbf-512.jpg" alt="T4-JUEB3-ME-UGVBY5-QK0-0322eb799fbf-512" border="0"
                alt=""
              ></img>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Emily Arias</h4>
              <p className="text-gray-500 mb-8">UX Designer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download */}
      {/* <section className="background-color: #FFFFFF">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-black">
            Handle any list dealing with money on ios
          </h2>
        </div>
      </section> */}

      {/* <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Swaap</h2>

        <h3 className="text-3xl mb-8 text-black-200">
          We help conference organizers and attendees track, analyze and improve their conference
          experience
        </h3>

        <h2 className="text-4xl font-bold text-left text-gray-800 mb-8">Our Story</h2>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 mb-8">
              Swaap launched in January 2020, and today thousands of people use Swaap to manage
              thousands of conferences, meet-ups, hackathon, and more.
            </p>

            <h2 className="text-4xl font-bold text-left text-gray-800 mb-8">Our Passion</h2>

            <p class="text-gray-600 mb-8">
              We're passionate about making it easy to manage your conference experience and
              improving yur networking so you can spend more time focusing on events.
            </p>

            <h4 className="text-3xl text-gray-800 font-bold mb-3">Christmas or Birthday Lists</h4>
            <p className="text-gray-600 mb-8">
              Manage everyone's wants, and keep tabs on how much each person's gifts cost.
            </p>
          </div>
        </div>
      </section> */}

      {/* footer */}
      <footer className="footer text-center">
        <div className="text-center container mx-auto px-6 pt-10 pb-6">
          <div className="text-center flex flex-wrap">
            <div className=" text-center w-full ">
              <h5 className="text-black-500">Copyright ©2020 Designed by Swaap</h5>
            </div>
          </div>
        </div>
      </footer>

      {/* <section>
        <nav>
          <div className="flex justify-between items-center container mx-auto">
            <svg
              className="ml-4 container"
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

            <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20" id="nav-content">
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
            </div>
          </div>
        </nav>
      </section> */}
    </div>
  );
}

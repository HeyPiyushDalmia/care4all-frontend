import React from "react";
import { HiMenu } from "react-icons/hi";
import logo from "./../assets/img/logo.png";
export default function Header() {
  const user = false;
  return (
    <header className="2xl">
      <nav className="navbar lg:px-6 ">
        <div className="flex_ic flex-wrap justify-between mx-auto max-w-screen-xl">
          <a href="/" className="flex_ic">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Website Logo" />
          </a>

          <div className="flex_ic lg:order-2">
            {
                user ? <a href="/Adopter_dashboard">
                <button className="navbar_button ">
                  PROFILE
                </button>
              </a> : <a href="/Adopter_login">
                <button className="navbar_button">
                  LOGIN
                </button>
              </a>
            }
          
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <HiMenu className="logo"/>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

              <li>
                <a href="/" className="navbar_links " aria-current="page">HOME</a>
              </li>

              <li>
                <a href="/about" className="navbar_links">ABOUT</a>
              </li>

              <li>
                <a href="/adopt" className="navbar_links ">ADOPT</a>
              </li>

              <li>
                <a href="/elearning" className="navbar_links ">E-LEARNING</a>
              </li>

              <li>
                <a href="/contact" className="navbar_links ">CONTACT US</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

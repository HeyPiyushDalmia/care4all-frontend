import React from "react";
import { HiMenu } from "react-icons/hi";
import logo from "./../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Header({ token , token1}) {
  return (
    <header className="2xl">
      <nav className="navbar lg:px-6 ">
        <div className="flex_ic flex-wrap justify-between mx-auto max-w-screen-xl">
          <Link to="/" className="flex_ic">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Website Logo" />
          </Link>

          <div className="flex_ic lg:order-2">
          {token === "true" ? (
  <Link to="/Ngo_account">
    <button className="navbar_button">NGO</button>
  </Link>
) : token1 === "true" ? (
  <Link to="/Adopter_dashboard">
    <button className="navbar_button">USER</button>
  </Link>
) : (
  <Link to="/Adopter_login">
    <button className="navbar_button">LOGIN</button>
  </Link>
)}
              
            

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <HiMenu className="logo" />
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/" className="navbar_links " aria-current="page">
                  HOME
                </Link>
              </li>

              <li>
                <Link to="/about" className="navbar_links">
                  ABOUT
                </Link>
              </li>

              <li>
                <Link to="/adopt" className="navbar_links ">
                  ADOPT
                </Link>
              </li>

              <li>
                <Link to="/elearning" className="navbar_links ">
                  E-LEARNING
                </Link>
              </li>

              <li>
                <Link to="/contact" className="navbar_links ">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

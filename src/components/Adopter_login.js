import React from "react";
import logo from "./../assets/img/logo.png";
import loginpageimage from "./../assets/img/loginpageimage.jpg";

export default function Adopter_login() {
  return (
    <div className="min-h-0.5 bg-grey-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-l m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-orange-200 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
              <div className="bg-white p-2 rounded-full">
                <img src={logo} alt="Logo is not found"></img>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <div className="w-full flex-1  ">
              <a href="/Ngo_login">
                <button class="login_button flex_ic w-48  hover: ml-auto mr-auto">
                  NGO LOGIN
                </button>
              </a>

              <div className="my-5 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  ADOPTER LOGIN
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  className="login_input "
                  type="email"
                  placeholder="Adopter Email"
                />
                <input
                  className="login_input"
                  type="password"
                  placeholder="Password"
                />
                <button className="login_button flex_ic  w-full  hover: ml-auto mr-auto ">
                  <span className="ml-">Log in</span>
                </button>
                <a href="/" className="forget_password">
                  Forget password
                </a>

                <span className=" border-b text-center block">
                  <span className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 ">
                    OR
                  </span>
                </span>

                <a
                  href="/Adopt_signup"
                  className="forget_password create_new_account"
                >
                  Create new account
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-orange-200 text-center hidden lg:flex ">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <img
              src={loginpageimage}
              alt="login page customimage not found"
              className="login_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

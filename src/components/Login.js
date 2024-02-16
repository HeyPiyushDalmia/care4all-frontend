import React from 'react'
import logo from './../assets/img/logo.png'
import herosectionimage2 from './../assets/img/loginpageimage.jpg' 


export default function Login() {
  return (
    <div className="min-h-0.5 bg-grey-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-l m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
               
                <div className="mt-12 flex flex-col items-center">
                    <div className="w-full flex-1 mt-8">
                        <div className="flex flex-col items-center">
                            <button
                                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-orange-200 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                <div className="bg-white p-2 rounded-full">
                                   <img src={logo} alt='Logo is not found'></img>
                                </div>
                            </button>
    
                        </div>
    
                        <div className="my-12 border-b text-center">
                            <div
                                className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                               ADOPTER LOGIN
                            </div>
                        </div>
    
                        <div className="mx-auto max-w-xs">
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="email" placeholder="Email" />
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="password" placeholder="Password" />
                            <button
                                className="mt-5 tracking-wide font-semibold bg-orange-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
  
                                <span className="ml-">
                                    Sign In
                                </span>
                            </button>
                            <p className="mt-6 text-xs text-gray-600 text-center">
                                I agree to abide by Care 4 All
                                <a href="/" className="border-b border-gray-500 border-dotted">
                                    Terms of Service
                                </a>
                                and its
                                <a href="/" className="border-b border-gray-500 border-dotted">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-orange-200 text-center hidden lg:flex ">
                <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
<img src={herosectionimage2} alt="login page customimage not found" className="login_image" />
                </div>
            </div>
        </div>
    </div>
  )
}

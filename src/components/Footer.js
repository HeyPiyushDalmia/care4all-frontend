import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <>

<footer className="bg-black-500">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <a href="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Home
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="/about" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    About
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="/adopt" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Adopt
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="/elearning" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    E-Learning
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="/contact" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Contact
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="/login" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Login
                </a>
            </div>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-blue-500">
                <span className="sr-only">Facebook</span>
                  <FaFacebook className="footer_icons " />
           
            </a>
            <a href="/" className="text-gray-400 hover:text-pink-500">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="footer_icons "/>
            </a>
            <a href="/" class="text-gray-400 hover:text-black">
                <span class="sr-only">Twitter</span>
             <FaSquareXTwitter className="footer_icons "/>
            </a>
            <a href="/" className="text-gray-400 hover:text-orange-500">
                <span className="sr-only">G-mail</span>
                <SiGmail className="footer_icons "/>
            </a>
            
        </div>
        <p className="mt-8 text-base leading-6 text-center text-black-400">
            © 2024 Care 4 All, Inc. All rights reserved.
        </p>
    </div>
</footer>




</>
  )
}

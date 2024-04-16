import React from 'react'
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
    <h1 className="text-center text-4xl font-bold mt-10 mb-10">CONTACT US </h1>
    
    <p className="font-bold  text-center w-full ">Have a query? write to us...</p>

    <div className="min-h-0.5 bg-grey-100 text-gray-900 flex justify-center">
    <div className="max-w-screen-l m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">

    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12  ml-10 rounded-lg mb-20"> 
    <div className=" flex flex-col items-center ">
        <div className="w-full flex-1">

        <form className="mb-6">
            <label className="block mb-2"> Full Name:</label>
            <input type= "text" className="w-full rounded-lg"/>

            <label className="block mb-2">Email:</label>
            <input type="email" className="w-full rounded-lg"/>
            
            <label className="block mb-2">Contact Number : </label>
            <input type="number" className="w-full rounded-lg"/>

            <label className="block mb-2">Mention your Query: </label>
            <textarea className="w-full rounded-lg"></textarea>

      <button class="bg-green-500 text-white text-2l font-medium px-4 py-2 rounded shadow loginbutton register_button mt-5" >SUBMIT </button>

        </form>
        </div>
    </div>
    </div>

    <div className="flex-1 bg-white text-center hidden lg:flex min-h-0.5 ">
      <div className=" flex flex-col gap-8 m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
        <div className='contact-info'>
          <div>
        <FaMapMarkedAlt className="text-7xl text-green-700"/> 
          </div>
        <p> B-4/130 B keshav puram near keshav puram metro station</p> 
        </div>
        <div className='contact-info'>
          <div>
        <FaPhoneAlt className="text-7xl text-black-700"/> 
           </div>
        <p> +91 8882564417</p> 
        </div>
        <div className='contact-info'>
          <div>
        <IoMail className="text-7xl text-red-700"/> 
          </div>
        <p> customersupport@Care4All.com</p> 
        </div>
        <div className='contact-info'>
          <div>
        <FaFacebook className="text-7xl text-blue-700"/> 
          </div>
        <FaInstagram className="text-7xl text-pink-500"/> 
        <FaSquareXTwitter className="text-7xl text-black-700"/> 


        
        </div>
            </div>

</div>
    </div>
    </div>
    </>
  )
}

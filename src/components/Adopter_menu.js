import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function Adopter_menu() {
  return (
 <>
   
   <div className='  ml-10 rounded-lg mb-20 '>
          <Link to='/Ngo_account' >
            <div className='w-full flex flex-col items-center ngo_menu_list'>
           
              <FaUserCircle className="w-50 flex-1 text-4xl inline-flex  " />
            
              <h3 className='inline-flex  leading-10 mb-5'>My Account</h3>
            </div>
          </Link>

        <Link to='/Filled_form'>
          <div className='w-full flex flex-col items-center  ngo_menu_list'>            
                <CgAddR className="w-50 flex-1 text-4xl inline-flex " />
                <h3  className='inline-flex leading-10 mb-5'>View Your Application</h3>              
          </div>
        </Link>
        

        <Link to=''>
        <div className='w-full flex flex-col items-center  ngo_menu_list'>            
              <IoLogOutOutline className="w-50 flex-1 text-4xl inline-flex  "  />
              <h3 className='inline-flex leading-10 mb-5' onClick={()=>{localStorage.setItem("token1","false") ; window.location.href="/Adopter_login"; }}>Logout</h3>            
        </div>
        </Link>
    </div>
 </>
  )
}

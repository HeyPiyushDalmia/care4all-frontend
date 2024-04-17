import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { AiFillDelete } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

export default function Ngo_menu() {
  return (
    <>
  
    <div className='  ml-10 rounded-lg mb-20 '>
          <a href='/Ngo_account' >
            <div className='w-full flex flex-col items-center ngo_menu_list'>
           
              <FaUserCircle className="w-50 flex-1 text-4xl inline-flex  " />
            
              <h3 className='inline-flex  leading-10 mb-5'>My Account</h3>
            </div>
          </a>
          <a href='/Ngo_account' >
            <div className='w-full flex flex-col items-center ngo_menu_list'>
           
              <HiOutlineBuildingOffice className="w-50 flex-1 text-4xl inline-flex  " />
            
              <h3 className='inline-flex  leading-10 mb-5'>ADD BRANCH</h3>
            </div>
          </a>

        <a href=''>
          <div className='w-full flex flex-col items-center  ngo_menu_list'>            
                <CgAddR className="w-50 flex-1 text-4xl inline-flex " />
                <h3  className='inline-flex leading-10 mb-5'>Add Pet</h3>              
          </div>
        </a>
        
        <a href=''>
        <div className='w-full flex flex-col items-center  ngo_menu_list'>            
              <AiFillDelete className="w-50 flex-1 text-4xl inline-flex  "  />
              <h3 className='inline-flex  leading-10 mb-5'>Delete Pet</h3>
        </div>
        </a>

        <a href=''>
        <div className='w-full flex flex-col items-center  ngo_menu_list'>            
              <IoLogOutOutline className="w-50 flex-1 text-4xl inline-flex  "  />
              <h3 className='inline-flex leading-10 mb-5'>Logout</h3>            
        </div>
        </a>
    </div>
    </>
  )
}

import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { AiFillDelete } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";


export default function Adopter_menu() {
  return (
    <div className='ngo_menu_container'>
        <a href="Adopt_my_account" >

            <div className='ngo_menu_list'>            
                <FaUserCircle className=" text-4xl inline-flex  " />
                <h3 className='inline-flex  leading-10'>My Account</h3>
            </div>
        </a>

        <a href=''>
            <div className='ngo_menu_list'>            
                <CgAddR className=" text-4xl inline-flex " />           
                <h3  className='inline-flex '>Adopt Pet</h3>            
            </div>
        </a>
        
        <a href=''>
            <div className='ngo_menu_list'>            
                <IoLogOutOutline className=" text-4xl inline-flex  "  />            
                <h3 className='inline-flex '>Logout</h3>            
            </div>
        </a>

    </div>
  )
}

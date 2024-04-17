import React from 'react'

import about_img from "../assets/img/about_img1.jpg";
import Ngo_menu from './Ngo_menu';
export default function Ngo_account() {
  return (
    <>
    <Ngo_menu/>

      <div className='ngo dash'>
      {/* <img
        src={about_img}
        alt="NGO Image not found..."
        className="ngo_account_img"
      /> */}

      <h1>NGO NAME:</h1>
      <table className='ngo_table'>

        <tr>
          <td className='td_head'>Name:</td>
          <td >ABC</td>
        </tr>

        <tr>
          <td className='td_head'>City:</td>
          <td >PQR</td>
        </tr>

        <tr>
          <td className='td_head'>Branch:</td>
          <td >XYZ</td>
        </tr>

        <tr>
          <td className='td_head'>Year:</td>
          <td >123</td>
        </tr>

      </table>

    </div>
    </>
  )
}

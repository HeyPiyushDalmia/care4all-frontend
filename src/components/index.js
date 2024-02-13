import React from "react";
import { IoMdPaw } from "react-icons/io";
import { TbDog } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import herosectionimg from './../assets/img/herosectionimage2.jpg'
import home_slider_image1 from './../assets/img/home-slider-image1.jpg'
export default function index() {
  return (

  <>

{/* Hero section  */}
    <div className="flex flex-wrap bgcolor">
    <div className="w-full sm:w-8/12 mb-10">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
         
          <div>
           
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">Adopt Me <span className="text-orange-500">Hooman</span></h1>
            <div className="w-20 h-2 bg-orange-700 my-4"></div>
            <p className="text-xl mb-10 hero_para">Adopting a pet is not just a decision; it's a commitment to love, care, and cherish a life that depends on you. Choose adoption, and you'll find a loyal companion who will fill your life with endless joy and gratitude."</p>
            <a href="/about">
            <button className="bg-orange-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
            </a>
          </div>
        </header>
      </div>
    </div>
    {/* <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12"/> */}
    <img src={herosectionimg} className="w-full h-10 object-cover sm:h-screen sm:w-4/12 imgsize" alt="Image not found" />
  </div>

{/* Services offered */}

<div>
<div class="flex justify-center space-x-4 py-8 bg-white">
  <div class="flex flex-col items-center p-6 space-y-3 rounded-lg shadow-md">
  <TbDog className="services_icons"/>
    <h3 className="text-lg font-semibold">Adoption</h3>
    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="flex flex-col items-center p-6 space-y-3 rounded-lg shadow-md">
   
    <h3 className="text-lg font-semibold">Veterinary 24/7</h3>
    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div className="flex flex-col items-center p-6 space-y-3 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold">Fun Activities</h3>
    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
</div>

<br />


{/* Brief About the website */}
<div >
<img src="https://149751761.v2.pressablecdn.com/wp-content/uploads/2022/04/dog-P228UWM.jpg" className="home-about-image" alt="" />
  <h1 className="home-about-heading">The Best For Your Pet</h1>
  <p className="home-about-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta, dolorem velit eaque
     impedit inventore unde ab voluptates? Eaque aliquam amet fuga perspiciatis vitae corporis
      doloribus ex dolor illum soluta!</p>
      <ol>
      <li>
<IoMdPaw className="fabone"/> <span> Dil tute ta vi jashan manani jaandi ayy </span>
         </li>
         <li >
<IoMdPaw className="fabone" /> <span> tu aake dekhle oh meine raate kitni saari teri yaadon mein gujari soniye </span>
         </li>
         <li>
<IoMdPaw className="fabone"/> <span> Tu maan meri jaan mein tujhe janne nhi dunga </span>
         </li>
      </ol>

</div>
<br />

{/* slider */}

<Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="slider"
    >
      <SwiperSlide><img src={home_slider_image1} alt="home slider image"/></SwiperSlide>
      <SwiperSlide><img src={home_slider_image1} alt="home slider image"/></SwiperSlide>
      <SwiperSlide><img src={home_slider_image1} alt="home slider image"/></SwiperSlide>
      <SwiperSlide><img src={home_slider_image1} alt="home slider image"/></SwiperSlide>
    </Swiper>
  </>
  );
}

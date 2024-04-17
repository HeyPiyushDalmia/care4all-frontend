import React from "react";
import { IoMdPaw } from "react-icons/io";
import { TbDog } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import herosectionimg from "./../assets/img/herosectionimage2.jpg";
import bestthingpetimg from "./../assets/img/home_knowyourpet.jpg"
import home_slider_image1 from "./../assets/img/home-slider-image1.jpg";
// import about_card1 from "../assets/img/about_card2.jpg";
import { useState } from "react";

function Index() {
  const [slider] = useState([
    {
      img: home_slider_image1,
    },
    {
      img: herosectionimg,
    },
    {
      img: home_slider_image1,
    },
    {
      img: home_slider_image1,
    },
  ]);
  return (
    <>
      {/* Hero section  */}
      <section className="flex flex-wrap bgcolor 2xl">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div></div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Adopt Me <span className="text-orange-500">Hooman</span>
                </h1>
                <div className="w-20 h-2 bg-orange-700 my-4"></div>
                <p className="text-xl mb-10 hero_para">
                  Adopting a pet is not just a decision; it's a commitment to
                  love, care, and cherish a life that depends on you. Choose
                  adoption, and you'll find a loyal companion who will fill your
                  life with endless joy and gratitude."
                </p>
                <a href="/about">
                  <button className="bg-orange-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                    Learn More
                  </button>
                </a>
              </div>
            </header>
          </div>
        </div>

        <img
          src={herosectionimg}
          className="w-full h-10 object-cover sm:h-screen sm:w-4/12 imgsize"
          alt="herosectionImage not found"
        />
      </section>

      {/* Services offered */}

      <section>
        <div class="flex justify-center space-x-4 py-8 bg-white">
          <div class="flex flex-col items-center p-6 space-y-3 rounded-lg shadow-md">
            <TbDog className="services_icons" />
            <h3 className="text-lg font-semibold">Comprehensive Listings</h3>
            <p className="text-base text-gray-600">
              Care4All provides a diverse range of animals including dogs, cats,
              rabbits, birds, and more.{" "}
            </p>
          </div>
          <div class="flex flex-col items-center p-6 space-y-3 rounded-lg shadow-md">
            <TbDog className="services_icons" />
            <h3 className="text-lg font-semibold">Adoption</h3>
            <p className="text-base text-gray-600">
              Care4All provides helps and providing save and secure plaform for
              adoption.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 space-y-3 rounded-lg shadow-md">
            <TbDog className="services_icons" />
            <h3 className="text-lg font-semibold">Pet Healthcare</h3>
            <p className="text-base text-gray-600">
              Care4All provides E-Content for pet healthcare{" "}
            </p>
          </div>
        </div>
      </section>

      <br />

      {/* Brief About the website */}
    
      <div className="home-about">
      <img
          src={bestthingpetimg}
          className="home-about-image"
          alt=""
          />        
        <div className="home-margin-elements">

        <h1 className="home-about-heading">The Best For Your Pet</h1>
        <p className="home-about-para text-lg mb-4">
        At Care4All, we prioritize providing the best care and support
        for every animal. We understand that adopting a pet is a significant decision,
        and we are committed to ensuring that each pet finds a loving and nurturing
        forever home.From personalized matching to ongoing guidance and support,
        we are here to help you give your pet the best life possible.</p>
        <ol>
          <li className="home-about-para"> 
            <IoMdPaw className="fabone" /> <span> Nutritious Diet </span>
          </li>
          <li className="home-about-para">
            <IoMdPaw className="fabone" />{" "}
            <span> Regular Veterinary Care </span>
          </li>
          <li className="home-about-para"> 
            <IoMdPaw className="fabone" /> <span> Grooming and Hygiene</span>
          </li>
        </ol>
        </div>
        </div>
      
      <br />

      {/* slider */}

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="slider"
      >
        {slider.map((item, i) => {
          return (
            <SwiperSlide>
              <img src={item.img} alt="home slider imagesssss" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="mb-10">

      </div>
    </>
  );
}

export default Index;

import React from "react";
import about_img1 from "../assets/img/about_img1.jpg";
import about_card1 from "../assets/img/about_card1.jpg";

export default function About() {
  return (
    <>
      <img
        src={about_img1}
        alt="aboutImage not found..."
        className=" about_main_img"
      />

      <div className="about_welcome">
        <h2 className="about_main_heading">Welcome to Care4All</h2>
        <h3 className="about_main_quote">
          "Where Compassion Meets Companionship"
        </h3>
      </div>
      

      <div>
        <h2 className="about_main_heading text-center">---WHAT IS Care4All??---</h2>
        <p>
          At Care4All, we believe that every pet deserves a loving home and
          every home deserves the joy that comes with a furry, feathered, or
          scaly friend. Our mission is to facilitate the perfect match between
          pets in need and compassionate individuals or families ready to open
          their hearts and homes. With a dedication to animal welfare, we work
          tirelessly to rescue, rehabilitate, and rehome pets of all shapes,
          sizes, and backgrounds. Whether you're looking for a playful pup to
          join your morning walks or a cuddly cat to keep you company on cozy
          nights, Care4All is here to help you find the perfect match. At
          Care4All, every pet has a story, and we're committed to ensuring that
          each one gets a happy ending. Our team of passionate volunteers and
          professionals provides personalized care and attention to every animal
          in our care, ensuring they receive the love and support they deserve.
          Join us in making a difference in the lives of animals by choosing
          adoption and opening your heart and home to a pet in need. Together,
          we can create a world where every pet has a loving home and every home
          has a cherished pet. Welcome to Care4All - where every adoption makes
          a world of difference.
        </p>
      </div>
      
 <div className="card_main_div">

     
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} className="ml-65 about_cards">
        
        <div style = {{height: '40%', width: '100%'}}>
          <div className="relative bg-orange-50 p-6 rounded-lg shadow-lg flex items-center justify-center w-[300px] h-[250px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border-4 border-[#FFA500] flex items-center justify-center w-[220px] h-[220px">
                <img src={about_card1} alt="Man with dog" className="rounded-full about_image_card"/>
              </div>
            </div>
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg flex items-center justify-center w-12 h-12  border-500 ">
              <span className="text-lg font-bold">1</span>
            </div>
            </div>
           <p>Piyush Dalmia MCA Jagan institute of managementt studies rohini sec 5</p>
           </div> 
        {/* </div> */}
        
        <div style={{height: '40%', width: '100%'}}>
          <div className="relative bg-orange-50 p-6 rounded-lg shadow-lg flex items-center justify-center w-[300px] h-[250px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border-4 border-[#FFA500] flex items-center justify-center w-[220px] h-[220px">
                <img src={about_card1} alt="Man with dog" className="rounded-full about_image_card"/>
              </div>
            </div>
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg flex items-center justify-center w-12 h-12  border-500 ">
              <span className="text-lg font-bold">2</span>
            </div>
          </div>
          <p>Piyush Dalmia MCA Jagan institute of managementt studies rohini sec 5</p>

        </div>

        <div style={{height: '40%', width: '100%'}}>
          <div className="relative bg-orange-50 p-6 rounded-lg shadow-lg flex items-center justify-center w-[300px] h-[250px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border-4 border-[#FFA500] flex items-center justify-center w-[220px] h-[220px">
                <img src={about_card1} alt="Man with dog" className="rounded-full about_image_card"/>
              </div>
            </div>
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg flex items-center justify-center w-12 h-12  border-500 ">
              <span className="text-lg font-bold">3</span>
            </div>
          </div>
          <p>Piyush Dalmia MCA Jagan institute of managementt studies rohini sec 5</p>

        </div>
      {/* </div> */}

 </div>    
 </div>

    </>
  );
}

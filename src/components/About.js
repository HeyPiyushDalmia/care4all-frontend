import React from "react";
import about_img1 from "../assets/img/about_img1.jpg";
import about_card1 from "../assets/img/about_card11.jpg";
import about_card2 from "../assets/img/about_card2.jpg";
import about_card3 from "../assets/img/about_card3.jpg";
const dealerLogos = [about_card1, about_card2, about_card3]



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
        <h2 className="about_main_heading text-center "> Care4All</h2>
        <p className="text-lg mr-auto ml-auto">
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
      

 <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-6">
                {dealerLogos.map((logo, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                    <img src={logo} alt={`Dealer Logo ${index + 1}`} className="h-72 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </section>

    </>
  );
}

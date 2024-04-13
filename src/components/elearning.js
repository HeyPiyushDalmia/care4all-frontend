import React from 'react';
import elearning_dog_food from "../assets/img/elearning_dog_food.jpg";
import elearning_pet_health from "../assets/img/elearning_pet_health.jpg";
import elearning_cat_hygiene from "../assets/img/elearning_cat_hygine.jpg"
import elearning_dog_digestion from "../assets/img/elearning_dog_digestion.jpg"
import YoutubeEmbed from "./YoutubeEmbed";

export default function elearning() {
  return (
    <>

    <h1 className="text-5xl text-center fs-2 font-semibold mt-4 mb-4 py-1.5 bg-orange-300">Pethood - An amazing transformation</h1>
    <div className="elearning_grid-container">
    <div className="elearning_grid-items">
        <img src={elearning_dog_food} className="elearning_img"/>
    <h1 className="text-2xl font-semibold mt-4 mb-3 underline">25 Dangerous Foods Your Dog Should Never Eat: Vet-Reviewed List</h1>
        <p className="text-lg">Many pet owners say that having a dog is like having a toddler in the home. Interestingly, that’s where most poisonings occur. The majority are accidental.Canines are more likely to get in trouble than felines accounting for up to 80% of cases...<a  href='https://petkeen.com/dangerous-foods-your-dog-should-never-eat/'>read more</a>
        </p>
        
    </div>
    
    <div className="elearning_grid-items">
        <img src={elearning_pet_health} className="elearning_img"/>
    <h1 className="text-2xl font-semibold mt-4 mb-3 underline">5 Biggest Mistakes Pet Parents Make in Spring</h1>
        <p className="text-lg">As a veterinary technician, I worked in several veterinary practices for over 20 years, including primary care, emergency, and specialty medicine.Here are five mistakes pet parents make during spring and...<a  href='https://www.dailypaws.com/im-a-vet-tech-these-are-the-biggest-mistakes-pet-parents-make-in-spring-8606585'>read more</a>
        </p>        
    </div>

    <div className="elearning_grid-items">
        <img src={elearning_cat_hygiene} className="elearning_img"/>
    <h1 className="text-2xl font-semibold mt-4 mb-3 underline">Cat Hygiene checklist</h1>
        <p className="text-lg">here's nothing greater than pampering your pet and making them look like a star. Most cats have real pride in their appearance. Cats usually like to remain clean. Grooming your cat plays a big role in bonding as well. Grooming your...<a  href='https://pawsindia.com/blogs/news/cat-hygiene-checklist'>read more</a>
        </p>        
    </div>

    <div className="elearning_grid-items">
        <img src={elearning_dog_digestion} className="elearning_img"/>
    <h1 className="text-2xl font-semibold mt-4 mb-3 underline">5 Most Common Issues Found in Dogs</h1>
        <p className="text-lg">Our dogs hold the most special corner of our hearts. The way they greet us at the door, wagging their furry tail, and ready to cheer us up when we return home tired.Dogs are emotional companions full of life...<a  href='https://pawsindia.com/blogs/news/5-most-common-digestive-issues-found-in-dogs'>read more</a>
        </p>        
    </div>

    </div>

      <h1 className="text-5xl text-center fs-2 font-semibold mt-4 mb-4 py-1.5 bg-orange-300">How To Take Care Of New Pet?</h1>
  <div className='elearning_youtube'>
      <YoutubeEmbed embedId="rokGy0huYEA" />
  </div>
    </>
  )
}

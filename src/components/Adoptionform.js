import React from 'react'

export default function Adoptionform() {
  return (
    <>
      <h1 className="text-center font-semi text-4xl">Pet Adoption Form</h1>
      <div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl px-0 adoption-form"
        data-v0-t="card"
      >
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="full-name"
              >
               Perspective Pet Parent
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="full-name"
                placeholder="Enter your full name"
                required=""
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="phone-number"
              >
                Contact Number
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="phone-number"
                placeholder="Enter your phone number"
                type="tel"
                required=""
                size="10"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="address"
              >
                Address
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="address"
                placeholder="Enter your address"
                required=""
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="pincode"
              >
                Pincode
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="pincode"
                placeholder="Enter your pincode"
                required=""
                size="6"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="state"
              >
                State
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="state"
                placeholder="Enter your state"
                list="states"
                required=""
              />
              <datalist id="states">
                <option value="Delhi"></option>
                <option value="Haryana"></option>
                <option value="Jammu And Kashmir"></option>
                <option value="Punjab"></option>
                <option value="Uttarakhand"></option>
              </datalist>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="city"
              >
                City
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="city"
                placeholder="Enter your city"
                list="cities"
                required=""
              />
              <datalist id="cities">
                <option value="Amritsar"></option>
                <option value="Dehradun"></option>
                <option value="New Delhi"></option>
                <option value="Gurugram"></option>
                <option value="Shrinagar"></option>
              </datalist>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Email ID
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="email"
                placeholder="Enter your email"
                required=""
                type="email"
              />
            </div>
            
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="aadhar"
              >
                Name of Pet You Wish to Adopt
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="aadhar"
                placeholder="Name of Pet You Wish to Adopt "
                required=""
              />
            </div>
            
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for=""
              >
                Are there children in the home? (If yes, fill)
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id=""
                placeholder=""
                required=""
                type="text"
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for=""
              >
                Will you crate your pet?*
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id=""
                placeholder=""
                required=""
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for=""
              >
                How many hours per day would the pet be alone?*
              </label>
             <textarea cols="34" rows="2"></textarea>
            </div>
            

            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for=""
              >
                If you have to leave town, emergently or planned, where would your pet stay?
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id=""
                placeholder=""
                required=""
                type="text"
              />
            </div>

          </div>
          <ul className="list-disc">
                <li >
                By clicking the submit button, I agree to go adoption process, will undergo a homecheck, and interview. 
                </li>
                <li>
By clicking the submit button, I understand my references will be checked including veterinary and personal. 
                </li>
                <li>
By clicking the submit button, I understand there is an adoption donation associated with adoption of a pet and that it is tax deductible according to IRS 501(c)3 guidelines.  I understand this donation will ensure the organization is equipped to rescue another homeless pet. 
                </li>
                <li>
By clicking the submit button, I understand there is no "cooling off" period, and that if I no longer want or can no longer care for my adopted pet, I agree to notify Rescue Center. BY EMAIL and provide a 14 day period to allow Rescue Center to make arrangents for my pet to be taken back into rescue. 
                </li>
                <li>
By clicking the submit button, I agree to indemnify and hold harmless the rescue center against any losses, lawsuits, claims, injury, damages incurred by me or to any persons or property by my adopted pet, once adoption has been completed.  
                </li>
                <li>
By clicking the submit button, I understand that Rescue Center will disclose any of the pet's health or behavior issues known by the above named rescue group before adoption is completed. 
                </li>
                <li>
By clicking the submit button, I understand that if I no longer want my pet, or am no longer able to care for my adopted pet, I will be directed to surrender my pet to Rescue Center and provide transport to where Rescue Center deems appropriate.
                </li>
                <li>
By clicking the submit button, I verify all of the above information is true and accurate.  
                </li>
            </ul>
        
      <button class="bg-green-500 text-white text-2l font-medium px-4 py-2 rounded shadow loginbutton register_button" >SUBMIT ADOPTION FORM
       </button>
        </div>
      </div>
    </div>
    </>
  )
}

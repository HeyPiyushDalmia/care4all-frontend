import React from "react";
import signup_img1 from '../assets/img/signup_img1.jpg'
export default function Ngo_signup() {
  return (
    <div>
      <body className="adopt_signup_img" style={{ backgroundImage:`url(${signup_img1})` }} >
      {/* <img src={adopt_signup_img}/> */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl px-0 adopt_signup_main_div"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6 border-b adopt_signup_head">
          <h3 className="font-semibold whitespace-nowrap tracking-tight text-3xl">
            NGO Registration
          </h3>

        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="full-name"
              >
                NGO Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                Niti Ayog Registeration Number
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="aadhar"
                placeholder="Enter NGO registration number given by Niti Ayog "
                required=""
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                placeholder="Enter your password"
                required=""
                type="password"
              />
            </div>
          </div>
        

      <button class="bg-green-500 text-white text-2l font-medium px-4 py-2 rounded shadow loginbutton register_button" >REGISTER
       </button>
        </div>
      </div>
      </body>
    </div>
  );
}

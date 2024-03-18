import React from "react";
import image from './../assets/img/loginpageimage.jpg'
export default function Adopt_signup() {
  return (
    <div>
      <body className="adopt_body" style={{ backgroundImage:`url(${image})` }}>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl px-0 adopt_main_div" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6 border-b adopt_signup_head">
          <h3 className="font-semibold whitespace-nowrap tracking-tight text-3xl">
            Adopter Registration
          </h3>

        </div>

        <form>

        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="signup_label peer-disabled:opacity-70" for="full-name">Full Name</label>
              <input className="signup_input border-input bg-background ring-offset-background   placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                id="full-name"
                placeholder="Enter your full name"
                required />
            </div>
            <div className="space-y-2">
              <label className="signup_label peer-disabled:opacity-70" for="phone-number">Contact Number</label>
              <input className="signup_input border-input bg-background ring-offset-background   placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                id="phone-number"
                placeholder="Enter your phone number"
                type="tel"
                required />
            </div>
            <div className="space-y-2">
              <label className="signup_label peer-disabled:opacity-70" for="address">Address</label>
              <input className="signup_input border-input bg-background ring-offset-background   placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                id="address"
                placeholder="Enter your address"
                required />
            </div>
            <div className="space-y-2">
              <label className="signup_label peer-disabled:opacity-70" for="pincode" >Pincode</label>
              <input className="signup_input border-input bg-background ring-offset-background   placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                id="pincode"
                placeholder="Enter your pincode"
                required />
            </div>
            <div className="space-y-2">
              <label className="signup_label peer-disabled:opacity-70" for="state" >State</label>
              <input className="signup_input border-input bg-background ring-offset-background   placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                id="state"
                placeholder="Enter your state"
                list="states"
                required />
              <datalist id="states">
                <option value=""></option>
                <option value="Bihar"></option>
                <option value="Delhi"></option>
                <option value="Haryana"></option>
                <option value="Himachal Pradesh"></option>
                <option value="Jammu And Kashmir"></option>
                <option value="Maharashtra"></option>
                <option value="Punjab"></option>
                <option value="Rajasthan"></option>
                <option value="Uttarakhand"></option>
                <option value="Uttar Pradesh"></option>
              </datalist>
            </div>
            <div className="space-y-2">
              <label className="signup_label peer-disabled:opacity-70" for="city" >City</label>
              <input className="signup_input border-input bg-background ring-offset-background   placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                id="city"
                placeholder="Enter your city"
                list="cities"
                required />
              <datalist id="cities">
                <option value="Amritsar"></option>
                <option value="Chandigarh"></option>
                <option value="New Delhi"></option>
              </datalist>
            </div>
            <div className="space-y-2">
              <label className="signup_label peer-disabled:opacity-70" for="email" >Email ID</label>
              <input className="signup_input border-input bg-background ring-offset-background   placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                id="email"
                placeholder="Enter your email"
                required=""
                type="email" />
            </div>
            <div className="space-y-2">
              <label className="signup_label peer-disabled:opacity-70" for="dob" >Date of Birth</label>
              <input className="signup_input border-input bg-background ring-offset-background   placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                id="dob"
                required
                type="date" />
            </div>
            <div className="space-y-2">
              <label className="signup_label peer-disabled:opacity-70" for="aadhar" >Aadhar Card</label>
              <input className="signup_input border-input bg-background ring-offset-background   placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                id="aadhar"
                placeholder="Enter your Aadhar card number"
                required />
            </div>
            <div className="space-y-2">
              <label className="signup_label peer-disabled:opacity-70" for="password" >Password</label>
              <input className="signup_input border-input bg-background ring-offset-background   placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                id="password"
                placeholder="Enter your password"
                required
                type="password" />
            </div>
          </div>
          {/* <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            type="submit"
          >
            Submit
          </button> */}

      <button class="bg-green-500 text-white text-2l font-medium px-4 py-2 rounded shadow loginbutton register_button" >REGISTER
       </button>
      
        </div>
      </form>
      </div>
      </body>
    </div>
  );
}

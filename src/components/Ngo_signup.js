import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signup_img1 from "../assets/img/signup_img1.jpg";
const Ngo_signup = () => {
  const navigate = useNavigate();

  const [agency, setUser] = useState({
    name: "",
    email: "",
    location: "",
    register_no: "",
    contact: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(agency);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...agency, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, contact, location, password, email, register_no } = agency;
    const res = await fetch("http://localhost:8000/api/adoptionAgencies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        contact,
        location,
        email,
        register_no,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registertation");
    } else {
      window.alert("Successful Registration");
      console.log("Successful Registertation");
      navigate("/Ngo_login");
    }
  };

  return (
    <div>
      <body
        className="adopt_signup_img"
        style={{ backgroundImage: `url(${signup_img1})` }}
      >
        {/* <img src={adopt_signup_img}/> */}
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl px-0 adopt_signup_main_div"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6 border-b adopt_signup_head">
            <h3 className="font-semibold whitespace-nowrap tracking-tight text-3xl">
              NGO Registration
            </h3>
          </div>
          <form method="POST">
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="name"
                  >
                    NGO Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    id="name"
                    name="name"
                    value={agency.name}
                    onChange={handleInputs}
                    placeholder="Enter your full name"
                    required=""
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="contact"
                  >
                    Contact Number
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    id="contact"
                    name="contact"
                    value={agency.contact}
                    onChange={handleInputs}
                    placeholder="Enter your phone number"
                    type="number"
                    required=""
                    size="10"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="location"
                  >
                    Address
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    id="location"
                    type="text"
                    name="location"
                    value={agency.location}
                    onChange={handleInputs}
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
                    type="number"
                    name="pincode"
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
                    type="text"
                    name="state"
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
                    type="text"
                    name="city"
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
                    name="email"
                    value={agency.email}
                    onChange={handleInputs}
                    placeholder="Enter your email"
                    required=""
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="register_no"
                  >
                    Niti Ayog Registeration Number
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    id="register_no"
                    type="number"
                    name="register_no"
                    value={agency.register_no}
                    onChange={handleInputs}
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
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    id="password"
                    name="password"
                    value={agency.password}
                    onChange={handleInputs}
                    placeholder="Enter your password"
                    required=""
                    type="password"
                  />
                </div>
              </div>

              <button
                class="bg-green-500 text-white text-2l font-medium px-4 py-2 rounded shadow loginbutton register_button"
                onClick={PostData}
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </body>
    </div>
  );
};
export default Ngo_signup;

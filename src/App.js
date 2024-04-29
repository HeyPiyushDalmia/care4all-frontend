// import './App.css'
import React, { useEffect, useState } from "react";
import Index from "./components/index";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Adopt_signup from "./components/Adopt_signup";
import Ngo_signup from "./components/Ngo_signup";
import Adopter_login from "./components/Adopter_login";
import Ngo_login from "./components/Ngo_login";
import Dashboard from "./components/dashboard";
import Adopt from "./components/adopt";
import Elearning from "./components/elearning";
import Contact from "./components/Contact";
import Ngo_profile from "./components/Ngo_profile";
import Ngo_menu from "./components/Ngo_menu";
import Adopter_menu from "./components/Adopter_menu";
import Ngo_account from "./components/Ngo_account";
import Adoptionform from "./components/Adoptionform";
import Adopter_dashboard from "./components/Adopter_dashboard";
import Add_pet from "./components/Add_pet";
import Adopter_account from "./components/Adopter_account";

import "./../src/assets/css/style.css";

import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import Add_branch from "./components/Add_branch";

function App() {
  const [token, setToken] = useState(false);
  const [token1, setToken1] = useState(false);
  useEffect(() => {
    setToken(token);
    setToken1(token1);
    console.log(token);
    console.log(token1);
  }, [token,token1]);

  return (
    <>

      <BrowserRouter>
      <Header token={token} token1={token1}/>
        <Switch>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/adopt_signup" element={<Adopt_signup />} />
          <Route path="/Ngo_signup" element={<Ngo_signup />} />
          <Route path="/Adopter_login" element={<Adopter_login token1={token1} setToken1={setToken1}/>} />
          <Route path="/Ngo_login" element={<Ngo_login token={token} setToken={setToken} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/elearning" element={<Elearning />} />
          <Route path="/Ngo_profile" element={<Ngo_profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Ngo_menu />} />
          <Route path="/Adopt_menu" element={<Adopter_menu />} />
          <Route path="Ngo_account" element={<Ngo_account />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/Adoptionform" element={<Adoptionform />} />
          <Route path="/Adopter_dashboard" element={<Adopter_dashboard />} />
          <Route path="/Ngo_account" element={<Ngo_account />} />
          <Route path="/Add_pet" element={<Add_pet />} />
          <Route path="/Add_branch" element={<Add_branch />} />
          <Route path="/Adopter_account" element={<Adopter_account />} />

        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

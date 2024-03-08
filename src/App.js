// import './App.css'
import Index from "./components/Index";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Adopt_signup from "./components/Adopt_signup";
import Ngo_signup from "./components/Ngo_signup";
import Adopter_login from "./components/Adopter_login";
import Ngo_login from "./components/Ngo_login";

import "./../src/assets/css/style.css";
import "swiper/css";

import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/dopt_signup" element={<Adopt_signup />} />
          <Route path="/Ngo_signup" element={<Ngo_signup />} />
          <Route path="/Adopter_login" element={<Adopter_login />} />
          <Route path="/Ngo_login" element={<Ngo_login />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

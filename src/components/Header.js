import React,{useState} from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link,NavLink} from "react-router-dom";

export default function Header({ token , token1}) {
  const [showMenu, setShowMenu] = useState(false);
  return (

<header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-white">
      <Link
        to="/"
        className="flex items-center h-10 px-10  rounded-tl-full rounded-br-full font-bold uppercase italic text-black hover:opacity-90"
      >
         {/* <img src={logo} className="mr-3 h-6 md:h-9" alt="Website Logo" /> */}
         <h1>CARE4ALL</h1>
      </Link>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <Link to="/" className="hover:text-gray-500">
          HOME
        </Link>
        <Link to="/about" className="hover:text-gray-500">
          ABOUT
        </Link>
        
  
        <Link to="/adopt" className="hover:text-gray-500">
          ADOPT
        </Link>
        <Link to="/elearning" className="hover:text-gray-500">
          E-LEARNING
        </Link>
        <Link to="/contact" className="hover:text-gray-500">
          CONTACT
        </Link>
        {token === "true" ? (
  <Link to="/Ngo_account">
    <button className="navbar_button">NGO</button>
  </Link>
) : token1 === "true" ? (
  <Link to="/Adopter_dashboard">
    <button className="navbar_button">USER</button>
  </Link>
) : (
  <Link to="/Adopter_login">
    <button className="navbar_button">LOGIN</button>
  </Link>
)}

      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <Link to="/" className="hover:text-gray-500">
              HOME
            </Link>
            <Link to="/about" className="hover:text-gray-500">
              ABOUT
            </Link>
         
            <Link to="/adopt" className="hover:text-gray-500">
              ADOPT
            </Link>
            <Link to="/elearning" className="hover:text-gray-500">
              E-LEARNING
            </Link>
            <Link to="/contact" className="hover:text-gray-500">
              CONTACT
            </Link>
            {token === "true" ? (
  <Link to="/Ngo_account">
    <button className="navbar_button">NGO</button>
  </Link>
) : token1 === "true" ? (
  <Link to="/Adopter_dashboard">
    <button className="navbar_button">USER</button>
  </Link>
) : (
  <Link to="/Adopter_login">
    <button className="navbar_button">LOGIN</button>
  </Link>
)}
            
          </>
        )}
      </nav>
    </header>

  );
}

import { useState } from "react";
import "./Navbar.css";
import logo from "../../../../photo/logo.svg";
import { useNavigate } from "react-router-dom";
import arrowLogo from "../../../../photo/arrow-up-right.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navgat = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="headerss">
      <img src={logo} alt="logo" className="logoss" />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/Aboutus">About Us</a>
          </li>
          <li>
            <a href="/ReferralContestPage">Referral Contest</a>
          </li>
          <li>
            <a href="/Membershib">Membership</a>
          </li>
          <li>
            <a href="/offers">offers</a>
            </li>
            <li>
            <a href="/Faq">Faq</a>
          </li>
         
        </ul>
      </nav>
      <div className="auth-buttons">
        <button onClick={() => navgat("/Login")}>
          <p className="flex align-items-center ">
            Join us{" "}
            <img className="text-white" src={arrowLogo} alt="" style={{ width: "24px", height: "24px", color:"white"}} />
          </p>{" "}
        </button>
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default Navbar;

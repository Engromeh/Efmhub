import { useState } from "react";
import './Navbar.css'
import logo from '../../../../photo/logo.svg'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
const navgat = useNavigate();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
      <header className="headerss">
            <img src={logo} alt="logo" className="logoss" />
              <button className="hamburger" onClick={toggleMenu}>☰</button>
              <nav className={`nav ${isOpen ? 'open' : ''}`}>
                  <ul>
                      <li><a href="#home">Home</a></li>
                      <li><a href="#about">About Us</a></li>
                      <li><a href="/ReferralContestPage">Referral Contest</a></li>
                      <li><a href="#membership">Membership</a></li>
                      <li><a href="#pricing">Pricing</a></li>
                  </ul>
              </nav>
              <div className="auth-buttons">
                  <button onClick={()=>navgat('/Login')}>Join us</button>
                  <button>Sign In</button>
              </div>
          </header>
  );
}

export default Navbar

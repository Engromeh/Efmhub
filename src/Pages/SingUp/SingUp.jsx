import logoooss from '../../../photo/logo2.svg'
import Telegram from '../../../photo/telegram.png'
import LinkedIn from '../../../photo/linkedin-logo.png'
import face from '../../../photo/facebook.png'
import './SingUp.css'
import singup from '../../../photo/Singup.svg'
import { useState } from 'react'

const SingUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <>
       <div className="login-container">
      <div className="login-left">
      
        
        
        <p>Welcome back! Please login to your account.</p>
       
        
        <div className="signup-form-container">
            <div className="input-group">
                <input type="text" placeholder="FirstName" />
                <input type="text" placeholder="LastName" />
            </div>
            <div className="input-group">
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Telegram username" />
            </div>
            <div className="input-group">
                <div className="phone-input">
                    {/* <img src={flagIcon} alt="Country Flag" className="flag-icon" /> */}
                    <input type="text" placeholder="Phone" />
                    <span className="dropdown-icon">▼</span>
                </div>
            </div>
            <input type="email" placeholder="Email" className="full-width-input" />
            <div className="password-group">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                    {showPassword ? "👁️" : "🙈"}
                </span>
            </div>
            <div className="password-group">
                <input type={showConfirmPassword ? "text" : "password"} placeholder="Password Confirmation" />
                <span className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? "👁️" : "🙈"}
                </span>
            </div>
            <input type="text" placeholder="Referral Code" className="full-width-input" />
            <div className="button-group">
                <button className="signup-btn">Sign Up</button>
                <button className="login-btn">Login</button>
            </div>
        </div>
        
        <div className="social-icons">

   <img src={Telegram} alt='face' className="icon" />
                    <img src={face} alt='face' className="icon" />
                    <img src={LinkedIn} alt='face' className="icon" />
          <span>@EFM Hub</span>
        </div>
      </div>

      <div className="login-right">

      <nav className="navbar">
      <img src={logoooss} alt="EFM Logo" className="logo-login" />

        <ul className="navbar-links">


          <li><a href="#">Home</a></li>
          <li><a href="#">AboutUs</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </nav>
        <img src={singup} alt="Referral" className="login-image" />
      </div>
    </div>
    </>
  )
}

export default SingUp

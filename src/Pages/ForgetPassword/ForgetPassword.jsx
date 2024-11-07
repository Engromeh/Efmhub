import './ForgetPassword.css'
import forget from '../../../photo/Forget.svg'
import logooos from '../../../photo/logo2.svg'
import Telegram from '../../../photo/telegram.png'
import LinkedIn from '../../../photo/linkedin-logo.png'
import face from '../../../photo/facebook.png'
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
    const navgate =useNavigate();
  return (
    <>
         
         <div className="login-container">
      <div className="login-left">
        <p>
          <span style={{ fontWeight: 'bold' }}>EFM</span> is the strongest company for making money online, offering unparalleled features and strong rewards that make it the best choice for everyone.
        </p>
        <p>Welcome back! Please login to your account.</p>
        <br/>
        
        <form className="login-form">
          <input type="email" placeholder="Email" />
          
        
          <button type="submit" className="login-btn">ForgetPassword</button>
          <button type="button" className="signup-btn" onClick={()=>navgate('/SingUp')}>Sign Up</button>
        </form>
        
        <div className="social-icons">
          <img src={Telegram} alt="Telegram Icon" className="icon" />
          <img src={face} alt="Facebook Icon" className="icon" />
          <img src={LinkedIn} alt="LinkedIn Icon" className="icon" />
          <span style={{textAlign:'center'}}>@EFM Hub</span>
        </div>
      </div>
      
      <div className="login-right">
        <nav className="navbar">
          <img src={logooos} alt="EFM Logo" className="logo-login" />
          <ul className="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </nav>
        <img src={forget} alt="Referral" className="login-image" />
      </div>
    </div>


    
    </>
  )
}

export default ForgetPassword;

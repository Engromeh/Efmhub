import './Login.css';
import photo from '../../../photo/login.svg'; 
import logooo from '../../../photo/logo2.svg';
import Telegram from '../../../photo/telegram.png';
import face from '../../../photo/facebook.png';
import LinkedIn from '../../../photo/linkedin-logo.png'
import { useNavigate } from 'react-router-dom';

function Login() {
   const navgate =useNavigate();
  return (
    <div className="login-container">
      <div className="login-left">
      
        
        <p>
         <span style={{fontStyle:'bold'}}>EFM</span> is the strongest company for making money online, offering unparalleled features and strong rewards that make it the best choice for everyone.
        </p>
        <p>Welcome back! Please login to your account.</p>
        <br/>
        
        <form className="login-form">
          <input type="email" placeholder="Email" />
          <div className="password-container">
            <input type="password" placeholder="Password" />
          </div>
          <div className="options">
            <label>
              <input type="checkbox"  className='checkbox-login'/> Remember Me
            </label>
            <a href="/ForgetPassword">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <button type="button" className="signup-btn" onClick={()=>navgate('/SingUp')}>Sign Up</button>
        </form>
        
        <div className="social-icons">

   <img src={Telegram} alt='face' className="icon" />
                    <img src={face} alt='face' className="icon" />
                    <img src={LinkedIn} alt='face' className="icon" />
          <span>@EFM Hub</span>
        </div>
      </div>

      <div className="login-right">

      <nav className="navbar">
      <img src={logooo} alt="EFM Logo" className="logo-login" />

        <ul className="navbar-links">


          <li><a href="#">Home</a></li>
          <li><a href="#">AboutUs</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </nav>
        <img src={photo} alt="Referral" className="login-image" />
      </div>
    </div>
  );
}

export default Login;

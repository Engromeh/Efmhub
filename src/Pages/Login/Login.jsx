import './Login.css';
import photo from '../../../photo/login.svg'; 
import logooo from '../../../photo/logo2.svg'
function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
      
        
        <p>
         <span style={{fontStyle:'bold'}}>EFM</span> is the strongest company for making money online, offering unparalleled features and strong rewards that make it the best choice for everyone.
        </p>
        <p>Welcome back! Please login to your account.</p>
        <br/>
        <br/>
        <form className="login-form">
          <input type="email" placeholder="Email" />
          <div className="password-container">
            <input type="password" placeholder="Password" />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <button type="button" className="signup-btn">Sign Up</button>
        </form>
        
        <div className="social-icons">
          <a href="#"><i className="icon-telegram">T</i></a>
          <a href="#"><i className="icon-facebook">F</i></a>
          <a href="#"><i className="icon-linkedin">L</i></a>
          <span>@EFM Hub</span>
        </div>
      </div>

      <div className="login-right">

      <nav className="navbar">
      <img src={logooo} alt="EFM Logo" className="logo-login" />

        <ul className="navbar-links">


          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </nav>
        <img src={photo} alt="Referral" className="login-image" />
      </div>
    </div>
  );
}

export default Login;

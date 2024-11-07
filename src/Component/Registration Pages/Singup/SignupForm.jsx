import './SignupForm.css'
function SignupForm() {
  return (
    <div className="signup-form">
      <h2>Welcome! Please Sign up to Continue.</h2>
      <form>
        <div className="form-row">
          <input type="text" placeholder="FirstName" />
          <input type="text" placeholder="LastName" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Telegram username" />
        </div>
        <input type="text" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Password Confirmation" />
        <input type="text" placeholder="Referral Code" />
        <div className="form-buttons">
          <button className="signup-button" type="submit">Sign Up</button>
          <button className="login-button" type="button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;

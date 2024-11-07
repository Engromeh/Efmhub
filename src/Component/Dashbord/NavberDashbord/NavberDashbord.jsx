import './NavberDashbord.css';
import { FaSun, FaMoon, FaEnvelope, FaBell } from 'react-icons/fa';
import logooos from '../../../../photo/dashpord.svg';

const NavberDashboard = () => {
  return (
    <div className="navber-dashboard">
      <div className="navber-left">
        <img src={logooos} alt="EFM Logo" className="navber-logo" />
        <h2 className="navber-title">Dashboard User EFM</h2>
      </div>
      <div className="navber-right">
        <FaSun className="navber-icon" />
        <FaMoon className="navber-icon" />
        <FaEnvelope className="navber-icon" />
        <FaBell className="navber-icon" />
        <div className="profile-container">
          <span className="profile-name">Hedra Naguib</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </div>
  );
};

export default NavberDashboard;

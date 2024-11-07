import { motion } from 'framer-motion';
import './Sidebar.css';
import { useState } from 'react';
import logosss from '../../../../photo/dashpord.svg';
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "✖" : "☰"}
      </button>

      <motion.div
        className="sidebar"
        animate={{ width: isOpen ? 250 : 0 }}
        initial={false}
        transition={{ duration: 0.3 }}
      >
        {isOpen && (
          <div className="sidebar-content">
            <div className="logo-container">
              <img src={logosss} alt="Logo" className="logo" />
            </div>
            <div className="menu-item active">📊 Dashboard</div>
            <div className="menu-section">Global</div>
            <div className="menu-item">⬆️ Upgrade Account</div>
            <div className="menu-item">📝 New Order</div>
            <div className="menu-item">💵 Add Funds</div>
            <div className="menu-item">💸 Withdraw</div>
            <div className="menu-item">💱 Currencies</div>
            <div className="menu-section">Settings</div>
            <div className="menu-item">🗂 Tasks</div>
            <div className="menu-item">📦 Orders</div>
            <div className="menu-item">⚙️ Personal Settings</div>
            <div className="menu-item">🎫 Create Ticket</div>
            <div className="menu-item">🧾 Tickets</div>
            <div className="menu-item">🔐 Factor Auth</div>
            <div className="menu-section">Referrals</div>
            <div className="menu-item">🔗 Direct Referrals</div>
            <div className="menu-item">📜 History</div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default SideBar;

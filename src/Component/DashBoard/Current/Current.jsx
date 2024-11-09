import React from 'react';
import './Current.css';

const Current = () => {
  return (
    <div className="Current-container">
      <div className="Current-header">
        <h2>Upgrade Account</h2>
        <img src="/logo.png" alt="EFM Logo" className="Current-logo" />
      </div>

      <div className="Current-balance-section">
        <p className="Current-balance-label">CurrentBalance</p>
        <p className="Current-balance-amount">$155,339 EGP</p>
      </div>

      <div className="Current-section">
        <h3>Select Payment</h3>
        <div className="Current-payment-option">
          <i className="icon">💳</i>
          <span>Upgrade Using Balance</span>
        </div>
      </div>

      <div className="Current-section">
        <h3>Plan</h3>
        <div className="Current-plan-select">
          Premium - 1250 EGP Lifetime
          <i className="Current-arrow">▼</i>
        </div>
      </div>

      <div className="Current-buttons">
        <button className="Current-upgrade-btn">Upgraded</button>
        <button className="Current-cancel-btn">Cancel</button>
      </div>

      <div className="Current-payment-icons">
        <img src="/orange-money.png" alt="Orange Money" />
        <img src="/we-pay.png" alt="We Pay" />
        <img src="/instapay.png" alt="Instapay" />
        <img src="/vodafone.png" alt="Vodafone" />
        <img src="/banque-misr.png" alt="Banque Misr" />
      </div>
    </div>
  );
};

export default Current;

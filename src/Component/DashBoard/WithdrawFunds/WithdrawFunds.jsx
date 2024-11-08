import React, { useState } from 'react';
import './WithdrawFunds.css';
// import headerLogo from './path-to-header-logo.png';
// import paymentLogo1 from './path-to-payment-logo1.png';
// import paymentLogo2 from './path-to-payment-logo2.png';
// import paymentLogo3 from './path-to-payment-logo3.png';

const WithdrawFunds = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    

    <div className="withdraw-container">
      {/* الشعار العلوي وزر إضافة الحساب */}
      <div className="header-section">
        <button className="add-withdraw-button" onClick={openModal}>
          Add Withdraw Account
        </button>
      </div>

      {/* نموذج السحب */}
      <h2 className="form-title">Withdraw Funds</h2>
      <div className="withdraw-form-container">
        <form className="withdraw-form">
        <img src="{headerLogo}" alt="Header Logo" className="header-logo" />

          {/* الحقل الأول */}
          <label className="form-label">Method</label>
          <select className="form-input">
            <option>Vodafone Cash</option>
            <option>Bank Transfer</option>
            <option>PayPal</option>
          </select>

          {/* الحقل الثاني */}
          <label className="form-label">Amount</label>
          <div className="input-with-unit">
            <input type="text" className="form-input" placeholder="0" />
            <span className="input-unit">EGP</span>
          </div>

          {/* الحقل الثالث */}
          <label className="form-label">Total</label>
          <div className="input-with-unit">
            <input type="text" className="form-input" placeholder="0" readOnly />
            <span className="input-unit">EGP</span>
          </div>

          {/* الأزرار */}
          <div className="buttons-container">
            <button className="upgrade-button">Upgrade</button>
            <button className="cancel-button" type="button">Cancel</button>
          </div>
        </form>

        {/* الشعارات السفلية */}
        <div className="payment-logos">
          <img src="{paymentLogo1}" alt="Payment Logo 1" />
          <img src="{paymentLogo2} "alt="Payment Logo 2" />
          <img src="{paymentLogo3}" alt="Payment Logo 3" />
        </div>
      </div>

      {/* المودال */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add Withdraw Account</h3>
            <p>The Selected Method has the following fields:</p>
            <form className="modal-form">
              <label className="modal-label">E-Wallet - Phone No</label>
              <select className="modal-input">
                <option>Upgrade Using Balance</option>
                <option>Bank Transfer</option>
                <option>PayPal</option>
              </select>
              <div className="buttons-container">
                <button className="upgrade-button">Upgrade</button>
                <button className="cancel-button" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default WithdrawFunds;

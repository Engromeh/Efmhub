import React from 'react';
import './Upgreedaccount.css';

const UpgradeAccount = () => {
  return (
    <>
          <h2 className="upgrade-title">Upgrade Account</h2>

    <div className="upgrade-container">

      {/* عرض الرصيد الحالي */}
      <div className="account-balance">
        <div className="balance-info">
          <span className="balance-label">Current Balance</span>
          <span className="balance-amount">$155.339 EG</span>
        </div>
        <img src="/images/balance-icon.png" alt="Balance Icon" className='logo-upgrad'/>
        <div className="balance-date">Date: 09/25</div>
      </div>

      <form className="upgrade-form">
        {/* اختيار وسيلة الدفع */}
        <label className="form-label">Select Payment</label>
        <div className="select-container">
          <select className="form-input">
            <option>Upgrade Using Balance</option>
            <option>Credit Card</option>
            <option>PayPal</option>
          </select>
        </div>

        {/* اختيار الخطة */}
        <label className="form-label">Plan</label>
        <div className="select-container">
          <select className="form-input">
            <option>Premium - 1250 EGP Lifetime</option>
            <option>Standard - 650 EGP Yearly</option>
            <option>Basic - 350 EGP Monthly</option>
          </select>
        </div>

        {/* الأزرار */}
        <div className="buttons-container">
          <button className="upgrade-button">Upgrade</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </form>

      {/* الشعارات */}
      <div className="payment-logos">
        <img src="/images/logo1.png" alt="Logo 1" />
        <img src="/images/logo2.png" alt="Logo 2" />
        <img src="/images/logo3.png" alt="Logo 3" />
      </div>
    </div>
    </>
  );
};

export default UpgradeAccount;

import { useState } from 'react';
import withdrawstyles from './WithdrawFunds.module.css';
// تأكد من وضع المسارات الصحيحة للشعارات في الاستيراد
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
      <div className={withdrawstyles.withdrawContainer}>
        {/* الشعار العلوي وزر إضافة الحساب */}
        <div className={withdrawstyles.headerSection}>
          <button className={withdrawstyles.addWithdrawButton} onClick={openModal}>
            Add Withdraw Account
          </button>
        </div>

        {/* نموذج السحب */}
        <h2 className={withdrawstyles.formTitle}>Withdraw Funds</h2>
        <div className={withdrawstyles.withdrawFormContainer}>
          <form className={withdrawstyles.withdrawForm}>
            <img src="" alt="Header Logo" className={withdrawstyles.headerLogo} />

            {/* الحقل الأول */}
            <label className={withdrawstyles.formLabel}>Method</label>
            <select className={withdrawstyles.formInput}>
              <option>Vodafone Cash</option>
              <option>Bank Transfer</option>
              <option>PayPal</option>
            </select>

            {/* الحقل الثاني */}
            <label className={withdrawstyles.formLabel}>Amount</label>
            <div className={withdrawstyles.inputWithUnit}>
              <input type="text" className={withdrawstyles.formInput} placeholder="0" />
              <span className={withdrawstyles.inputUnit}>EGP</span>
            </div>

            {/* الحقل الثالث */}
            <label className={withdrawstyles.formLabel}>Total</label>
            <div className={withdrawstyles.inputWithUnit}>
              <input type="text" className={withdrawstyles.formInput} placeholder="0" readOnly />
              <span className={withdrawstyles.inputUnit}>EGP</span>
            </div>

            {/* الأزرار */}
            <div className={withdrawstyles.buttonsContainer}>
              <button className={withdrawstyles.upgradeButton}>Upgrade</button>
              <button className={withdrawstyles.cancelButton} type="button">Cancel</button>
            </div>
          </form>

          {/* الشعارات السفلية */}
          <div className={withdrawstyles.paymentLogos}>
            <img src="" alt="Payment Logo 1" />
            <img src="" alt="Payment Logo 2" />
            <img src="" alt="Payment Logo 3" />
          </div>
        </div>

        {/* المودال */}
        {isModalOpen && (
          <div className={withdrawstyles.modalOverlay}>
            <div className={withdrawstyles.modalContent}>
              <h3>Add Withdraw Account</h3>
              <p>The Selected Method has the following fields:</p>
              <form className={withdrawstyles.modalForm}>
                <label className={withdrawstyles.modalLabel}>E-Wallet - Phone No</label>
                <select className={withdrawstyles.modalInput}>
                  <option>Upgrade Using Balance</option>
                  <option>Bank Transfer</option>
                  <option>PayPal</option>
                </select>
                <div className={withdrawstyles.buttonsContainer}>
                  <button className={withdrawstyles.upgradeButton}>Upgrade</button>
                  <button className={withdrawstyles.cancelButton} onClick={closeModal}>Cancel</button>
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

import { useState } from 'react';
import withdrawstyles from './WithdrawFunds.module.css';
import headerLogo from '../../../../photo/logo withedraw.svg';
import etselit from '../../../../photo/etsalit.svg';
import vodefon from '../../../../photo/vodefone.svg';
import bank from '../../../../photo/banx.svg';
import instpay from '../../../../photo/انستباي.svg';
import amountIcon from '../../../../photo/amount.svg';
import totalIcon from '../../../../photo/withdraw.svg'
const WithdrawFunds = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={withdrawstyles.withdrawContainer}>
        <div className={withdrawstyles.headerSection}>

          <button className={withdrawstyles.addWithdrawButton} onClick={openModal}>
            Add Withdraw Account
          </button>
        </div>

        <h2 className={withdrawstyles.formTitle}>Withdraw Funds</h2>
        <div className={withdrawstyles.withdrawFormContainer}>
          <form className={withdrawstyles.withdrawForm}>
            <img src={headerLogo} alt="Header Logo" className={withdrawstyles.headerLogo} />

            <label className={withdrawstyles.formLabel}>Method</label>
            <div className={withdrawstyles.inputWithIcon}>
              <img src={vodefon} alt="Vodafone Icon" className={withdrawstyles.iconInsideInput} />
            <select className={withdrawstyles.formInput}>
              <option>Vodafone Cash</option>
              <option>Bank Transfer</option>
              <option>PayPal</option>
            </select>
</div>
            <label className={withdrawstyles.formLabel}>Amount</label>
            <div className={withdrawstyles.inputWithUnit}>
            <div className={withdrawstyles.inputWithIcon}>
              <img src={amountIcon} alt="Amount Icon" className={withdrawstyles.iconInsideInput} />
              <input type="text" className={withdrawstyles.formInput} placeholder="" />
              <span className={withdrawstyles.inputUnit}>EGP</span>
            </div>
</div>
            <label className={withdrawstyles.formLabel}>Total</label>
            <div className={withdrawstyles.inputWithUnit}>
            <div className={withdrawstyles.inputWithIcon}>
              <img src={totalIcon} alt="Total Icon" className={withdrawstyles.iconInsideInput} />
              <input type="text" className={withdrawstyles.formInput} placeholder="" readOnly />
              <span className={withdrawstyles.inputUnit}>EGP</span>
            </div>
</div>
            <div className={withdrawstyles.buttonsContainer}>
              <button className={withdrawstyles.upgradeButton}>Upgrade</button>
              <button className={withdrawstyles.cancelButton} type="button">Cancel</button>
            </div>
          </form>

          <div className={withdrawstyles.paymentLogos}>
          <img src={etselit} alt="logo" />
          <img src={instpay} alt="logo" />
          <img src={vodefon} alt="logo" />
          <img src={bank} alt="logo" />

          </div>
        </div>

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

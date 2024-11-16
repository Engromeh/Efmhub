import upgredacountstyles from './Upgreedaccount.module.css';
import upgred from '../../../../photo/upgreed.svg'
import orangee from "../../../../photo/orange.svg";
import weeee from "../../../../photo/we pay.svg";
import insta from "../../../../photo/انستباي.svg";
import vode from "../../../../photo/vodefone.svg";
import bankk from "../../../../photo/banx.svg";
import moneychack from '../../../../photo/money-check 1.svg'
const UpgradeAccount = () => {
  
  return (
    <>
      <h2 className={upgredacountstyles.upgradeTitle}>Upgrade Account</h2>

      <div className={upgredacountstyles.upgradeContainer}>
        <div className={upgredacountstyles.accountBalance}>
          <div className={upgredacountstyles.balanceInfo}>
            <span className={upgredacountstyles.balanceLabel}>Current Balance</span>
            <span className={upgredacountstyles.balanceAmount}>$155.339 EG</span>
          </div>
          <img src={upgred} alt="Balance Icon" className={upgredacountstyles.logoUpgrade} />
          <div className={upgredacountstyles.balanceDate}>Date: 09/25</div>
        </div>

        <form className={upgredacountstyles.upgradeForm}>
          <label className={upgredacountstyles.formLabel}>Select Payment</label>
<div className={upgredacountstyles.selectContainer}>
  <div className={upgredacountstyles.selectWrapper}>
    <img
      className={upgredacountstyles.selectIcon}
      src={moneychack} 
      alt="icon"
    />
    <select className={upgredacountstyles.formInput}>
      <option>Upgrade Using Balance</option>
      <option>Credit Card</option>
      <option>PayPal</option>
    </select>
  </div>
</div>

          
       

          <label className={upgredacountstyles.formLabel}>Plan</label>
          <div className={upgredacountstyles.selectContainer}>
            <select className={upgredacountstyles.formInput}>
              <option>Premium - 1250 EGP Lifetime</option>
              <option>Standard - 650 EGP Yearly</option>
              <option>Basic - 350 EGP Monthly</option>
            </select>
          </div>

          {/* الأزرار */}
          <div className={upgredacountstyles.buttonsContainer}>
            <button className={upgredacountstyles.upgradeButton}>Upgrade</button>
            <button className={upgredacountstyles.cancelButton}>Cancel</button>
          </div>
        </form>

        {/* الشعارات */}
        <div className={upgredacountstyles.paymentLogos}>
          <img src={orangee} alt="Logo 1" />
          <img src={weeee} alt="Logo 2" />
          <img src={insta} alt="Logo 3" />
          <img src={vode} alt="Logo 3" />
          <img src={bankk} alt="Logo 3" />

        </div>
      </div>
    </>
  );
};

export default UpgradeAccount;

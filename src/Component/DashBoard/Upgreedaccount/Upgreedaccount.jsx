import upgredacountstyles from './Upgreedaccount.module.css';

const UpgradeAccount = () => {
  return (
    <>
      <h2 className={upgredacountstyles.upgradeTitle}>Upgrade Account</h2>

      <div className={upgredacountstyles.upgradeContainer}>
        {/* عرض الرصيد الحالي */}
        <div className={upgredacountstyles.accountBalance}>
          <div className={upgredacountstyles.balanceInfo}>
            <span className={upgredacountstyles.balanceLabel}>Current Balance</span>
            <span className={upgredacountstyles.balanceAmount}>$155.339 EG</span>
          </div>
          <img src="/images/balance-icon.png" alt="Balance Icon" className={upgredacountstyles.logoUpgrade} />
          <div className={upgredacountstyles.balanceDate}>Date: 09/25</div>
        </div>

        <form className={upgredacountstyles.upgradeForm}>
          {/* اختيار وسيلة الدفع */}
          <label className={upgredacountstyles.formLabel}>Select Payment</label>
          <div className={upgredacountstyles.selectContainer}>
            <select className={upgredacountstyles.formInput}>
              <option>Upgrade Using Balance</option>
              <option>Credit Card</option>
              <option>PayPal</option>
            </select>
          </div>

          {/* اختيار الخطة */}
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
          <img src="/images/logo1.png" alt="Logo 1" />
          <img src="/images/logo2.png" alt="Logo 2" />
          <img src="/images/logo3.png" alt="Logo 3" />
        </div>
      </div>
    </>
  );
};

export default UpgradeAccount;

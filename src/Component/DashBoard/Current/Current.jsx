import curentstyles from './Current.module.css';

const Current = () => {
  return (
    <div className={curentstyles.currentContainer}>
      <div className={curentstyles.currentHeader}>
        <h2>Current</h2>
        <img src="/logo.png" alt="EFM Logo" className={curentstyles.currentLogo} />
      </div>

      <div className={curentstyles.currentBalanceSection}>
        <p className={curentstyles.currentBalanceLabel}>Current Balance</p>
        <p className={curentstyles.currentBalanceAmount}>$155,339 EGP</p>
      </div>

      <div className={curentstyles.currentSection}>
        <h3>Select Payment</h3>
        <div className={curentstyles.currentPaymentOption}>
          <i className={curentstyles.icon}>💳</i>
          <span>Upgrade Using Balance</span>
        </div>
      </div>

      <div className={curentstyles.currentSection}>
        <h3>Plan</h3>
        <div className={curentstyles.currentPlanSelect}>
          Premium - 1250 EGP Lifetime
          <i className={curentstyles.currentArrow}>▼</i>
        </div>
      </div>

      <div className={curentstyles.currentButtons}>
        <button className={curentstyles.currentUpgradeBtn}>Upgrade</button>
        <button className={curentstyles.currentCancelBtn}>Cancel</button>
      </div>

      <div className={curentstyles.currentPaymentIcons}>
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

import characterImage from '../../../../photo/photo4.svg';

const Membership = () => {
  return (
    <>
      <div className="membership-premium-membership-container">
        <h2>Membership benefits</h2>
        <div className="membership-premium-section-dividers"></div>

        <p className="membership-premium-intro-text">
          On the occasion of our companys opening, we are pleased to offer you very strong deals and discounts. Don't miss the opportunity!
        </p>
        <div className="membership-premium-benefits-grid">
          <div className="membership-premium-left-side">
            <div className="membership-premium-benefit-card">
              <h3>1- A lifelong source of income</h3>
              <p>
                EFM Company offers you a great opportunity to earn money by simply completing simple tasks, and the more tasks you complete, the more money you earn.
              </p>
            </div>
            <div className="membership-premium-benefit-card">
              <h3>2- Ongoing contests and prizes</h3>
              <p>We have ongoing competitions and events, so be ready to be the winner and achieve your dreams.</p>
            </div>
            <div className="membership-premium-benefit-card">
              <h3>3- Membership duration</h3>
              <p>
                The EFM company offers you a great opportunity to earn money just by performing simple tasks, and the more tasks you complete, the more money you earn.
              </p>
            </div>
          </div>

          <div className="membership-premium-center-card">
            <h3>
              Marketing commission <span className="membership-icon">❤</span>
            </h3>
            <p>
              <strong>Direct commission from friends</strong> Invite your friend and complete a successful marketing process, and you will receive 2.5% of the subscription value. And this is <em>only for one time</em>.
            </p>

            <p>
              <strong>Commission from companies</strong> Complete a successful marketing process for companies or clients, and you will receive 2.5% of the contract value with this company. <em>This offer continues if the client renews their contract with us.</em>
            </p>

            <p>
              <strong>But thats not all!</strong> You will also earn from the investment portfolio of ENG MONEY, which operates in the field of global financial markets investment for a lifetime.
            </p>
          </div>

          <div className="membership-premium-right-side">
            <div className="membership-premium-character-image">
              <img src={characterImage} alt="Character Image" />
            </div>
            <div className="membership-premium-benefit-card membership-premium-last-card">
              <h3>4- Subscription price</h3>
              <p>
                Only $50 for a lifetime, which means you will enjoy all these benefits forever, and this amount will be added to the investment portfolio, meaning you will win in all cases.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="membership-premium-section-divider"></div>
    </>
  );
};

export default Membership;

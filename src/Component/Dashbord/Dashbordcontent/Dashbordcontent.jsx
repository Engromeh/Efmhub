import './Dashbordcontent.css'

const Dashbordcontent= () => {
    return (
        <div className="dashboard">
          <BalanceCard />
          <AdvertiserStatsCard />
          <ReferralStatsCard />
          <AdvertisementClicksCard />
          <GeneralStatsCard />
          <DailyTasksCard />
          <VideoAdsStatsCard />
        </div>
      );
    };
    
    const BalanceCard = () => (
      <div className="card balance-card">
        <h3>Balance</h3>
        <p className="balance-amount">$155.339 EG</p>
        <p>ID 5646546546</p>
        <p>09/25</p>
      </div>
    );
    
    const AdvertiserStatsCard = () => (
      <div className="card stats-card">
        <h3>Advertiser Stats</h3>
        <p>Ad Credits: 0</p>
        <p>Video Ads Credits: 0</p>
        <p>Banner Credits: 0</p>
        <p>Text Ad Credits: 0</p>
        <p>Link Ad Credits: 0</p>
      </div>
    );
    
    const ReferralStatsCard = () => (
      <div className="card stats-card">
        <h3>Referral Stats</h3>
        <p>Direct Referrals: 0</p>
        <p>Earned so far: 0 EGP</p>
      </div>
    );
    
    const AdvertisementClicksCard = () => (
      <div className="card stats-card">
        <h3>Your Advertisement Clicks</h3>
        <p>Your clicks: 0</p>
      </div>
    );
    
    const GeneralStatsCard = () => (
      <div className="card general-stats-card">
        <h3>General Stats</h3>
        <div className="general-stats">
          <div>
            <p>Balance</p>
            <p>$1555</p>
          </div>
          <div>
            <p>Purchase Balance</p>
            <p>$0</p>
          </div>
          <div>
            <p>Payments Received</p>
            <p>$400</p>
          </div>
          <div>
            <p>Pending Withdrawals</p>
            <p>$0</p>
          </div>
        </div>
      </div>
    );
    
    const DailyTasksCard = () => (
      <div className="card tasks-card">
        <h3>Daily Tasks</h3>
        <p>Show Tasks: 3/6</p>
        <div className="task-status">
          <span>✔️ Completed</span>
          <span>❌ Not Completed</span>
        </div>
      </div>
    );
    
    const VideoAdsStatsCard = () => (
      <div className="card stats-card">
        <h3>Video Ads Stats</h3>
        <p>Total plays: 0</p>
        <p>Earned: 0 EGP</p>
      </div>
    );
  

export default Dashbordcontent;

import { useState } from 'react';
import './ReferralContestPage.css';
import photo from '../../../photo/refelr.svg';
import trophy from '../../../photo/trophy-star 1.svg';
function ReferralContestPage() {
  const data = {
    'Last 24 hours': [
      { rank: 1, name: "mohamed khatab", joiningDate: "01/01/2023", daysCount: "1", referrals: "10" },
      { rank: 2, name: "Rasha Mohamed", joiningDate: "02/01/2023", daysCount: "1", referrals: "8" },
    ],
    'Last 7 Days': [
      { rank: 1, name: "Haya Omara", joiningDate: "27/12/2022", daysCount: "7", referrals: "30" },
      { rank: 2, name: "Magdy Tolba", joiningDate: "28/12/2022", daysCount: "7", referrals: "25" },
    ],
    'Last 30 Days': [
      { rank: 1, name: "Ali Hassan", joiningDate: "01/12/2022", daysCount: "30", referrals: "100" },
      { rank: 2, name: "Sara Ahmed", joiningDate: "05/12/2022", daysCount: "30", referrals: "95" },
    ],
    'Top 100': [
      { rank: 1, name: "Mona Zaki", joiningDate: "01/01/2022", daysCount: "365", referrals: "500" },
      { rank: 2, name: "Tamer Hosny", joiningDate: "01/01/2022", daysCount: "365", referrals: "450" },
    ],
  };

  const [activeTab, setActiveTab] = useState('Last 24 hours');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="referral-page">
      
     
      <h2 className="title-referral">
        Total subscribers <span className="subscriber-count">114</span>
      </h2>
      <img src={photo} alt="Referral" className="referral-image" />
     
      <div className="referral-contest">
        <p className="contest-description">Get financial rewards when you encourage your friends to join EFMhub through your referral link.</p>
        
        <div className="time-filters">
          {Object.keys(data).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={activeTab === tab ? 'active-tab' : ''}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="ranking-table">
          <div className="table-header">
            <span>Rank</span>
            <span>Name</span>
            <span>Joining Date</span>
            <span>Days Count</span>
            <span>Referrals</span>
          </div>

          {data[activeTab].map((item) => (
            <div key={item.rank} className="table-row">
              <span className="rank"><img src={trophy} alt=''/>{item.rank}</span>
              <span className="name">{item.name}</span>
              <span className="joining-date">{item.joiningDate}</span>
              <span className="days-count">{item.daysCount}</span>
              <span className="referrals">{item.referrals}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReferralContestPage;

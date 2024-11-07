import { useState } from 'react';

import './ReferralContestPage.css';
import photo from '../../../photo/refelr.svg'
function ReferralContestPage() {
  const data = {
    'Last 24 hours': [
      { rank: 1, name: "Mohamed Khatab", joiningDate: "01/01/2023", daysCount: "1", referrals: "10" },
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
    <>
    <h2 style={{color:'black', textAlign:'center' }} >Total subscribers  <span style={{backgroundColor:'#d3a15a' , borderRadius:'10PX', color:'white'}}>114</span> </h2>
    <img src={photo}  alt='photo' className="rafelr-image"/>
   

    <div className="referral-contest-page">
      <h3 className="referral-title">Referral Contest</h3>
      <p className="referral-description">
        Get financial rewards when you encourage your friends to join EFMhub through your referral link.
      </p>
      <div className="tabs">
        {Object.keys(data).map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="contest-table">
        <div className="table-header">
          <span className="header-rank">Rank</span>
          <span className="header-name">Name</span>
        </div>
        {data[activeTab].map((contestant, index) => (
          <div key={index} className={`contest-row ${contestant.rank === 1 ? "highlighted" : ""}`}>
            <div className="rank">
              <span className="trophy-icon">🏆</span>
              <span>{contestant.rank}</span>
            </div>
            <div className="name">{contestant.name}</div>
            {contestant.rank === 1 && (
              <div className="details">
                <span className="detail">{contestant.joiningDate} <span className="label">Joining Date</span></span>
                <span className="detail">{contestant.daysCount} <span className="label">Days Count</span></span>
                <span className="detail">{contestant.referrals} <span className="label">Referrals</span></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
 
 
    </>
  );
}

export default ReferralContestPage;

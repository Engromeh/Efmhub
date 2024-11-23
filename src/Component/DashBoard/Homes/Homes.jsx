import React from "react";
import "./Homes.css";

function Homes() {
  return (
    <div className="dashboard">
      {/* Balance Card */}
      <div className="card-container">
        <div className="balance-card">
          <p className="card-title">Current Balance</p>
          <h1 className="card-amount">$155.339 EG</h1>
          <div className="card-footer">
            <span className="card-id">ID 5646446464</span>
            <span className="card-date">09/25</span>
          </div>
          <div className="card-logo">EFM</div>
        </div>
      </div>

      {/* Advertiser Stats */}
      <div className="card-container">
        <div className="advertiser-card">
          <div className="card-header">Advertiser Stats</div>
          <div className="card-content">
            <div className="stat-item">
              <span className="bullet"></span> Ad Credits <span className="value">0</span>
            </div>
            <div className="stat-item">
              <span className="bullet"></span> Video Ads Credits <span className="value">0</span>
            </div>
            <div className="stat-item">
              <span className="bullet"></span> Banner Credits <span className="value">0</span>
            </div>
            <div className="stat-item">
              <span className="bullet"></span> Text Ad Credits <span className="value">0</span>
            </div>
            <div className="stat-item">
              <span className="bullet"></span> Link Ad Credits <span className="value">0</span>
            </div>
          </div>
        </div>
      </div>

     

     
      
       
      {/* Referral Stats */}
      <div className="card-container">
        <div className="referral-stats-card">
          <div className="card-header">Referral Stats</div>
          <div className="card-content">
            <div className="stat-item">
              <span className="bullet"></span>
              <span className="stat-label">Direct Referrals</span>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <span className="bullet"></span>
              <span className="stat-label">Earned so far</span>
              <span className="stat-value">0 <span className="currency">EGP</span></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* General Stats */}
 <div className="card-container">
        <div className="general-stats-card">
          <div className="continer-header">
          <span>General Stats</span>
        
           <div className="card-content-generl">
            <h4>Earning Balance Stats</h4>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="icon-box">
                  <i className="icon-balance"></i>
                </div>
                <p>Balance</p>
                <h3>$1555</h3>
              </div>
              <div className="stat-item">
                <div className="icon-box">
                  <i className="icon-purchase"></i>
                </div>
                <p>Purchase Balance</p>
                <h3>$0</h3>
              </div>
              <div className="stat-item">
                <div className="icon-box">
                  <i className="icon-payments"></i>
                </div>
                <p>Payments Received</p>
                <h3>$400</h3>
              </div>
              <div className="stat-item disabled">
                <div className="icon-box">
                  <i className="icon-pending"></i>
                </div>
                <p>Pending Withdrawals</p>
                <h3>$0</h3>
              </div>
            </div>
          </div>
        </div>
      </div> 
      </div>
{/* Daily Tasks */}
<div className="card-container">
        <div className="daily-tasks-card">
          <h3>Daily Tasks</h3>
          <div className="circle-chart">
            <svg width="120" height="120" viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                stroke-dasharray="50, 100"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                3/6
              </text>
            </svg>
            <p className="circle-label">Show Tasks</p>
          </div>
          <div className="legend">
          <div className="legend-item">
            <span className="completed"></span> have been completed
          </div>
          <div className="legend-item">
            <span className="not-completed"></span> have not been completed
          </div>
        </div>
        </div>
        
      </div>
      
      {/* Advertisement Clicks */}
      <div className="card-container">
        <div className="advertisement-clicks-card">
          <div className="card-header">Your Advertisement Clicks</div>
          <div className="card-content">
            <div className="stat-item">
              <span className="bullet"></span>
              <span className="stat-label">Your Clicks</span>
              <span className="stat-value">0</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Homes;

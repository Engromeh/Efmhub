// import currencyIcon from "./icons/currencyIcon.svg"; // استبدل بمسار الأيقونة الخاص بك
// import logo from "./icons/logo.svg"; // شعار EFM
import "./Currencies.css"; // ملف CSS
import { useState } from "react";
import mony from "../../../../photo/mony.svg";
import orangee from "../../../../photo/orange.svg";
import weeee from "../../../../photo/we pay.svg";
import insta from "../../../../photo/انستباي.svg";
import vode from "../../../../photo/vodefone.svg";
import bankk from "../../../../photo/banx.svg";
import upgred from '../../../../photo/upgreed.svg'

const Currencies = () => {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const exchangeRate = 48;

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="currencies-container">
      <h1 className="title">Currencies</h1>
      <div className="card">
        <div className="header">
          <div className="logo-container">
            <img src={upgred} alt="Logo" className="logo" />
            <span style={{textAlign:"center" , marginLeft:"30px" ,color:"#DFBC8A" ,fontWeight:"bold"}}>Result</span>
          </div>
          <div className="exchange-rate">
            <span style={{color:"#DFBC8A"}}>ExchangeRate</span>
          </div>
          

        </div>

       
        <div className="TOTALRESULT">
          <h2 className="result">{exchangeRate} EGP</h2>
          <h3 className="money">EGP $0.00</h3>
        </div>

        <div className="balance">
          <span>Currentbalance</span>
          <span>0.00 EGP</span>
        </div>
        <div className="input-group">
          <label style={{color:"#DFBC8A"}}>Amount</label>
          <div className="input-with-icon">
            <img src={mony} alt="Currency Icon" />
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
            />
            <span className="input-currency">{currency}</span>
          </div>
        </div>

        <div className="input-group">
          <label style={{color:"#DFBC8A"}} >Currency</label>
          <div className="select-container">
            <select value={currency} onChange={handleCurrencyChange}>
              <option value="USD">USD</option>
              <option value="EGP">EGP</option>
              <option value="SAR">SAR</option>
            </select>
          </div>
        </div>

        <footer className="footer-logos">
          <img src={orangee} alt="Orange" />
          <img src={weeee} alt="WePay" />
          <img src={insta} alt="InstaPay" />
          <img src={vode} alt="Vodafone" />
          <img src={bankk} alt="Banque Misr" />
        </footer>
      </div>
      <footer className="copyright">
        Copyright ©EFM 2024
      </footer>
    </div>
  );
};

export default Currencies;

import './TransferMoneyPage.css';
import iconess4 from '../../../../photo/tasktitel.svg'
import iconess5 from '../../../../photo/amount task.svg'
import iconess6 from '../../../../photo/clienttitel.svg'
import orangee from "../../../../photo/orange.svg";
import weeee from "../../../../photo/we pay.svg";
import insta from "../../../../photo/انستباي.svg";
import vode from "../../../../photo/vodefone.svg";
import bankk from "../../../../photo/banx.svg";
import ETSLIAT from "../../../../photo/ETSLIT.svg";

function TransferMoneyPage() {
  return (
    <div className="TransferMoneyPage-container">
     
      <div className="TransferMoneyPage-header">
        <span className="TransferMoneyPage-title">Transfer Money</span>
        <img
          src={iconess4} 
          alt="logo"
          className="TransferMoneyPage-logo"
        />
      </div>

    <div className="TransferMoneyPage-card">
        <form className="TransferMoneyPage-form">
          <div className="TransferMoneyPage-inputWrapper">
          <label className='TransferMoneyPage-label'>client</label>
            <img
              src={iconess6}
              alt="client icon"
              className="TransferMoneyPage-inputIcon"
            />
            <input
              type="text"
              placeholder="Enter The Name"
              className="TransferMoneyPage-input"
            />
          </div>

          <div className="TransferMoneyPage-inputWrapper">
          <label className='TransferMoneyPage-label'>Amount</label>
            <img
              src={iconess5}
              alt="amount icon"
              className="TransferMoneyPage-inputIcon"
            />
            <input
              type="text"
              placeholder="Enter The Amount"
              className="TransferMoneyPage-input"
            />
          </div>

          <div className="TransferMoneyPage-buttonGroup">
            <button type="button" className="TransferMoneyPage-sendButton">
              Send
            </button>
            <button type="button" className="TransferMoneyPage-cancelButton">
              Cancel
            </button>
          </div>
        </form>

        <div className="TransferMoneyPage-logos">
          <img
            src={orangee} 
            alt="logo1"
            className="TransferMoneyPage-logoSmall"
          />
          <img
            src={weeee} 
            alt="logo2"
            className="TransferMoneyPage-logoSmall"
          />
          <img
            src={insta} 
            alt="logo3"
            className="TransferMoneyPage-logoSmall"
          />
          <img
            src={vode} 
            alt="logo3"
            className="TransferMoneyPage-logoSmall"
          />
          <img
            src={bankk} 
            alt="logo3"
            className="TransferMoneyPage-logoSmall"
          />
          <img
            src={ETSLIAT} 
            alt="logo3"
            className="TransferMoneyPage-logoSmall"
          />
        </div>
      </div>
    </div>
  );
}

export default TransferMoneyPage;

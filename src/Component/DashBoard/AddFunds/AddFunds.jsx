import Addfundsstyles from './AddFunds.module.css';
import copy from '../../../../photo/Vector.svg';
import etselit from '../../../../photo/etsalit.svg';
import vodefon from '../../../../photo/vodefone.svg';
import bank from '../../../../photo/banx.svg';
// import we from '../../../../photo/wepay.svg';
import instpay from '../../../../photo/انستباي.svg';

const AddFunds = () => {
  return (
    <div className={Addfundsstyles.containerAddFunds}>
      <div className={Addfundsstyles.headerInfoAddFunds}>
        <h2 className={Addfundsstyles.subtitleAddFunds}>Add Funds</h2>
        <p className={Addfundsstyles.contactAddFunds}>
          <img src={copy} alt="icon" className={Addfundsstyles.iconAddFunds} />
          01068217368
        </p>
      </div>

      <div className={Addfundsstyles.cardAddFunds}>
        <div className={Addfundsstyles.totalContainerAddFunds}>
          <h3 className={Addfundsstyles.totalLabelAddFunds}>Total</h3>
          <p className={Addfundsstyles.totalAmountAddFunds}>$0.0</p>
        </div>
        <form>
          <label htmlFor="method">Method of transfer</label>
          <select id="method" name="method">
            <option value="vodafone">Vodafone Cash</option>
          </select>

          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            placeholder="Enter The link of order"
          />

          <label htmlFor="upload">Uploading the file</label>
          <input type="file" id="upload" name="upload" />

          <div className={Addfundsstyles.feesAddFunds}>
            <div>
              <label htmlFor="fees">The fees</label>
              <input type="text" id="fees" name="fees" value="0" disabled /> EGP
            </div>
            <div>
              <label htmlFor="tax">Tax</label>
              <input type="text" id="tax" name="tax" value="0" disabled /> EGP
            </div>
          </div>

          <div className={Addfundsstyles.buttonsAddFunds}>
            <button type="submit" className={Addfundsstyles.sendBtnAddFunds}>
              Send
            </button>
            <button type="button" className={Addfundsstyles.cancelBtnAddFunds}>
              Cancel
            </button>
          </div>
        </form>

        <div className={Addfundsstyles.footerLogosAddFunds}>
          {/* <img src={we} alt="logo" /> */}
          <img src={etselit} alt="logo" />
          <img src={instpay} alt="logo" />
          <img src={vodefon} alt="logo" />
          <img src={bank} alt="logo" />
        </div>
      </div>

      <footer>
        <p className={Addfundsstyles.copyAddFunds}>Copyright ©EFM 2024</p>
      </footer>
    </div>
  );
};

export default AddFunds;

import './AddFunds.css';
import copy from '../../../../photo/Vector.svg';
 import etselit from '../../../../photo/etsalit.svg'; 
import vodefon from '../../../../photo/vodefone.svg';
import bank from '../../../../photo/banx.svg';
// import we from '../../../../photo/wepay.svg'
import instpay from '../../../../photo/انستباي.svg'

const AddFunds = () => {
  return (
    <div className="container-add-funds">
     <div className="container-add-funds">
  <div className="header-info-add-funds">
    <h2 className="subtitle-add-funds">Add Funds</h2>
    <p className="contact-add-funds">
      <img src={copy} alt="icon" className="icon-add-funds" />
      01068217368
    </p>
  </div>


      <div className="card-add-funds">
      <div className="total-container-add-funds">
        <h3 className="total-label-add-funds">Total</h3>
        <p className="total-amount-add-funds">$0.0</p>
</div>
        <form>
          <label htmlFor="method">Method of transfer</label>
          <select id="method" name="method">
            <option value="vodafone">Vodafone Cash</option>
          </select>

          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" name="amount" placeholder="Enter The link of order" />

          <label htmlFor="upload">Uploading the file</label>
          <input type="file" id="upload" name="upload" />

          <div className="fees-add-funds">
            <div>
              <label htmlFor="fees">The fees</label>
              <input type="text" id="fees" name="fees" value="0" disabled /> EGP
            </div>
            <div>
              <label htmlFor="tax">Tax</label>
              <input type="text" id="tax" name="tax" value="0" disabled /> EGP
            </div>
          </div>

          <div className="buttons-add-funds">
            <button type="submit" className="send-btn-add-funds">Send</button>
            <button type="button" className="cancel-btn-add-funds">Cancel</button>
          </div>
        </form>

        <div className="footer-logos-add-funds">
          {/* <img src={we} alt="logo" /> */}
          <img src={etselit} alt="logo" />
.            <img src={instpay} alt="logo" />
            <img src={vodefon} alt="logo" />
            <img src={bank} alt="logo" />
        </div>
      </div>

      <footer>
        <p className='copy-addfunds'>Copyright ©EFM 2024</p>
      </footer>
    </div>
 </div>
  );
};

export default AddFunds;

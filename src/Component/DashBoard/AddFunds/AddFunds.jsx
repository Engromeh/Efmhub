import Addfundsstyles from './AddFunds.module.css';
import copy from '../../../../photo/Vector.svg';
import etselit from '../../../../photo/etsalit.svg';
import vodefon from '../../../../photo/vodefone.svg';
import bank from '../../../../photo/banx.svg';
import instpay from '../../../../photo/انستباي.svg';
import linkIcon from '../../../../photo/amount.svg';
import { useState } from 'react';
// import closeIcon from '../../../../photo/close.svg';

const AddFunds = () => {
  const [selectedFile, setSelectedFile] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  

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
          <div className={Addfundsstyles.inputWithIcon}>
            <img src={vodefon} alt="Vodafone Icon" className={Addfundsstyles.iconInsideInput} />
            <select id="method" name="method" className={Addfundsstyles.selectInput}>
              <option value="vodafone" style={{marginLeft:'20px'}}>Vodafone Cash</option>
            </select>
          </div>
          <label htmlFor="amount">Amount</label>
<div className={Addfundsstyles.inputWithIcon}>
  <img src={linkIcon} alt="Link Icon" className={Addfundsstyles.iconInsideInput} />
  <div className={Addfundsstyles.customerfile}>
    <input
      type="text"
      id="amount"
      name="amount"
      placeholder="Enter The link of order"
      className={Addfundsstyles.textInput}
    />
  </div>
</div>

<label className={Addfundsstyles.label}>Uploading the file</label>
        <div className={Addfundsstyles.fileUploadContainer}>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className={Addfundsstyles.fileInput}
          />
          <label htmlFor="file" className={Addfundsstyles.fileLabel}>
            <img src="{uploadIcon}" alt="Upload" />
            Attach The File
          </label>
          <p className={Addfundsstyles.instruction}>The screen must be clear</p>
        </div>

        {/* Preview Uploaded File */}
        {selectedFile && (
          <div className={Addfundsstyles.previewContainer}>
            <img src={selectedFile} alt="Preview" className={Addfundsstyles.previewImage} />
            <button type="button" onClick={handleRemoveFile} className={Addfundsstyles.removeButton}>
              Remove
            </button>
          </div>
        )}

    

          
          


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

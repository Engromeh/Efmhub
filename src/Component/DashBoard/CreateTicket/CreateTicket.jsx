import { useState } from 'react';
import CreateTicketStyle from './CreateTicket.module.css';
// import uploadIcon from '../../../../photo/upload.svg';
import logo from '../../../../photo/logo withedraw.svg';

const CreateTicket = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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
    <div className={CreateTicketStyle.container}>
      <h2 className={CreateTicketStyle.title}>Create Ticket</h2>
      <img src={logo} alt="Logo" className={CreateTicketStyle.logo} />

        <form className={CreateTicketStyle.form}>
        {/* Ticket Title with Custom Input */}
        <label className={CreateTicketStyle.label}>Ticket Title</label>
        <div className={CreateTicketStyle.inputWithIcon}>
          <input type="text" placeholder="Vodafone Cash" className={CreateTicketStyle.textInput} />
        </div>
        

        {/* Category */}
        <label className={CreateTicketStyle.label}>Category</label>
        <select className={CreateTicketStyle.input}>
          <option>Select Category</option>
          <option>Technical Issue</option>
          <option>Payment</option>
          <option>General Inquiry</option>
        </select>

        {/* Uploading the file */}
        <label className={CreateTicketStyle.label}>Uploading the file</label>
        <div className={CreateTicketStyle.fileUploadContainer}>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className={CreateTicketStyle.fileInput}
          />
          <label htmlFor="file" className={CreateTicketStyle.fileLabel}>
            <img src="{uploadIcon}" alt="Upload" />
            Attach The File
          </label>
          <p className={CreateTicketStyle.instruction}>The screen must be clear</p>
        </div>

        {/* Preview Uploaded File */}
        {selectedFile && (
          <div className={CreateTicketStyle.previewContainer}>
            <img src={selectedFile} alt="Preview" className={CreateTicketStyle.previewImage} />
            <button type="button" onClick={handleRemoveFile} className={CreateTicketStyle.removeButton}>
              Remove
            </button>
          </div>
        )}

        {/* Description */}
        <label className={CreateTicketStyle.label}>Description</label>
        <textarea
          placeholder="Description of the problem or request"
          className={CreateTicketStyle.textarea}
        />

        {/* Buttons */}
        <div className={CreateTicketStyle.buttonsContainer}>
          <button type="submit" className={CreateTicketStyle.sendButton}>Send</button>
          <button type="button" className={CreateTicketStyle.cancelButton}>Cancel</button>
        </div>
      </form>
    </div>
    
  );
};

export default CreateTicket;

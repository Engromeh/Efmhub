import React, { useState } from "react";
import copy from "../../../../photo/copyicon.svg";
import mony from "../../../../photo/mony.svg";
import orangee from "../../../../photo/orange.svg";
import weeee from "../../../../photo/we pay.svg";
import insta from "../../../../photo/انستباي.svg";
import vode from "../../../../photo/vodefone.svg";
import bankk from "../../../../photo/banx.svg";
import payy from "../../../../photo/pay 1.svg";
import Select from 'react-select';
const AddFunds = () => {
  const [attachment, setAttachment] = useState(null);
  const [selectedLogo, setSelectedLogo] = useState(payy);
  const options = [
    { value: "Vodafone Cash", label: "Vodafone Cash", icon: vode },
    { value: "Bank Transfer", label: "Bank Transfer", icon: bankk },
    { value: "Instapay", label: "Instapay", icon: insta },
    { value: "Orange Cash", label: "Orange Cash", icon: orangee },
    { value: "We Pay", label: "We Pay", icon: weeee },
  ];
  const customStyles = {
    control: (base) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "5px",
      width: "100%",
    }),
    option: (base, state) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      backgroundColor: state.isSelected ? "#f0f0f0" : "#fff",
      cursor: "pointer",
    }),
  };

  const formatOptionLabel = ({ label, icon }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={icon}
        alt=""
        style={{ width: "20px", height: "20px", marginRight: "10px" }}
      />
      {label}
    </div>
  );
  const handleMethodChange = (selectedOption) => {
    setSelectedLogo(selectedOption.icon);
  };

  // const handleMethodChange = (event) => {
  //   const method = event.target.value;
  //   switch (method) {
  //     case "Vodafone Cash":
  //       setSelectedLogo(vode);
  //       break;
  //     case "Bank Transfer":
  //       setSelectedLogo(bankk);
  //       break;
  //     case "Instapay":
  //       setSelectedLogo(insta);
  //       break;
  //     case "Orange Cash":
  //       setSelectedLogo(orangee);
  //       break;
  //     case "We Pay":
  //       setSelectedLogo(weeee);
  //       break;
  //     default:
  //       setSelectedLogo(payy);
  //   }
  // };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setAttachment(fileURL);
    }
  };

  const handleRemoveAttachment = () => {
    setAttachment(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Add Funds</h1>
          <p style={styles.phone}>
            01068217368 <img style={{ padding: "" }} src={copy} alt="copy" />
          </p>
        </div>

        <div style={styles.totalContainer}>
          <h2 style={styles.totalLabel}>Total</h2>
          <h3 style={styles.totalValue}>$0.0</h3>
        </div>

        <form style={styles.form}>
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Method of transfer</label>
            <div style={styles.inputWithIcon}>
              <img style={{backgroundColor:"red"}} src={selectedLogo} alt="method logo" />
              <Select
                options={options}
                onChange={handleMethodChange}
                styles={{width:"100%"}}
                formatOptionLabel={formatOptionLabel}
                isSearchable={false}
              />
            </div>
          </div>

          <div style={styles.inputWrapper}>
            <label style={styles.label}>Amount</label>
            <div style={styles.inputWithIcon}>
              <img style={styles.icon} src={mony} alt="amount icon" />
              <input
                type="text"
                placeholder="Enter The link of order"
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.inputWrapper}>
            <label style={styles.label}>Uploading the file</label>
            <div style={styles.fileUpload}>
              <span style={styles.uploadText}>Attach The File</span>
              <input
                type="file"
                style={styles.fileInput}
                onChange={handleFileChange}
              />
            </div>
            {attachment && (
              <div style={styles.previewContainer}>
                <img src={attachment} alt="Preview" style={styles.previewImage} />
                <button
                  style={styles.removeButton}
                  onClick={handleRemoveAttachment}
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>The fees</label>
              <div style={styles.inputWithCurrency}>
                <input type="text" placeholder="0" style={styles.inputSmall} />
                <span style={styles.currency}>EGP</span>
              </div>
            </div>
            <div style={styles.column}>
              <label style={styles.label}>Tax</label>
              <div style={styles.inputWithCurrency}>
                <input type="text" placeholder="0" style={styles.inputSmall} />
                <span style={styles.currency}>EGP</span>
              </div>
            </div>
          </div>

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.sendButton}>
              Send
            </button>
            <button type="button" style={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>

        <div style={styles.logosContainer}>
          <img src={orangee} alt="Logo 1" style={styles.logo} />
          <img src={weeee} alt="Logo 2" style={styles.logo} />
          <img src={insta} alt="Logo 3" style={styles.logo} />
          <img src={vode} alt="Logo 4" style={styles.logo} />
          <img src={bankk} alt="Logo 5" style={styles.logo} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  card: {
    width: "400px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    color: "#4A4A4A",
  },
  phone: {
    fontSize: "16px",
    color: "#d4af37",
    textAlign: "right",
  },
  phoneIcon: {
    marginLeft: "5px",
  },
  totalContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  totalLabel: {
    fontSize: "20px",
    color: "#333",
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: "24px",
    color: "#333",
    fontWeight: "bold",
  },
  form: {
    textAlign: "left",
  },
  inputWrapper: {
    marginBottom: "15px",
    width:"100%"
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#666",
    fontWeight: "bold",
  },
  
    inputWithIcon: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #ddd",
      borderRadius: "5px",
      height: "50px",
      width: "100%", // تمديد العنصر بالكامل
      overflow: "hidden", // منع تجاوز المحتوى
    },
    select: {
   
      fontSize: "16px",
      height: "100%", // لضمان ملء السليكت الارتفاع بالكامل
      padding: "0 10px", // إضافة تباعد داخلي
      appearance: "none", // إزالة السهم الافتراضي للقائمة المنسدلة
      backgroundColor: "transparent", // إزالة خلفية السليكت الافتراضية
    },
    icon: {
      width: "30px", // حجم الأيقونة
      height: "30px",
      margin: "0 10px", // تباعد بين الأيقونة والقائمة
    },
  
  
  fileUpload: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px dashed #ddd",
    borderRadius: "5px",
    height: "50px",
    color: "#999",
    fontSize: "14px",
    position: "relative",
  },
  uploadText: {
    pointerEvents: "none",
  },
  fileInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
  },
  previewContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    padding: "10px",
    marginTop: "10px",
    border: "1px solid #ddd",
  },
  previewImage: {
    width: "60px",
    height: "60px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    marginBottom: "20px",
  },
  column: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
  },
  inputWithCurrency: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    height: "50px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  inputSmall: {
    flex: "1",
    border: "none",
    outline: "none",
    fontSize: "16px",
    textAlign: "left",
    color: "#555",
    backgroundColor: "transparent",
  },
  currency: {
    marginLeft: "-96px",
    fontSize: "16px",
    color: "#888",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "20px",
  },
  sendButton: {
    flex: "1",
    backgroundColor: "#d4af37",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  cancelButton: {
    flex: "1",
    backgroundColor: "#ddd",
    color: "#333",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  logosContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
};

export default AddFunds;

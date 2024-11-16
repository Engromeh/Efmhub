import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import mony from "../../../../photo/mony.svg";
import orangee from "../../../../photo/orange.svg";
import weeee from "../../../../photo/we pay.svg";
import insta from "../../../../photo/انستباي.svg";
import vode from "../../../../photo/vodefone.svg";
import bankk from "../../../../photo/banx.svg";
import upgred from "../../../../photo/upgreed.svg";
import toteld from "../../../../photo/withdraw.svg";
import { color } from "framer-motion";

const WithdrawFunds = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState({
    label: "Vodafone Cash",
    icon: vode,
  });

  const methods = [
    { label: "Vodafone Cash", icon: vode },
    { label: "Bank Transfer", icon: bankk },
    { label: "Instapay", icon: insta },
  ];

  const handleMethodChange = (event) => {
    const method = methods.find((m) => m.label === event.target.value);
    setSelectedMethod(method || methods[0]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      {/* Header with Button */}
      <div style={styles.header}>
        <button style={styles.addButton} onClick={handleOpenModal}>
          Add Withdraw Account
        </button>
      </div>
      <h2 style={styles.headerText}>Withdraw Funds</h2>

      {/* Main Card */}
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.logo}>
            <img style={styles.logoTitle} src={upgred} alt="Upgraded Logo" />
          </div>

          <form style={styles.form}>
            {/* Method */}
            <div style={styles.inputWrapper}>
              <label style={styles.label}>Method</label>
              <div style={styles.inputWithIcon}>
                <img style={styles.methodIcon} src={selectedMethod.icon} alt="" />
                <select
                  value={selectedMethod.label}
                  onChange={handleMethodChange}
                  style={styles.select}
                >
                  {methods.map((method, index) => (
                    <option key={index} value={method.label}>
                      {method.label}
                    </option>
                  ))}
                </select>
                <BiChevronDown style={styles.dropdownIcon} />
              </div>
            </div>

            {/* Amount */}
            <div style={styles.inputWrapper}>
              <label style={styles.label}>Amount</label>
              <div style={styles.inputWithIcon}>
                <img style={styles.icon} src={mony} alt="Amount Icon" />
                <input type="text" placeholder="0" style={styles.input} />
                <span style={styles.currency}>EGP</span>
              </div>
            </div>

            {/* Total */}
            <div style={styles.inputWrapper}>
              <label style={styles.label}>Total</label>
              <div style={styles.inputWithIcon}>
                <img style={styles.icon} src={toteld} alt="Total Icon" />
                <input type="text" placeholder="0" style={styles.input} />
                <span style={styles.currency}>EGP</span>
              </div>
            </div>

            {/* Buttons */}
            <div style={styles.buttonContainer}>
              <button type="submit" style={styles.upgradeButton}>
                Upgraded
              </button>
              <button type="button" style={styles.cancelButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>Add Withdraw Account</h2>
            <p style={styles.modalSubtitle}>
              The Selected Method has the following fields
            </p>
            <div style={styles.modalInputWrapper}>
              <label style={styles.modalLabel}>E-Wallet - Phone No</label>
              <div style={styles.inputWithIcon}>
                <img style={styles.icon} src={mony} alt="Icon" />
                <select style={styles.select}>
                  <option>Upgrade Using Balance</option>
                  <option>Bank Transfer</option>
                  <option>Instapay</option>
                </select>
              </div>
            </div>
            <div style={styles.modalButtonContainer}>
              <button style={styles.upgradeButton} onClick={handleCloseModal}>
                Upgraded
              </button>
              <button style={styles.cancelButton} onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f9f9f9",
    borderBottom: "1px solid #ddd",
  },
  headerText: {
    fontSize: "20px",
    fontWeight: "bold",
    marginLeft: "700px",
    color:"#808892"
  },
  addButton: {
    backgroundColor: "#DFBC8A",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
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
  logoTitle: {
    width: "50px",
    marginLeft:"300px"
  },
  inputWrapper: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    marginRight:"295px",
    color:"#DFBC8A"
  },
  inputWithIcon: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
  },
  methodIcon: {
    width: "30px",
    height: "30px",
    marginRight: "10px",
  },
  icon: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },
  select: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "16px",
    color: "#555",
    appearance: "none",
    backgroundColor: "transparent",
  },
  dropdownIcon: {
    fontSize: "20px",
    color: "#888",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  upgradeButton: {
    flex: 1,
    backgroundColor: "#DFBC8A",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    marginRight: "10px",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#ddd",
    color: "#333",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "400px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
  },
  modalTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color:"#808892"
  },
  modalSubtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#808892",
  },
  modalInputWrapper: {
    marginBottom: "20px",
  },
  modalLabel: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    color:"#808892"
  },
  modalButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default WithdrawFunds;

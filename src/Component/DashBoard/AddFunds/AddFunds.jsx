import React from "react";

const AddFunds = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Add Funds</h1>
        <p style={styles.phone}>01068217368 📱</p>
        <h2 style={styles.totalLabel}>Total</h2>
        <h3 style={styles.totalValue}>$0.0</h3>

        <form style={styles.form}>
          {/* Method of Transfer */}
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Method of transfer</label>
            <div style={styles.inputWithIcon}>
              <span style={styles.icon}>📲</span>
              <select style={styles.input}>
                <option>Vodafone Cash</option>
                <option>Bank Transfer</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Amount */}
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Amount</label>
            <div style={styles.inputWithIcon}>
              <span style={styles.icon}>🔗</span>
              <input
                type="text"
                placeholder="Enter The link of order"
                style={styles.input}
              />
            </div>
          </div>

          {/* Uploading the File */}
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Uploading the file</label>
            <div style={styles.fileUpload}>
              <span style={styles.uploadText}>Attach The File</span>
              <input type="file" style={styles.fileInput} />
            </div>
          </div>

          {/* Fees and Tax */}
          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>The fees</label>
              <input type="text" placeholder="0" style={styles.inputSmall} />
              <span style={styles.currency}>EGP</span>
            </div>
            <div style={styles.column}>
              <label style={styles.label}>Tax</label>
              <input type="text" placeholder="0" style={styles.inputSmall} />
              <span style={styles.currency}>EGP</span>
            </div>
          </div>

          {/* Buttons */}
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.sendButton}>
              Send
            </button>
            <button type="button" style={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
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
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  },
  phone: {
    fontSize: "16px",
    color: "#d4af37",
    marginBottom: "20px",
  },
  totalLabel: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "5px",
  },
  totalValue: {
    fontSize: "32px",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    textAlign: "left",
  },
  inputWrapper: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#666",
  },
  inputWithIcon: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "5px",
  },
  icon: {
    marginRight: "5px",
    color: "#999",
  },
  input: {
    border: "none",
    outline: "none",
    width: "100%",
    padding: "5px",
    fontSize: "14px",
  },
  fileUpload: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px dashed #ddd",
    borderRadius: "5px",
    height: "50px",
    position: "relative",
    color: "#999",
    fontSize: "14px",
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
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  column: {
    width: "48%",
    position: "relative",
  },
  inputSmall: {
    width: "100%",
    padding: "5px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
  },
  currency: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    fontSize: "14px",
    color: "#666",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  sendButton: {
    width: "48%",
    backgroundColor: "#d4af37",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  cancelButton: {
    width: "48%",
    backgroundColor: "#ddd",
    color: "#333",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default AddFunds;

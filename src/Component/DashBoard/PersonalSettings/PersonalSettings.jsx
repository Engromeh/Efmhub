import { useState } from "react";
import PersonalSettingsstyle from "./PersonalSettings.module.css";
import qricones from "../../../../photo/qr.svg";

const PersonalSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [previewImage, setPreviewImage] = useState(); // معاينة الصورة

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handlePasswordClick = () => {
    setIsPasswordModalOpen(true);
  };

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setPreviewImage(imageUrl); // إعداد الصورة للمعاينة
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPreviewImage(null); // إعادة تعيين المعاينة عند الإغلاق
  };

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
  };

  return (
    <div className={PersonalSettingsstyle.container}>
      <h2 className={PersonalSettingsstyle.title}>Personal Settings</h2>
      <div className={PersonalSettingsstyle.profileSection}>
        <img
          src={selectedImage}
          alt="Profile"
          className={PersonalSettingsstyle.profileImage}
        />
        <div className={PersonalSettingsstyle.profileInfo}>
          <h3>Alexa Rawles</h3>
          <p>alexarawles@gmail.com</p>
        </div>
        <div className={PersonalSettingsstyle.buttons}>
          <button
            className={PersonalSettingsstyle.editButton}
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button
            className={PersonalSettingsstyle.passwordButton}
            onClick={handlePasswordClick}
          >
            Change Password
          </button>
        </div>
      </div>

      <div className={PersonalSettingsstyle.formContainer}>
        <form>
          <div className={PersonalSettingsstyle.inputGroup}>
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Your First Name" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Your Last Name" />
            </div>
          </div>
          <div className={PersonalSettingsstyle.inputGroup}>
            <div>
              <label>Telegram Username</label>
              <input type="text" placeholder="Telegram username" />
            </div>
            <div>
              <label>Username</label>
              <input type="text" placeholder="Username" />
            </div>
          </div>
          <div className={PersonalSettingsstyle.inputGroup}>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Email"  />
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className={PersonalSettingsstyle.inputGroup}>
            <div>
              <label>Referral Code</label>
              <input type="text" placeholder="Referral Code" />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="text" placeholder="Phone" />
            </div>
          </div>
        </form>
      </div>

      {/* QR Code Switch Button */}
      <div className={PersonalSettingsstyle.switchSection}>
        <span className={PersonalSettingsstyle.label}>
          Two Factor Authentication
        </span>
        <label className={PersonalSettingsstyle.switch}>
          <input type="checkbox" checked={isEnabled} onChange={toggleSwitch} />
          <span className={PersonalSettingsstyle.slider}></span>
        </label>
      </div>

      {isModalOpen && (
        <div className={PersonalSettingsstyle.modalOverlay}>
          <div className={PersonalSettingsstyle.modalContent}>
            <h3>Change Profile Picture</h3>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {previewImage && (
              <div className={PersonalSettingsstyle.previewContainer}>
                <h4>Preview:</h4>
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginTop: "10px",
                  }}
                />
              </div>
            )}
            <button
              className={PersonalSettingsstyle.closeButton}
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isPasswordModalOpen && (
        <div className={PersonalSettingsstyle.modalOverlay}>
          <div className={PersonalSettingsstyle.modalContent}>
            <h3>Change Password</h3>
            <form className={PersonalSettingsstyle.passwordForm}>
              <label>Current Password</label>
              <input type="password" placeholder="Current Password" />
              <label>New Password</label>
              <input type="password" placeholder="New Password" />
              <label>Confirm New Password</label>
              <input type="password" placeholder="Confirm New Password" />
              <div className={PersonalSettingsstyle.buttons}>
                <button className={PersonalSettingsstyle.saveButton}>
                  Save
                </button>
                <button
                  className={PersonalSettingsstyle.cancelButton}
                  onClick={closePasswordModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEnabled && (
        <div className={PersonalSettingsstyle.modalOverlay}>
          <div className={PersonalSettingsstyle.modalContent}>
            <h3>Scan this QR Code to Enable 2FA</h3>
            <p>
              Use your authenticator app to scan the QR code below. Please enter
              the code from your authenticator app to enable 2FA.
            </p>
            <div className={PersonalSettingsstyle.qrCode}>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
                alt="QR Code"
                style={{justifyContent:"center" , marginLeft:"80px" , width:"65%"}}
              />
            </div>
            <div
              className={PersonalSettingsstyle.inputGroup}
              style={{ position: "relative", width: "100%" }}
            >
              <img
                src={qricones}
                alt="Icon"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                }}
              />
              <input
                type="text"
                placeholder="Enter Code"
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 40px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  outline: "none",
                  fontSize: "16px",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>
            <div className={PersonalSettingsstyle.modalButtonContainer}>
              <button className={PersonalSettingsstyle.saveButton}>
                Enable
              </button>
              <button
                className={PersonalSettingsstyle.cancelButton}
                onClick={() => setIsEnabled(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalSettings;

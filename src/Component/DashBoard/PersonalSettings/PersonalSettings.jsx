import { useState } from 'react';
import PersonalSettingsstyle from './PersonalSettings.module.css';
// import profileImage from '../../../../photo/profile.png';
// import editIcon from '../../../../photo/edit.svg';
// import passwordIcon from '../../../../photo/password.svg';

const PersonalSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handlePasswordClick = () => {
    setIsPasswordModalOpen(true);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
  };

  return (
    <div className={PersonalSettingsstyle.container}>
      <h2 className={PersonalSettingsstyle.title}>Personal Settings</h2>
      <div className={PersonalSettingsstyle.profileSection}>
        <img src={selectedImage} alt="Profile" className={PersonalSettingsstyle.profileImage} />
        <div className={PersonalSettingsstyle.profileInfo}>
          <h3>Alexa Rawles</h3>
          <p>alexarawles@gmail.com</p>
        </div>
        <div className={PersonalSettingsstyle.buttons}>
          <button className={PersonalSettingsstyle.editButton} onClick={handleEditClick}>
            <img src="{editIcon}" alt="Edit" className={PersonalSettingsstyle.icon} /> 
          </button>
          <button className={PersonalSettingsstyle.passwordButton} onClick={handlePasswordClick}>
            <img src="{passwordIcon}" alt="Change Password" className={PersonalSettingsstyle.icon} />
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
              <input type="email" placeholder="Email" />
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

      {isModalOpen && (
        <div className={PersonalSettingsstyle.modalOverlay}>
          <div className={PersonalSettingsstyle.modalContent}>
            <h3>Change Profile Picture</h3>
            <input type="file" onChange={handleImageChange} />
            <button className={PersonalSettingsstyle.closeButton} onClick={closeModal}>Close</button>
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
                <button className={PersonalSettingsstyle.saveButton}>Save</button>
                <button className={PersonalSettingsstyle.cancelButton} onClick={closePasswordModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalSettings;

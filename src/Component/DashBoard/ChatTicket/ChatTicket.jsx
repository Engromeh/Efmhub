import React, { useState } from "react";
import iconsend from "../../../../photo/send icon.svg";
import iconattachment from "../../../../photo/ATTCHMENT ICON.svg";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Have you seen my backpack anywhere in office?",
      time: "15:42",
      sender: "user",
      image: null,
    },
    {
      id: 2,
      text: "Hello! Have you seen my backpack anywhere in office?",
      time: "15:42",
      sender: "admin",
      image: null,
    },
  ]);

  const [currentMessage, setCurrentMessage] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [isHoveringSend, setIsHoveringSend] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAttachment(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAttachment = () => {
    setAttachment(null);
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() === "" && !attachment) {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text: currentMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "user",
      image: attachment,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setCurrentMessage("");
    setAttachment(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>View Tickets</h1>
      <div style={styles.chatContainer}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={
              message.sender === "user"
                ? styles.userMessageContainer
                : styles.adminMessageContainer
            }
          >
            {message.sender === "admin" && (
              <img
                src="https://via.placeholder.com/40"
                alt="Admin Avatar"
                style={styles.avatar}
              />
            )}
            <div
              style={{
                ...styles.messageBubble,
                ...(message.sender === "user" ? styles.userBubble : {}),
              }}
            >
              <p style={styles.messageText}>{message.text}</p>
              {message.image && (
                <img
                  src={message.image}
                  alt="attachment"
                  style={styles.image}
                />
              )}
              <span style={styles.messageTime}>{message.time}</span>
            </div>
            {message.sender === "user" && (
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                style={styles.avatar}
              />
            )}
          </div>
        ))}
      </div>

      {attachment && (
        <div style={styles.attachmentPreview}>
          <img
            src={attachment}
            alt="Uploaded Attachment"
            style={styles.previewImage}
          />
          <button style={styles.removeButton} onClick={handleRemoveAttachment}>
            Remove
          </button>
        </div>
      )}

      <div style={styles.inputContainer}>
        <img
          src={iconattachment}
          alt="Attachment Icon"
          style={styles.attachmentIcon}
          onClick={() => document.getElementById("fileUpload").click()}
        />
        <input
          id="fileUpload"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <input
          type="text"
          placeholder="Type your message here..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          style={styles.inputField}
        />
        <button
          style={{
            ...styles.sendButton,
            ...(isHoveringSend ? styles.sendButtonHover : {}),
          }}
          onClick={handleSendMessage}
          onMouseEnter={() => setIsHoveringSend(true)}
          onMouseLeave={() => setIsHoveringSend(false)}
        >
          <img style={styles.sendIcon} src={iconsend} alt="Send Icon" />
        </button>
      </div>
      <footer style={styles.footer}>Copyright @EFM 2024</footer>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    margin: "50px auto",
    maxWidth: "600px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "20px",
    maxHeight: "400px",
    overflowY: "auto",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  userMessageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
  },
  adminMessageContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
  },
  messageBubble: {
    maxWidth: "70%",
    padding: "15px 26px",
    borderRadius: "15px",
    backgroundColor: "#f0f0f0",
    position: "relative",
    border: "1px solid #d4af37",
  },
  userBubble: {
    backgroundColor: "#fff",
  },
  messageText: {
    fontSize: "14px",
    margin: "0",
    color: "#333",
  },
  messageTime: {
    fontSize: "12px",
    color: "#aaa",
    position: "absolute",
    bottom: "-2px",
    right: "10px",
  },
  image: {
    marginTop: "10px",
    maxWidth: "100%",
    borderRadius: "10px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  attachmentPreview: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  previewImage: {
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  removeButton: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px",
  },
  attachmentIcon: {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    marginRight: "10px",
  },
  inputField: {
    flex: "1",
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  sendButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  sendButtonHover: {
    transform: "scale(1.1)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  },
  sendIcon: {
    width: "20px",
    height: "20px",
  },
  footer: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#aaa",
  },
};

export default ChatApp;


import { useState } from "react";
import "./Modeltesk2.css";

function Modeltesk2() {
  const [image, setImage] =useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const handleRemoveImage = () => {
    setImage(null); 
  };

    return (
        <>
        <div className="Modeltesk2-cardes1-containeres">
    
          <div className="Modeltesk2-cardes1-headeres">
            Description of the Task (what needs to be done)
          </div>
    
          <div className="Modeltesk2-cardes1-body">
    
            <div className="Modeltesk2-task-info">
              <span>
                <strong>commission</strong>
                <span className="Modeltesk2-heilight">: 2.5%</span>
              </span>
              <span>
                <strong>Time</strong><span className="Modeltesk2-heilight">: 00:21:33</span>
              </span>
              <span>
                <strong>Category</strong>
                <span className="Modeltesk2-heilight">: Youtube</span>
              </span>
            </div>
    

            <h2>"Speed Meets Style – Discover efm's Iconic Designs!"</h2>
    
      
            <p>
              <strong>What is Lorem Ipsum?</strong>
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

         <div className="Modeltesk2-container">
    
      <div className="Modeltesk2-cardes2">
        <div className="Modeltesk2-header">instructions</div>
        <ul className="Modeltesk2-list">
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
        </ul>
      </div>

      <div className="Modeltesk2-headerform">Uploading the file</div>
      <div className="Modeltesk2-section">
       
        <div className="Modeltesk2-upload-box">
          <input type="file" id="file" />
          <label >
          <input type="file" accept="image/*" onChange={handleFileUpload} />
          
          Attach The File</label>
        </div>
      </div>
      {image && (
        <div className="Modeltesk2-image-preview">
          <img src={image} alt="Modeltesk2-Uploaded preview" />
          <button className="Modeltesk2-remove-button" onClick={handleRemoveImage}>
            Remove
          </button>
        </div>
      )}

 
      <div className="Modeltesk2-headerform">notes</div>
<div className="Modeltesk2-section">
  <div className="Modeltesk2-notes-container">
    <textarea className="Modeltesk2-textarea" placeholder="notes"></textarea>
    <button className="Modeltesk2-button">Send</button>
  </div>
</div>

    </div>
    </>
      );
}

export default Modeltesk2;

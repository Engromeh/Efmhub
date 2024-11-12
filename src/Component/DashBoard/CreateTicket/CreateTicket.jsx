import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../../photo/logo withedraw.svg';

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Cairo', sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 15px;
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  color: #808892;
  text-align: left;
  margin-bottom: -41px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;


const Logo = styled.img`
  width: 60px;
  display: block;
  margin-left: 500px;
  margin-bottom: -5px

  @media (max-width: 768px) {
    width: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
  }
`;




const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  margin-bottom: 8px;
  color: #d4a259;
`;



const Select = styled.select`
  width: 100%;
  max-width: 560px;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const FileUploadContainer = styled.div`
  position: relative;
  border: 1px dashed #d4a259;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const FileLabel = styled.label`
  font-size: 16px;
  color: #666;
`;

const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const PreviewImage = styled.img`
  max-width: 100px;
  border-radius: 8px;
`;

const RemoveButton = styled.button`
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SendButton = styled.button`
  background-color: #d4a259;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 48%;

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const CancelButton = styled.button`
  background-color: #ccc;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 48%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Input = styled.input`
  width: 100%;
  max-width: 560px; /* ضبط الحد الأقصى للعرض */
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #d4a259;
  border-radius: 5px;
  background-color: #f9f9f9;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 8px;
    font-size: 12px;
  }
`;


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
    <Container>
      <Title>Create Ticket</Title>
      <Logo src={logo} alt="Logo" />

      <Form>
        <Label>Ticket Title</Label>
        <Input type="text" placeholder="Vodafone Cash" style={{width:"580px"}} />

        <Label>Category</Label>
        <Select>
          <option>Select Category</option>
          <option>Technical Issue</option>
          <option>Payment</option>
          <option>General Inquiry</option>
        </Select>

        <Label>Uploading the file</Label>
        <FileUploadContainer>
          <FileInput type="file" id="file" onChange={handleFileChange} />
          <FileLabel htmlFor="file">Attach The File</FileLabel>
        </FileUploadContainer>

        {selectedFile && (
          <PreviewContainer>
            <PreviewImage src={selectedFile} alt="Preview" />
            <RemoveButton onClick={handleRemoveFile}>Remove</RemoveButton>
          </PreviewContainer>
        )}

        <Label>Description</Label>
        <Textarea placeholder="Description of the problem or request" />

        <ButtonsContainer>
          <SendButton type="submit">Send</SendButton>
          <CancelButton type="button">Cancel</CancelButton>
        </ButtonsContainer>
      </Form>
    </Container>
  );
};

export default CreateTicket;

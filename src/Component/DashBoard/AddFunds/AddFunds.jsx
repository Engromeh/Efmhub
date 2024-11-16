import styled from "styled-components";
import copy from "../../../../photo/Vector.svg";
import etselit from "../../../../photo/etsalit.svg";
import vodefon from "../../../../photo/vodefone.svg";
import bank from "../../../../photo/banx.svg";
import instpay from "../../../../photo/انستباي.svg";
import linkIcon from "../../../../photo/amount.svg";
import orange from "../../../../photo/orange.svg";
import we from "../../../../photo/we pay.svg";
import { useState } from "react";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #808892;
`;

const Contact = styled.p`
  display: flex;
  align-items: center;
  color: #d4a259;
  font-weight: bold;
`;

const Icon = styled.img`
  margin-right: 8px;
  height: 24px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const TotalTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #d4a259;
`;

const TotalAmount = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const SelectInputWithIcon = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const SelectIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  pointer-events: none;
`;

const SelectInput = styled.select`
  width: 100%;
  padding: 12px 12px 12px 45px;
  border: 1px solid #d4a259;
  border-radius: 8px;
  background-color: #f9f9f9;
  outline: none;
  font-size: 16px;
`;

const InputWithIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const IconInsideInput = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  pointer-events: none;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 45px;
  border: 1px solid #d4a259;
  border-radius: 8px;
  background-color: #f9f9f9;
  outline: none;
  font-size: 16px;
`;

const FileUploadContainer = styled.div`
  position: relative;
  border: 1px dashed #d4a259;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
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

const FeesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FeesInput = styled.input`
  width: 45%;
  padding: 12px;
  border: 1px solid #d4a259;
  border-radius: 8px;
  background-color: #f9f9f9;
  outline: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const SendButton = styled.button`
  background-color: #d4a259;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  background-color: #ccc;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FooterLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  flex-wrap: wrap;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const AddFunds = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("vodafone");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <Container>
      <HeaderInfo>
        <Subtitle>Add Funds</Subtitle>
        <Contact>
          <Icon src={copy} alt="icon" />
          01068217368
        </Contact>
      </HeaderInfo>

      <Card>
        <TotalContainer>
          <TotalTitle>Total</TotalTitle>
          <TotalAmount>$0.0</TotalAmount>
        </TotalContainer>

        <label>Method of Transfer</label>
        <SelectInputWithIcon>
          <SelectIcon src='{transferIcon}' alt="Transfer Icon" />
          <SelectInput value={selectedMethod} onChange={handleMethodChange}>
            <option value="vodafone">Vodafone Cash</option>
            <option value="orange">Orange Cash</option>
            <option value="we">WE Pay</option>
            <option value="bank">Bank Transfer</option>
          </SelectInput>
        </SelectInputWithIcon>

        {selectedMethod !== "vodafone" && (
          <p style={{ color: "#d4a259", fontWeight: "bold" }}>
            Additional Steps Required!
          </p>
        )}

        <label>Amount</label>
        <InputWithIcon>
          <IconInsideInput src={linkIcon} alt="Link Icon" />
          <TextInput type="text" placeholder="Enter Amount" />
        </InputWithIcon>

        <label>Uploading the File</label>
        <FileUploadContainer>
          <FileInput type="file" onChange={handleFileChange} />
          <FileLabel>Attach The File</FileLabel>
        </FileUploadContainer>

        {selectedFile && (
          <PreviewContainer>
            <PreviewImage src={selectedFile} alt="Preview" />
            <RemoveButton onClick={handleRemoveFile}>Remove</RemoveButton>
          </PreviewContainer>
        )}

        <FeesContainer>
          <FeesInput type="text" placeholder="Fees" value="0" disabled />
          <FeesInput type="text" placeholder="Tax" value="0" disabled />
        </FeesContainer>

        <ButtonsContainer>
          <SendButton>Send</SendButton>
          <CancelButton>Cancel</CancelButton>
        </ButtonsContainer>
      </Card>

      <FooterLogos>
        <LogoImage src={orange} alt="Orange" />
        <LogoImage src={we} alt="We Pay" />
        <LogoImage src={instpay} alt="Instapay" />
        <LogoImage src={vodefon} alt="Vodafone" />
        <LogoImage src={bank} alt="Bank Transfer" />
        <LogoImage src={etselit} alt="Etsalit" />
      </FooterLogos>
    </Container>
  );
};

export default AddFunds;

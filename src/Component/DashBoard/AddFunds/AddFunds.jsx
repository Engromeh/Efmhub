import React, { useState } from 'react';
import styled from 'styled-components';
import copy from '../../../../photo/Vector.svg';
import etselit from '../../../../photo/etsalit.svg';
import vodefon from '../../../../photo/vodefone.svg';
import bank from '../../../../photo/banx.svg';
import instpay from '../../../../photo/انستباي.svg';
import linkIcon from '../../../../photo/amount.svg';
import orange from '../../../../photo/orange.svg';
import we from '../../../../photo/we pay.svg';

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
  padding: 12px 12px 12px 45px; /* المسافة البادئة لضمان عدم تداخل الأيقونة مع النص */
  border: 1px solid #d4a259;
  border-radius: 8px;
  background-color: #f9f9f9;
  outline: none;
  font-size: 16px;
  

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 10px 10px 40px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 8px 8px 35px;
  }
`;

const SelectInput = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #d4a259;
  border-radius: 8px;
  background-color: #f9f9f9;
  outline: none;
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
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FeesInput = styled.input`
  width: 45%;
  padding: 12px;
  border: 1px solid #d4a259;
  border-radius: 8px;
  background-color: #f9f9f9;
  outline: none;
  @media (max-width: 768px) {
    width: 48%;
    max-width: 180px;
    padding: 6px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 6px;
    font-size: 12px;
  }
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

  @media (max-width: 768px) {
    height: 35px;
  }

  @media (max-width: 480px) {
    height: 30px;
  }
`;

const AddFunds = () => {
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
      <HeaderInfo>
        <Subtitle>Add Funds</Subtitle>
        <Contact>
          <Icon src={copy} alt="icon" />
          01068217368
        </Contact>
      </HeaderInfo>

      <Card>
        {/* اختيار طريقة الدفع */}
        <label>Method of Transfer</label>
        <SelectInput>
          <option value="vodafone">Vodafone Cash</option>
          <option value="orange">Orange Cash</option>
          <option value="we">WE Pay</option>
          <option value="bank">Bank Transfer</option>
        </SelectInput>

        {/* حقل إدخال المبلغ */}
        <label>Amount</label>
        <InputWithIcon>
          <IconInsideInput src={linkIcon} alt="Link Icon" />
          <TextInput type="text" placeholder=""  style={{width:"560px"}}/>
        </InputWithIcon>

        {/* رفع ملف */}
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

        {/* الحقول الخاصة بالرسوم والضرائب */}
        <FeesContainer>
          <FeesInput type="text" placeholder="Fees" value="0" disabled />
          <FeesInput type="text" placeholder="Tax" value="0" disabled />
        </FeesContainer>

        {/* أزرار الإرسال والإلغاء */}
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

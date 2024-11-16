import styled from 'styled-components';
import logo from '../../../../photo/logo withedraw.svg';
import icon from '../../../../photo/amount.svg';
 import vodafone from '../../../../photo/vodefone.svg';
 import instapay from '../../../../photo/انستباي.svg';
import wepay from '../../../../photo/we pay.svg';
import etsalit from '../../../../photo/etsalit.svg';
 import bank from '../../../../photo/banx.svg';

const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Cairo', sans-serif;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  float: left;
`;

const Result = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #d4a259;
  margin-bottom: 10px;
`;

const Balance = styled.div`
  font-size: 1rem;
  color: #d4a259;
  margin-bottom: 20px;
  margin-right: 233px;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const IconInsideInput = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 40px 12px 35px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-size: 16px;
  outline: none;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-size: 16px;
`;

const FooterLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const LogoImage = styled.img`
  height: 30px;
`;

const Currencies = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="EFM Logo" />
        <div>
          <Result>Result</Result>
          <div>Exchange Rate</div>
        </div>
      </Header>
   

      <h3 style={{ fontSize: '1.4rem', color: '#d4a259', marginBottom: '10px' ,marginRight:"315px" }}>EGP $0.00</h3>
      <Balance >Current Balance: 
      <span style={{ color: '#ff8800' }}>0.00 EGP</span>
      </Balance>

      <InputContainer>
        <IconInsideInput src={icon} alt="Amount Icon" />
        <Input type="text" placeholder="Enter amount" />
      </InputContainer>

      <Select>
        <option>USD</option>
        <option>EGP</option>
        <option>SAR</option>
      </Select>

      <FooterLogos>
        <LogoImage src={wepay} alt="WE Pay" />
        <LogoImage src={instapay} alt="Instapay" />
        <LogoImage src={vodafone} alt="Vodafone" />
        <LogoImage src={etsalit} alt="Etsalit" />
        <LogoImage src={bank} alt="Bank Transfer" />
      </FooterLogos>
    </Container>
  );
};

export default Currencies;

import styled from 'styled-components';
import error from '../../../photo/erroro.svg';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;
`;

const ErrorCode = styled.h1`
  font-size: 2rem;
  margin-top: 20px;
  color: #4a4a4a;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Illustration = styled.img`
  width: 462px;
    height: auto;
    max-width: 80%;
    margin-bottom: -17px;

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 480px) {
    width: 350px;
  }
`;

function NotFound() {
  return (
    <NotFoundContainer>
      <Illustration src={error} alt="Error Illustration" />
      <ErrorCode>Error 404</ErrorCode>
    </NotFoundContainer>
  );
}

export default NotFound;

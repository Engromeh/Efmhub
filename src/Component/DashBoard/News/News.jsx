import styled from 'styled-components';
import profileImage from '../../../../photo/photo2.svg';
import mascotImage from '../../../../photo/newws.svg';

const Container = styled.div`
  margin: 40px auto;
  padding: 20px;
  max-width: 1200px;
  background-color: #f8f8f8;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImage = styled.img`
     width: 892px;
    height: 222px;
    border-radius: 50%;
    margin-right: -170px
    margin-right: -169px

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeatureBox = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  flex: 1;
  text-align: center;
  max-width: 280px;
`;

const FeatureTitle = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const MascotImage = styled.img`
  width: 300px;
  height: auto;

  @media (max-width: 768px) {
    width: 200px;
    margin-top: 20px;
  }
`;

const News = () => {
  return (
    <Container>
      <Header>
        <ProfileInfo>
          <ProfileImage src={profileImage} alt="Profile" />
          <ProfileDetails>
            <Name>Hedra Naguib</Name>
            <Description>
              <strong>EFM</strong> is the strongest company for making money online, offering unparalleled features and strong rewards that make it the best choice for everyone.
            </Description>
          </ProfileDetails>
        </ProfileInfo>
      </Header>

      <Section>
        <FeatureBox>
          <FeatureTitle>1- A lifelong source of income</FeatureTitle>
          <FeatureDescription>
            EFM Company offers you a great opportunity to earn money by simply completing simple tasks.
          </FeatureDescription>
        </FeatureBox>

        <FeatureBox>
          <FeatureTitle>2- Ongoing contests and prizes</FeatureTitle>
          <FeatureDescription>
            We have ongoing competitions and events, so be ready to be the winner.
          </FeatureDescription>
        </FeatureBox>

        <FeatureBox>
          <FeatureTitle>3- Membership duration</FeatureTitle>
          <FeatureDescription>
            The EFM company offers you a great opportunity to earn money.
          </FeatureDescription>
        </FeatureBox>

        <FeatureBox>
          <FeatureTitle>4- Subscription price</FeatureTitle>
          <FeatureDescription>
            Only $50 for a lifetime, which means you will enjoy all these benefits forever.
          </FeatureDescription>

        </FeatureBox>
        <MascotImage src={mascotImage} alt="Mascot" />

      </Section>
    </Container>
  );
};

export default News;

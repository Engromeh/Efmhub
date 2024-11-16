import React from 'react';
import styled from 'styled-components';
 
const InvoiceWrapper = styled.div`
  width: 900px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  border: 1px solid #ddd;
`;

// الشريط العلوي المقسم
const TopBar = styled.div`
  display: flex;
  height: 10px;
  overflow: hidden;
`;

const BlackBar = styled.div`
  flex: 1;
  background-color: #000;
  border-top-left-radius: 10px;
`;

const GoldBar = styled.div`
  flex: 4;
  background-color: #f5b950;
  border-top-right-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.img`
  width: 120px;
`;

const InvoiceDetails = styled.div`
  text-align: right;
  font-size: 14px;
  color: #666;
`;

const MembershipTitle = styled.div`
  background-color: #f5b950;
  color: #fff;
  padding: 15px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0;
  border-radius: 8px;
`;

const MembershipDetails = styled.p`
  text-align: center;
  margin: 20px 0;
  line-height: 1.6;
  color: #666;
`;

const BulletList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 0;
  margin-bottom: 30px;

  li {
    font-size: 14px;
    color: #666;
    display: flex;
    align-items: center;
  }
`;

const TableWrapper = styled.div`
  background-color: #fdf4e3;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f5b950;
    color: #fff;
  }
`;

const Total = styled.div`
  background-color: #f5b950;
  color: #fff;
  text-align: center;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 14px;
  color: #888;
  border-top: 1px solid #ddd;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactInfo = styled.div`
  text-align: right;
`;

const InvoicePage = () => {
  return (
    <InvoiceWrapper>
      {/* الشريط العلوي */}
      <TopBar>
        <BlackBar />
        <GoldBar />
      </TopBar>

      {/* Header */}
      <Header style={{backgroundColor:"red" , border:"4px solid black" , marginTop:"20px"}}>
        <Logo src="{logo}" alt="EFM Logo" />
        <InvoiceDetails>
          <p>رقم الفاتورة: 45616161616</p>
          <p>الاسم: مينا ناجي الفادليس اسحاق</p>
          <p>التاريخ: 20 / 11 / 2024</p>
          <p>رقم مرجعي: 5498444496</p>
        </InvoiceDetails>
      </Header>

      {/* Membership Title */}
      <MembershipTitle>العضوية المميزة</MembershipTitle>

      {/* Membership Details */}
      <MembershipDetails>
        مرحبًا بك في شركة EFM، نحن سعداء جدًا بانضمامك إلينا.
      </MembershipDetails>

      {/* قائمة النقاط */}
      <BulletList>
        <li>✔️ مزايا مجانية مدى الحياة</li>
        <li>✔️ دورات استشارية شهرية</li>
        <li>✔️ عمولات تسويقية</li>
        <li>✔️ ورش عمل تطويرية</li>
      </BulletList>

      {/* جدول الأسعار */}
      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>سعر العضوية</th>
              <td>2500.0 EGP</td>
            </tr>
            <tr>
              <th>خصم</th>
              <td>50%</td>
            </tr>
            <tr>
              <th>سعر العضوية بعد الخصم</th>
              <td>1250.0 EGP</td>
            </tr>
            <tr>
              <th>إضافة ضريبة القيمة المضافة</th>
              <td>14%</td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>

      {/* المجموع */}
      <Total>إجمالي: 1360 EGP</Total>

      {/* Footer */}
      <Footer>
        <ServicesList>
          <li>E-Marketing</li>
          <li>SEO</li>
          <li>Content Management</li>
        </ServicesList>
        <ContactInfo>
          <p>@EFM_Hub</p>
          <p>support@efmhub.com</p>
          <p>+201206553442</p>
        </ContactInfo>
      </Footer>
    </InvoiceWrapper>
  );
};

export default InvoicePage;

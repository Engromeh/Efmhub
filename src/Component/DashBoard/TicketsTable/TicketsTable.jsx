import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  overflow-x: auto; /* لجعل الجدول قابلاً للتمرير إذا كان العرض ضيقًا */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    padding: 10px;
    margin: 10px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  min-width: 600px; /* لضمان عرض جيد على الشاشات الصغيرة */

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const TableHeader = styled.th`
  padding: 15px;
  background-color: #f1f3f5;
  color: #7a7a7a;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 8px;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  padding: 15px;
  color: #4a4a4a;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px;
    word-break: break-word; /* لضمان عدم خروج النص عن الشاشة */
  }
`;

const StatusButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  color: #fff;
  margin-right: 10px;
  background-color: ${({ status }) => (status === 'open' ? '#d4a659' : '#6c757d')};

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 10px;
  }
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  background-color: #6c757d;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 10px;
  }
`;

const TicketsTable = () => {
  return (
    <>
      <h2
        style={{
          marginBottom: '-20px',
          marginTop: '20px',
          fontSize: '1.8rem',
          marginLeft: '20px',
          fontWeight: 'bold',
          color: '#808892',
        }}
      >
        Tickets
      </h2>

      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <TableHeader>Date</TableHeader>
              <TableHeader>Ticket ID</TableHeader>
              <TableHeader>Title</TableHeader>
              <TableHeader>Category</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Action</TableHeader>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <TableRow key={index}>
                <TableData>06-11-2024 10:57:43 PM</TableData>
                <TableData>SUPT#994529</TableData>
                <TableData>Test</TableData>
                <TableData>Public</TableData>
                <TableData>
                  <StatusButton status="open">Open</StatusButton>
                </TableData>
                <TableData>
                  <ActionButton>Approved</ActionButton>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </>
  );
};

export default TicketsTable;

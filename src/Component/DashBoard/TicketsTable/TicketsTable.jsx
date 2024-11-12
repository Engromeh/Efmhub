import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  padding: 33px;
  background-color: #f1f3f5;
  color: #7a7a7a;
  font-weight: 500;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  padding: 15px;
  color: #4a4a4a;
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

  ${({ status }) =>
    status === 'open'
      ? `background-color: #d4a659;`
      : `background-color: #6c757d;`}
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
`;

const TicketsTable = () => {
  return (
    <>
    <h2 style={{marginBottom: "-20px", marginTop: "119px" ,fontSize:"1,8rem" ,marginLeft:"65px" ,fontWeight:"bold" , color:'#808892'}}>
     Tickets</h2>

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
          <TableRow>
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
          <TableRow>
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
          <TableRow>
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
          <TableRow>
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
          <TableRow>
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
        </tbody>
      </StyledTable>
    </TableContainer>
    </>
  );
};

export default TicketsTable;

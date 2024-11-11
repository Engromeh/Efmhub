
import { useState } from 'react';
import './Order.css';

const allorder = [
    { id: 'ORD1724598981', price: '28.7 EGP', targetAmount: 100, currentAmount: 2, status: 'success' },
    { id: 'ORD1728326984', price: '28.7 EGP', targetAmount: 100, currentAmount: 0, status: 'Approved' },
    { id: 'ORD1728329320', price: '28.7 EGP', targetAmount: 100, currentAmount: 1, status: 'success' },
    { id: 'ORD1728329706', price: '28.7 EGP', targetAmount: 100, currentAmount: 2, status: 'Approved' },
  ];
  
  const pendingOrders = [
    { id: 'ORD1744598982', price: '15.5 EGP', targetAmount: 50, currentAmount: 10, status: 'Pending' },
    { id: 'ORD1748326985', price: '40.3 EGP', targetAmount: 200, currentAmount: 150, status: 'Pending' },
  ];
  
  const approvedOrders = [
    { id: 'ORD1754598993', price: '30.7 EGP', targetAmount: 80, currentAmount: 80, status: 'Approved' },
    { id: 'ORD1768326996', price: '12.7 EGP', targetAmount: 60, currentAmount: 60, status: 'Approved' },
  ];
  
  const canceledOrders = [
    { id: 'ORD1774598984', price: '25.0 EGP', targetAmount: 120, currentAmount: 20, status: 'Canceled' },
    { id: 'ORD1788326987', price: '19.7 EGP', targetAmount: 75, currentAmount: 0, status: 'Canceled' },
  ];

const Orders = () => {
  const [filter, setFilter] = useState('All');
  

  const getOrders = () => {
    switch (filter) {
      case 'Pending':
        return pendingOrders;
      case 'Approved':
        return approvedOrders;
      case 'Canceled':
        return canceledOrders;
      default:
        return allorder;
    }
  };

  const filteredOrders = getOrders();

  return (
    <div className="container">
      <h2>Orders</h2>
      <div className="buttons">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Pending')}>Pending</button>
        <button onClick={() => setFilter('Approved')}>Approved</button>
        <button onClick={() => setFilter('Canceled')}>Canceled</button>
      </div>
      <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Target Amount</th>
            <th>Current Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.price}</td>
              <td>{order.targetAmount}</td>
              <td>{order.currentAmount}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Orders;

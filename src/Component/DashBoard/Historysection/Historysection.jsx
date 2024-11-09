import historystyles from './Historysection.module.css';

const data = [
  { date: '02 Nov 2024 15:58:01 PM', withdraw: 200, price: 190, status: 'Agree' },
  { date: '02 Nov 2024 12:17:41 PM', withdraw: 200, price: 190, status: 'Pending' },
  { date: '27 Oct 2024 14:45:22 PM', withdraw: 100, price: 70, status: 'Agree' },
  { date: '22 Aug 2024 12:22:36 PM', withdraw: 300, price: 290, status: 'Approved' },
  { date: '27 Oct 2024 14:45:22 PM', withdraw: 100, price: 70, status: 'Agree' },
];

const Historysection = () => {
  return (
    <div className={historystyles.historyContainer}>
      <h2 className={historystyles.historyTitle}>Withdraw History</h2>
      <table className={historystyles.historyTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th className={historystyles.historyTh}>Withdraw</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={historystyles.historyRow}>
              <td>{item.date}</td>
              <td>{item.withdraw}</td>
              <td>{item.price}</td>
              <td>
                <button className={`${historystyles.historyBtn} ${historystyles[item.status.toLowerCase()]}`}>
                  {item.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historysection;

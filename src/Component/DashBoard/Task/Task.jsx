import './Task.css';

const tasks = [
  {
    id: 1,
    title: '"Speed Meets Style – Discover efm\'s Iconic Designs!"',
    commission: '2.5%',
    category: 'Youtube',
    time: '00:21:33',
  },
  {
    id: 2,
    title: '"Speed Meets Style – Discover efm\'s Iconic Designs!"',
    commission: '2.5%',
    category: 'Youtube',
    time: '00:21:33',
  },
  {
    id: 3,
    title: '"Speed Meets Style – Discover efm\'s Iconic Designs!"',
    commission: '2.5%',
    category: 'Youtube',
    time: '00:21:33',
  },
];

const Tasks = () => {
  return (
    <div className="tasks-container">
      <div className="tasks-filter-buttons">
      <h2 className='tasks-titel'>Tasks</h2>
        <button className="tasks-button active">All</button>
        <button className="tasks-button">Cancelled</button>
      </div>
      {tasks.map((task) => (
        <div className="tasks-card" key={task.id}>
          <img src="https://via.placeholder.com/100" alt="Task" className="tasks-image" />
          <div className="tasks-details">
            <h3>{task.title}</h3>
            <p>
              <span>Commission:</span> {task.commission}
            </p>
            <p>
              <span>Category:</span> {task.category}
            </p>
            <p>
              <span>Time:</span> {task.time}
            </p>
          </div>
          <div className="tasks-buttons">
            <button className="tasks-view-task">View Task</button>
            <button className="tasks-cancelled">Cancelled</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;

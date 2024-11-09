import React from 'react';
import styles from './Task.module.css';

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
    <div className={styles.tasksContainer}>
      <h2 className={styles.tasksTitle}>Tasks</h2>
      <div className={styles.tasksFilterButtons}>
        <button className={`${styles.tasksButton} ${styles.tasksButtonActive}`}>All</button>
        <button className={styles.tasksButton}>Cancelled</button>
      </div>
      {tasks.map((task) => (
        <div className={styles.tasksCard} key={task.id}>
          <img src="https://via.placeholder.com/100" alt="Task" className={styles.tasksImage} />
          <div className={styles.tasksDetails}>
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
          <div className={styles.tasksButtons}>
            <button className={styles.tasksViewTask}>View Task</button>
            <button className={styles.tasksCancelled}>Cancelled</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;

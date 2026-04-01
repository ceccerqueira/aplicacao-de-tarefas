import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { removeTask } = useContext(TaskContext);

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
      <h3>{task.title}</h3>
      <p>{task.desc}</p>
      <button onClick={() => removeTask(task.id)} style={{ color: 'red' }}>Excluir</button>
    </div>
  );
};

export default TaskItem;
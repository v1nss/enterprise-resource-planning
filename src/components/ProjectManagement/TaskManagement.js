import React, { useState } from 'react';

const TaskManagement = () => {
  const [taskData, setTaskData] = useState({
    taskName: '',
    dueDate: '',
    priority: 'Low', // Default priority
  });

  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: new Date().getTime(), // Unique ID for each task
      ...taskData,
    };

    setTasks([...tasks, newTask]);

    setTaskData({
      taskName: '',
      dueDate: '',
      priority: 'Low',
    });
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h2>Task Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input
            type="text"
            name="taskName"
            value={taskData.taskName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Due Date:
          <input
            type="date"
            name="dueDate"
            value={taskData.dueDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Priority:
          <select name="priority" value={taskData.priority} onChange={handleInputChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Task</button>
      </form>

      <div>
        <h3>Task List:</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.taskName} - Due Date: {task.dueDate} - Priority: {task.priority}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManagement;
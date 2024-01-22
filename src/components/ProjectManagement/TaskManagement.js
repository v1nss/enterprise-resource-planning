import React, { useState } from 'react';

const TaskManagement = () => {
  const [taskData, setTaskData] = useState({
    taskName: '',
    dueDate: '',
    priority: 'Low', // Default priority
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the task data, such as saving it to a database
    console.log('Task Data:', taskData);
    // Add additional logic here based on your requirements
    // Clear the form after submission
    setTaskData({
      taskName: '',
      dueDate: '',
      priority: 'Low',
    });
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
    </div>
  );
};

export default TaskManagement;
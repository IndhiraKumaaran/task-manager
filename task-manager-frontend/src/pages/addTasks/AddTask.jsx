import React, { useState } from 'react';
import './AddTask.css';

const AddTask = () => {
  // 🧠 State to hold input values
  const [task, setTask] = useState({
    headline: '',
    description: '',
    deadline: '',
    status: 'Pending',
  });

  // 🎯 This updates state when user types
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // 🚀 This will run when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Task submitted:', task);

    // Here you would POST to your API (without sending 'id' as it's auto-generated):
    await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task), // No 'id' is included
    });
  };

  return (
    <div className="add-task-container">
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          name="headline"
          placeholder="Headline"
          value={task.headline}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="deadline"
          value={task.deadline}
          onChange={handleChange}
          required
        />
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In-Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;

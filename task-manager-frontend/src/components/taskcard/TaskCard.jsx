import React, { useState } from 'react';
import './TaskCard.css';
import { NavLink } from 'react-router-dom';

const TaskCard = ({ id, headline, description, deadline, status, tags }) => {
  const [taskStatus, setTaskStatus] = useState(status);

  const handleStatusChange = (event) => {
    setTaskStatus(event.target.value);
  };

  return (
    <div className="task-card" id={`task-${id}`}>
      <div className="task-header">
        <h3 className="task-headline">
          <span className="task-id">#{id}</span>{' '}
          <NavLink to={`/todo/${id}`}>{headline}</NavLink>
        </h3>
        <span className={`task-status ${taskStatus.toLowerCase()}`}>{taskStatus}</span>
      </div>
      <p className="task-description">{description}</p>
      <div className="task-footer">
        <span className="task-deadline">{`Deadline: ${deadline}`}</span>
        <div className="task-tags">
          {tags && tags.length > 0 ? (
            tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))
          ) : (
            <span className="tag">No Tags</span>
          )}
        </div>
        <div className="task-actions">
          <select className="status-select" value={taskStatus} onChange={handleStatusChange}>
            <option value="Completed">Completed</option>
            <option value="In-Progress">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

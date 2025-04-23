import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './TaskPage.module.css';

const TaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    headline: '',
    description: '',
    status: '',
    deadline: '',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    async function fetchTask() {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      if (data) {
        setTask(data);
        setFormData({
          headline: data.headline,
          description: data.description,
          status: data.status,
          deadline: data.deadline,
          tags: data.tags || []
        });
      }
    }

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagAdd = () => {
    if (tagInput.trim() !== '' && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput('');
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const handleSave = async () => {
    const updatedTask = { ...task, ...formData };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    if (res.ok) {
      setTask(updatedTask);
      setIsEditing(false);
    } else {
      alert('Failed to update task');
    }
  };

  if (!task) {
    return <p>Loading task details...</p>;
  }

  return (
    <div className={styles.taskPageWrapper}>
      <div className={styles.taskPage}>
        <h2>
          {isEditing ? (
            <input
              type="text"
              name="headline"
              value={formData.headline}
              onChange={handleChange}
            />
          ) : (
            task.headline
          )}
        </h2>

        <p><strong>Description:</strong></p>
        {isEditing ? (
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        ) : (
          task.description
        )}

        <p><strong>Status:</strong></p>
        {isEditing ? (
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Completed">Completed</option>
            <option value="In-Progress">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
        ) : (
          task.status
        )}

        <p><strong>Deadline:</strong></p>
        {isEditing ? (
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
        ) : (
          task.deadline
        )}

        <div className={styles.taskTags}>
          <strong>Tags:</strong>
          <div className={styles.tagContainer}>
            {(isEditing ? formData.tags : task.tags)?.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
                {isEditing && (
                  <button
                    className={styles.removeTag}
                    onClick={() => handleTagRemove(tag)}
                  >
                    ×
                  </button>
                )}
              </span>
            ))}
          </div>
          {isEditing && (
            <div className={styles.tagInputArea}>
              <input
                type="text"
                value={tagInput}
                onChange={handleTagChange}
                placeholder="Add a tag"
              />
              <button onClick={handleTagAdd}>Add Tag</button>
            </div>
          )}
        </div>

        <div className={styles.taskActions}>
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          )}
          <button onClick={() => navigate('/')}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;

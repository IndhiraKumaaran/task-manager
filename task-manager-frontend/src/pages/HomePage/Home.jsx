import React, { useEffect, useState } from 'react'
import TaskCard from '../../components/taskcard/TaskCard';

const Home = () => {
    const [tasks, setTasks] = useState([]);
  
    async function fetchListOfTasks() {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      if (data) {
        setTasks(data);
      }
    }
  
    useEffect(() => {
      fetchListOfTasks();
    }, []);
  
    return (
      <div>
        <div className="task-container">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              id={task.id}
              headline={task.headline}
              description={task.description}
              deadline={task.deadline}
              status={task.status}
              tags={task.tags}
            />
          ))}
        </div>
      </div>)
  
}

export default Home

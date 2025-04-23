import React from 'react'
import { Outlet } from 'react-router-dom'
import TaskPage from '../pages/taskPage/TaskPage'
const TaskLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default TaskLayout

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RootLayout from './layouts/RootLayout';
import Home from './pages/HomePage/Home'; // make sure this path is correct
import Completed from './pages/completed/Completed';
import Todo from './pages/to-do/Todo';
import AddTask from './pages/addTasks/AddTask';
import TaskPage from './pages/taskPage/TaskPage';
import TaskLayout from './layouts/TaskLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public login route without layout */}
        <Route path="login" element={<LoginPage />} />
  
        {/* All other routes under RootLayout */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} /> 
          {/* <Route path="1" element={<TaskPage />} />
          <Route path="todo" element={<Todo />} /> */}
          <Route path="completed" element={<Completed />} />
          <Route path="addtask" element={<AddTask />} />
          <Route path="/todo" element={<TaskLayout/>} >
          {/* dynamically displayd in outlet */}
          
          <Route index element={<Todo/>}/>
          <Route path=':id' element={<TaskPage/>}>
          </Route>
        
        </Route> 
        </Route>
      </>
    )
  );
  

  return <RouterProvider router={router} />;
}

export default App;

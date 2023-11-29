/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Todo from './components/Todo';
import AddTask from './components/AddTask.jsx';
import DeleteTask from './components/DeleteTask.jsx';
import EditForm from './components/EditForm.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo />,
    children: [
      {
        path: "/create-task",
        element: <AddTask />,
      },
      {
        path: "/edit-task",
        element: <EditForm />,
      },
      
    ]
  },
  
  
  

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

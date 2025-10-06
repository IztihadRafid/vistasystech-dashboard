import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import DashboardAdminLayout from './DashboardLayoutAdmin/DashboardAdminLayout';
import Projects from './components/Projects/Projects';
import Clients from './components/Clients/Clients';
import Communication from './components/Communication/Communication';
import Ams from './components/AMS/Ams';
import Attendancelogs from './components/AMS/Attendancelogs';
import Payroll from './components/AMS/Payroll';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardAdminLayout></DashboardAdminLayout>,
    children: [
      {
        path: "projects",
        element: <Projects></Projects>
      },
      {
        path: "clients",
        element: <Clients></Clients>
      },
      {
        path: "communication",
        element: <Communication></Communication>
      },
      {
        path: "ams",
        // element: <Ams></Ams>,
        children:[
          {
            path: 'attendancelogs',
            element: <Attendancelogs></Attendancelogs>
          },
           {
            path: 'payroll',
            element: <Payroll></Payroll> // device managemnt component
          },
           {
            path: 'leave',
            element: "" // leave managment component
          },
           {
            path: 'notification',
            element: "" // notification component
          },
        ]
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />,
  </StrictMode>,
)

import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import HumanResources from './pages/HumanResources';
import ProjectManagement from './pages/ProjectManagement';
import SupplyChain from './pages/SupplyChain'; 

const router = createBrowserRouter([
  {
    path: "/",
    // element: <MinimalLayout />,
    errorElement: <div>Naliligaw ka yata?</div>,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "human-resources",
        element: <HumanResources />
      },
      {
        path: "project-management",
        element: <ProjectManagement />
      },
      {
        path: "supply-chain",
        element: <SupplyChain />
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
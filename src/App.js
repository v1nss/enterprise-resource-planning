import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";

import Navbar from './Navbar';
import HumanResources from './pages/HumanResources';
import ProjectManagement from './pages/ProjectManagement';
import SupplyChain from './pages/SupplyChain'; 


function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/"/>
          <Route path="/human-resources" element={<HumanResources/>} />
          <Route path="/project-manegament" element={<ProjectManagement/>} />
          <Route path="/supply-chain" element={<SupplyChain/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
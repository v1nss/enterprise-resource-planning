import React from "react";
import HumanResources from "./HumanResources";
import ProjectManagement from "./ProjectManagement";
import SupplyChain from "./SupplyChain";

const Dashboard = () => {
    return (
      <div>
        <h1>Dashboard</h1>
        <HumanResources />
        <ProjectManagement />
        <SupplyChain />
      </div>
    );
  };
  
  export default Dashboard;
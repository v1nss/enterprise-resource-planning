import React from "react";

import {
    Link,
  } from "react-router-dom";

import PlanningScheduling from "../components/ProjectManagement/PlanningScheduling";
import ProjectBudgeting from "../components/ProjectManagement/ProjectBudgeting";
import TaskManagement from "../components/ProjectManagement/TaskManagement";

const ProjectManagement = () => {
    return (
      <div>
        <h1>Project Management</h1>
        <PlanningScheduling />
        <ProjectBudgeting />
        <TaskManagement />
        {/* <div>
          <Link to="/">
            <button>
              asda 
            </button>
          </Link>
          <Link to="/human-resources">
            <button>
              asda 
            </button>
          </Link>
          <Link to="/project-management">
            <button>
              asda 
            </button>
          </Link>
          <Link to="/supply-chain">
            <button>
              asda 
            </button>
          </Link>
        </div> */}
      </div>
      
    );
  };
  
  export default ProjectManagement;
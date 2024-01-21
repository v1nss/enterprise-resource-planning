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
      </div>
      
    );
  };
  
  export default ProjectManagement;
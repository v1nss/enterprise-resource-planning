import React from "react";
import PlanningScheduling from "../components/ProjectManagement/PlanningScheduling.js";
import ProjectBudgeting from "../components/ProjectManagement/ProjectBudgeting.js";
import TaskManagement from "../components/ProjectManagement/TaskManagement.js";

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
import React, { useState } from "react";

import {
    Link,
  } from "react-router-dom";

import PlanningScheduling from "../components/ProjectManagement/PlanningScheduling";
import ProjectBudgeting from "../components/ProjectManagement/ProjectBudgeting";
import TaskManagement from "../components/ProjectManagement/TaskManagement";

const ProjectManagement = () => {

  const [showPlanningScheduling, setShowPlanningScheduling] = useState(false);
  const [showProjectBudgeting, setShowProjectBudgeting] = useState(false);
  const [showTaskManagement, setShowTaskManagement] = useState(false);

  const handlePlanningSchedulingClick = () => {
    setShowPlanningScheduling(true);
    setShowProjectBudgeting(false);
    setShowTaskManagement(false);
  };

  const handleProjectBudgetingClick = () => {
    setShowPlanningScheduling(false);
    setShowProjectBudgeting(true);
    setShowTaskManagement(false);
  };

  const handleTaskManagementClick = () => {
    setShowPlanningScheduling(false);
    setShowProjectBudgeting(false);
    setShowTaskManagement(true);
  };

    return (
      <div>
      <div>
        <button onClick={handlePlanningSchedulingClick}>Employee Information</button>
        <button onClick={handleProjectBudgetingClick}>Time Attendance</button>
        <button onClick={handleTaskManagementClick}>Payroll Processing</button>
      </div>

      {showPlanningScheduling && <PlanningScheduling />}
      {showProjectBudgeting && <ProjectBudgeting />}
      {showTaskManagement && <TaskManagement />}
      </div>
      
    );
  };
  
  export default ProjectManagement;
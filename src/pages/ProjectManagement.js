import React, { useEffect, useState, createContext, useContext } from 'react';
import PlanningScheduling from "../components/ProjectManagement/PlanningScheduling";
import ProjectBudgeting from "../components/ProjectManagement/ProjectBudgeting";
import TaskManagement from "../components/ProjectManagement/TaskManagement";

const ProjectManagementContext = createContext();

const ProjectManagementProvider = ({ children }) => {
  const [projectsData, setProjectsData] = useState({
    schedules: [],
    projects: [],
    tasks: [],
  });

  useEffect(() => {
    // Load data from local storage when the component mounts
    const storedData = localStorage.getItem('projectsData');
    if (storedData) {
      setProjectsData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever projectsData changes
    localStorage.setItem('projectsData', JSON.stringify(projectsData));
  }, [projectsData]);

  return (
    <ProjectManagementContext.Provider value={{ projectsData, setProjectsData }}>
      {children}
    </ProjectManagementContext.Provider>
  );
};

const useProjectManagement = () => {
  const context = useContext(ProjectManagementContext);
  if (!context) {
    throw new Error('useProjectManagement must be used within a ProjectManagementProvider');
  }
  return context;
};

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
    <ProjectManagementProvider>
      <div>
        <div className="ProjManage">
          <button onClick={handlePlanningSchedulingClick}>Planning Scheduling</button>
          <button onClick={handleProjectBudgetingClick}>Project Budgeting</button>
          <button onClick={handleTaskManagementClick}>Task Management</button>
        </div>

        {showPlanningScheduling && <PlanningScheduling />}
        {showProjectBudgeting && <ProjectBudgeting />}
        {showTaskManagement && <TaskManagement />}
      </div>
    </ProjectManagementProvider>
  );
};

export default ProjectManagement;
export { ProjectManagementProvider, useProjectManagement };
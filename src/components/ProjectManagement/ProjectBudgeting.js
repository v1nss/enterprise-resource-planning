import React, { useState } from 'react';

const ProjectBudgeting = () => {
  const [projectBudget, setProjectBudget] = useState({
    projectName: '',
    estimatedCost: '',
    description: '',
  });

  const [projects, setProjects] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectBudget({ ...projectBudget, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: new Date().getTime(), // Unique ID for each project
      ...projectBudget,
    };

    setProjects([...projects, newProject]);

    setProjectBudget({
      projectName: '',
      estimatedCost: '',
      description: '',
    });
  };

  const handleDelete = (projectId) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  return (
    <div>
      <h2>Project Budgeting</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Name:
          <input
            type="text"
            name="projectName"
            value={projectBudget.projectName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Estimated Cost:
          <input
            type="text"
            name="estimatedCost"
            value={projectBudget.estimatedCost}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={projectBudget.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit Project Budget</button>
      </form>

      <div>
        <h3>Project List:</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              {project.projectName} - Estimated Cost: {project.estimatedCost}
              <button onClick={() => handleDelete(project.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectBudgeting;
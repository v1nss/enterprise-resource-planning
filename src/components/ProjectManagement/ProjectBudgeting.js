import React, { useState } from 'react';

const ProjectBudgeting = () => {
  const [projectBudget, setProjectBudget] = useState({
    projectName: '',
    estimatedCost: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectBudget({ ...projectBudget, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Project Budget Data:', projectBudget);

    setProjectBudget({
      projectName: '',
      estimatedCost: '',
      description: '',
    });
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
    </div>
  );
};

export default ProjectBudgeting;
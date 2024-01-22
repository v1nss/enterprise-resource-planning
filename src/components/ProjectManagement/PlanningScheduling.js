import React, { useState } from 'react';

const PlanningScheduling = () => {
  const [plan, setPlan] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlan({ ...plan, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the plan data, such as saving it to a database
    console.log('Plan Data:', plan);
    // Add additional logic here based on your requirements
    // Clear the form after submission
    setPlan({
      title: '',
      date: '',
      time: '',
      description: '',
    });
  };

  return (
    <div>
      <h2>Planning Scheduling</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={plan.title} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" value={plan.date} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Time:
          <input type="time" name="time" value={plan.time} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={plan.description} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit Plan</button>
      </form>
    </div>
  );
};

export default PlanningScheduling;
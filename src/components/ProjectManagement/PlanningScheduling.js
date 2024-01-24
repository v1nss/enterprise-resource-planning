import React, { useState, useEffect } from 'react';
import { useProjectManagement } from '../../pages/ProjectManagement';

const PlanningScheduling = () => {
  const { projectsData, setProjectsData } = useProjectManagement();
  const { schedules } = projectsData;

  const [plan, setPlan] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
  });

  useEffect(() => {

    const storedSchedules = localStorage.getItem('schedules');
    if (storedSchedules) {
      setProjectsData((prevData) => ({
        ...prevData,
        schedules: JSON.parse(storedSchedules),
      }));
    }
  }, [setProjectsData]);

  useEffect(() => {
    localStorage.setItem('schedules', JSON.stringify(schedules));
    console.log(schedules);
  }, [schedules]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlan({ ...plan, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSchedule = {
      id: new Date().getTime(),
      ...plan,
    };

    setProjectsData((prevData) => ({
      ...prevData,
      schedules: [...prevData.schedules, newSchedule],
    }));

    setPlan({
      title: '',
      date: '',
      time: '',
      description: '',
    });
  };

  const handleDelete = (scheduleId) => {
    setProjectsData((prevData) => ({
      ...prevData,
      schedules: prevData.schedules.filter((schedule) => schedule.id !== scheduleId),
    }));
  };

  return (
    <div className='planning'>
      <div className='planSched'>
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

      <div className='SchedList'>
        <h3>Schedule List</h3>
        <ul>
          {schedules.map((schedule) => (
            <li key={schedule.id}>
              <a>{schedule.title} - Date: {schedule.date}, Time: {schedule.time}</a>
              <button onClick={() => handleDelete(schedule.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanningScheduling;
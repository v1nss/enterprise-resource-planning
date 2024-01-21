import React, { useState } from 'react';

const EmployeeInformation = () => {
  // State for employee information
  const [employeeData, setEmployeeData] = useState({
    name: '',
    position: '',
    department: '',
    salary: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the employeeData here, like sending it to a server
    console.log('Employee Data:', employeeData);
  };

  return (
    <div>
      <h2>Employee Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={employeeData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Position:
          <input type="text" name="position" value={employeeData.position} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Department:
          <input type="text" name="department" value={employeeData.department} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Salary:
          <input type="text" name="salary" value={employeeData.salary} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeInformation;

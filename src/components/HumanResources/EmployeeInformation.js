import React, { useContext, useContext } from 'react';
import { EmployeeContext } from '../../pages/HumanResources';
import { EmployeeContext } from '../../pages/HumanResources';

const EmployeeInformation = () => {
  const { employees, addEmployee, setEmployees } = useContext(EmployeeContext); // Correct usage of useContext
  const [employeeData, setEmployeeData] = React.useState({
    name: '',
    position: '',
    department: '',
    salary: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', employeeData);
    addEmployee(employeeData);
    setEmployeeData({
      name: '',
      position: '',
      department: '',
      salary: '',
    });
  };

  const handleDelete = (name) => {
    const updatedEmployees = employees.filter((employee) => employee.name !== name);
    setEmployees(updatedEmployees);
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

      <div>
        <h3>Employee List:</h3>
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              {employee.name} -{' '}
              <button onClick={() => handleDelete(employee.name)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeInformation;
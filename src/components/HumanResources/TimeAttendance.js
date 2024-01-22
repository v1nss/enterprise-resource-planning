import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../pages/HumanResources';

const TimeAttendance = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const markAttendance = () => {
    if (selectedEmployee) {
      const currentTime = new Date();

      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.name === selectedEmployee
            ? { ...employee, attendanceTime: currentTime.toLocaleTimeString() }
            : employee
        )
      );

<<<<<<< HEAD
      console.log(`Attendance Marked at ${currentTime.toLocaleTimeString()} for ${selectedEmployee}`);
    } else {
      alert('Please select an employee before marking attendance.');
=======
      console.log(Attendance Marked at ${currentTime.toLocaleTimeString()} for ${selectedEmployee});
    } else {
      console.log('Please select an employee before marking attendance.');
>>>>>>> jinan
    }
  };

  return (
    <div>
      <h2>Time Attendance</h2>
<<<<<<< HEAD

=======
      <label>
        Select Employee:
        <select value={selectedEmployee} onChange={handleEmployeeChange}>
          <option value="" disabled>
            Select an employee
          </option>
          {employees.map((employee) => (
            <option key={employee.name} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
      </label>
>>>>>>> jinan

      <button onClick={markAttendance}>Mark Attendance</button>

      <div>
        <h3>Employee List with Attendance Time:</h3>
        <ul>
          {employees.map((employee) => (
            <li key={employee.name}>
              {employee.name} - Attendance Time: {employee.attendanceTime || 'Not Marked'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeAttendance;
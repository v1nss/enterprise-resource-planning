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

      console.log(`Attendance Marked at ${currentTime.toLocaleTimeString()} for ${selectedEmployee}`);
    } else {
      alert('Please select an employee before marking attendance.');
    }
  };

  return (
    <div>
      <h2>Time Attendance</h2>


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
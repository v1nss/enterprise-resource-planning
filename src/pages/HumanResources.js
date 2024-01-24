import React, { useContext, useState, createContext } from 'react';
import EmployeeInformation from '../components/HumanResources/EmployeeInformation';
import TimeAttendance from '../components/HumanResources/TimeAttendance';
import PayrollProcessing from '../components/HumanResources/PayrollProcessing';

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

const HumanResources = () => {

  const [showEmployeeInformation, setShowEmployeeInformation] = useState(false);
  const [showTimeAttendance, setShowTimeAttendance] = useState(false);
  const [showPayrollProcess, setShowPayrollProcess] = useState(false);

  const handleEmployeeInformationClick = () => {
    setShowEmployeeInformation(true);
    setShowTimeAttendance(false);
    setShowPayrollProcess(false);
  };

  const handleTimeAttendanceClick = () => {
    setShowTimeAttendance(true);
    setShowEmployeeInformation(false);
    setShowPayrollProcess(false);
  };

  const handlePayrollProcessClick = () => {
    setShowTimeAttendance(false);
    setShowEmployeeInformation(false);
    setShowPayrollProcess(true);
  };

  return (
    <EmployeeProvider>
      <div>
      <div className='humanResources'>
        <button onClick={handleEmployeeInformationClick}>Employee Information</button>
        <button onClick={handleTimeAttendanceClick}>Time Attendance</button>
        <button onClick={handlePayrollProcessClick}>Payroll Processing</button>
      </div>

      {showEmployeeInformation && <EmployeeInformation />}
      {showTimeAttendance && <TimeAttendance />}
      {showPayrollProcess && <PayrollProcessing />}
      </div>
    </EmployeeProvider>
  );
};

export default HumanResources;
export { EmployeeContext, EmployeeProvider };
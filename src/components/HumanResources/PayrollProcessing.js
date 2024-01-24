import React, { useContext, useState, useEffect } from 'react';
import { EmployeeContext } from '../../pages/HumanResources';

const PayrollProcessing = () => {
  const { employees } = useContext(EmployeeContext);
  const [payrollProcessed, setPayrollProcessed] = useState(false);

  const processPayroll = () => {

    const updatedEmployees = employees.map((employee) => {
      const salary = parseFloat(employee.salary || 0);
      const payroll = calculatePayroll(salary);
      return { ...employee, payroll };
    });


    setPayrollProcessed(true);
  };

  const calculatePayroll = (salary) => {

    return salary * 0.9; 
  };

  useEffect(() => {
    // Update local storage whenever employees change
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  return (
    <div className='payroll'>
      <h2>Payroll Processing</h2>
      <button onClick={processPayroll} disabled={payrollProcessed}>
        Process Payroll
      </button>
      {payrollProcessed && (
        <div>
          <p>Payroll has been processed for each employee:</p>
          <ul>
            {employees.map((employee) => (
              <li key={employee.name}>
                <a>{employee.name}: Original Salary - {employee.salary}, Computed Payroll - {employee.payroll}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PayrollProcessing;
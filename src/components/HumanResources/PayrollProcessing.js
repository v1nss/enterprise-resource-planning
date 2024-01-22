import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../pages/HumanResources';

const PayrollProcessing = () => {
  const { employees } = useContext(EmployeeContext);
  const [payrollProcessed, setPayrollProcessed] = useState(false);

  const processPayroll = () => {
    // Assuming each employee has a "salary" property
    const updatedEmployees = employees.map((employee) => {
      const salary = parseFloat(employee.salary || 0);
      const payroll = calculatePayroll(salary);
      return { ...employee, payroll };
    });

    // Set the updated employees back to the context
    // You may want to implement a function in the context to update employees
    // For example, context.updateEmployees(updatedEmployees);

    // Set the state to indicate that payroll has been processed
    setPayrollProcessed(true);
  };

  const calculatePayroll = (salary) => {
    // Implement your payroll calculation logic here
    // This is just a simple example, you may need to consider taxes, deductions, etc.
    return salary * 0.9; // For example, 90% of the salary
  };

  return (
    <div>
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
                {employee.name}: Original Salary - {employee.salary}, Computed Payroll - {employee.payroll}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PayrollProcessing;
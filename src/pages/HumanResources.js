import React from "react";

import {
    Link,
  } from "react-router-dom";

import EmployeeInformation from "../components/HumanResources/EmployeeInformation";
import PayrollProcessing from "../components/HumanResources/PayrollProcessing";
import TimeAttendance from "../components/HumanResources/TimeAttendance";

const HumanResources = () => {
    return (
      <div>
        <h1>Human Resources</h1>
        <EmployeeInformation />
        <PayrollProcessing />
        <TimeAttendance />
      </div>
    );
  };
  
  export default HumanResources;
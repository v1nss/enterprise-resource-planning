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
        {/* <div>
          <Link to="/">
            <button>
              asda 
            </button>
          </Link>
          <Link to="/human-resources">
            <button>
              asda 
            </button>
          </Link>
          <Link to="/project-management">
            <button>
              asda 
            </button>
          </Link>
          <Link to="/supply-chain">
            <button>
              asda 
            </button>
          </Link>
        </div> */}
      </div>
    );
  };
  
  export default HumanResources;
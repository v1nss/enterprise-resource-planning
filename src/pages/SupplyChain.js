import React from "react";

import {
    Link,
  } from "react-router-dom";

import InventoryManagement from "../components/SupplyChain/InventoryManagement"

const SupplyChain = () => {
    return (
      <div>
        <h1>Supply Chain Management</h1>
        <InventoryManagement />
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
  
  export default SupplyChain;
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
      </div>
    );
  };
  
  export default SupplyChain;
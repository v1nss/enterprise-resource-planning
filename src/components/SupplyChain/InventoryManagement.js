import React, { useState } from "react";

import { FiTrash } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";

const InventoryManagement = () => {
  const [allExpense, setAllExpense] = useState([]);
  const [newExpense, setNewExpense] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [, setNewTotalPrice] = useState("");
  const [, setIsEditingTodo] = useState(false);

  const handleSum = () => {
    let updatedExpenseArr = [...allExpense];
    let totalNewPrice = updatedExpenseArr.reduce(
      (total, expense) => total + parseFloat(expense.totalprice),
      0
    );
    console.log(totalNewPrice);
  };
  
  const handleAddNewExpense = () => {
    const price = parseFloat(newPrice);
    const quantity = parseFloat(newQuantity);
  
    const newTotalPrice = isNaN(price) || isNaN(quantity) ? null : price * quantity;
    let newProductListObj = {
      title: newExpense,
      price: newPrice,
      quantity: newQuantity,
      totalprice: newTotalPrice,
    };
    if (newExpense.trim() !== "") {
      let updatedProductList = [...allExpense];
      updatedProductList.push(newProductListObj);
      setAllExpense(updatedProductList);
      console.log(updatedProductList);
      localStorage.setItem("expenselist", JSON.stringify(updatedProductList));
      setNewPrice("");
      setNewQuantity("");
      setNewExpense("");
      setNewTotalPrice(""); 
      
    } else {
      alert("Title cannot be empty. Please enter product name.");
    }
      handleSum();
  };

  const handleInventoryDelete = (index) => {
    let reducedTodos = [...allExpense];
    reducedTodos.splice(index, 1);
    localStorage.setItem("expenselist", JSON.stringify(reducedTodos));
    setAllExpense(reducedTodos);
  };

  const handleCompute = () => {

  }

  return (
    <div>
      <div className="inventory-input">
        <div className="inventory-input-item">
          <label>Title:</label>
          <input
            type="text"
            value={newExpense}
            onChange={(e) => setNewExpense(e.target.value)}
            placeholder="Product"
          />
        </div>
        <div className="inventory-input-item">
          <label>Price:</label>
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="Price"
          />
        </div>
        <div className="inventory-input-item">
          <label>Quantity:</label>
          <input
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
            placeholder="Quantity"
          />
        </div>
        <div className="inventory-input-item">
          <button
            className="primary-btn"
            type="button"
            onClick={() => {
              handleAddNewExpense();
            }}
          >
            Add
          </button>
          <button className="sum-btn" type="button" onClick={handleSum}>
            Sum
          </button>
        </div>
        <div className="inventory-list-container">
          {allExpense.map((item, index) => (
            <div>
              <div>
                <h3>product: {item.title}</h3>
                <p>price: {item.price}</p>
                <p>quantity: {item.quantity}</p>
                <p>totalprice: {item.totalprice}</p>
              </div>
              <div className="inventory-list-buttons">
                <FiTrash
                  title="Delete?"
                  className="icon-delete"
                  onClick={() => handleInventoryDelete(index)}
                />
                <FiEdit2
                  title="Edit?"
                  className="icon"
                  onClick={() => {
                    setIsEditingTodo(true);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;

import React, { useState, useEffect } from "react";

import { FiTrash } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";

const InventoryManagement = () => {
  const [allExpense, setAllExpense] = useState([]);
  const [newExpense, setNewExepense] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);
  const [, setIsEditingTodo] = useState(false);
  const [newEditedTodoTitle, setNewEditedTodoTitle] = useState("");
  const [newEditedDescription, setNewEditedDescription] = useState("");
  const [editingTodoIndex, setEditingTodoIndex] = useState(null);

  const handleAddNewExpense = () => {
    let newToDoObj = {
      title: newExpense,
      description: newPrice,
    };
    if (newExpense.trim() !== "") {
      let updatedTodoArr = [...allExpense];
      updatedTodoArr.push(newToDoObj);
      setAllExpense(updatedTodoArr);
      localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
      setNewPrice("");
      setNewQuantity("");
      setNewExepense("");
    } else {
      alert("Title cannot be empty. Please enter a title.");
    }
  };

  const handleInventoryDelete = (index) => {
    let reducedTodos = [...allExpense];
    reducedTodos.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(reducedTodos));
    setAllExpense(reducedTodos);
  };

  const handleSum = () => {
    let updatedTodoArr = [...allExpense];
    let totalNewPrice = updatedTodoArr.reduce(
      (total, todo) => total + parseFloat(todo.price),
      0
    );
    console.log(totalNewPrice);
  };

  return (
    <div>
      <div className="inventory-input">
        <div className="inventory-input-item">
          <label>Title:</label>
          <input
            type="text"
            value={newExpense}
            onChange={(e) => setNewExepense(e.target.value)}
            placeholder="What's the title of your To Do?"
          />
        </div>
        <div className="inventory-input-item">
          <label>Quantity:</label>
          <input
            type="text"
            value={newExpense}
            onChange={(e) => setNewQuantity(e.target.value)}
            placeholder="What's the title of your To Do?"
          />
        </div>
        <div className="inventory-input-item">
          <label>Price:</label>
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="What's the description of your To Do?"
          />
        </div>
        <div className="inventory-input-item">
          <button
            className="primary-btn"
            type="button"
            onClick={handleAddNewExpense}
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
                <h3>{item.title}</h3>
                <p>{item.price}</p>
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
                    setEditingTodoIndex(index);
                  }}
                />
                {/* <FiCheck
                  title="Completed?"
                  className="check-icon"
                  onClick={() => handleComplete(index)}
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
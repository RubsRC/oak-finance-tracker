// src/components/Expenses.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get("/api/expenses").then((response) => setExpenses(response.data));
  }, []);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((item) => (
          <li key={item._id}>
            {item.category}: ${item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;

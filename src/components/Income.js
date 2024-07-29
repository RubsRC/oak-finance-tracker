// src/components/Income.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Income() {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    axios.get("/api/income").then((response) => setIncome(response.data));
  }, []);

  return (
    <div>
      <h2>Income</h2>
      <ul>
        {income.map((item) => (
          <li key={item._id}>
            {item.type}: ${item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Income;

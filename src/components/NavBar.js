// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/income">Income</Link>
        </li>
        <li>
          <Link to="/expenses">Expenses</Link>
        </li>
        <li>
          <Link to="/credit-cards">Credit Cards</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

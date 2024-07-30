// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../auth"; // Import the logout function

function NavBar() {
  const handleLogout = () => {
    logout(); // Call the logout function on button click
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Finance Tracker
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/income">
              Income
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/expenses">
              Expenses
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/credit-cards">
              Credit Cards
            </Link>
          </li>
        </ul>
        <button className="btn btn-outline-light" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default NavBar;

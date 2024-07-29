// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import CreditCards from "./components/CreditCards";
// Import Bootstrap CSS in App.js
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Welcome to Finance Tracker</h1>} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/credit-cards" element={<CreditCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

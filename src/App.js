// Example in App.js or a top-level component
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import CreditCards from "./components/CreditCards";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { checkTokenAndRedirect } from "./auth";

function App() {
  useEffect(() => {
    checkTokenAndRedirect();
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <ProtectedRoute path="/income" component={Income} />
          <ProtectedRoute path="/expenses" component={Expenses} />
          <ProtectedRoute path="/credit-cards" component={CreditCards} />
          <Route
            path="/"
            exact
            component={() => <h1>Welcome to Finance Tracker</h1>}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

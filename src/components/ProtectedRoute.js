// ProtectedRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated =
    !!localStorage.getItem("token") &&
    !isTokenExpired(localStorage.getItem("token"));

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

function isTokenExpired(token) {
  if (!token) return true;
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  return decodedToken.exp * 1000 < Date.now();
}

export default ProtectedRoute;

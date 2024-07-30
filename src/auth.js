// src/auth.js
function isTokenExpired(token) {
  if (!token) return true;
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  return decodedToken.exp * 1000 < Date.now();
}

function getToken() {
  return localStorage.getItem("token");
}

function setToken(token) {
  localStorage.setItem("token", token);
}

function removeToken() {
  localStorage.removeItem("token");
}

function checkTokenAndRedirect() {
  const token = getToken();
  if (isTokenExpired(token)) {
    removeToken();
    window.location.href = "/login"; // Redirect to login page
  }
}

function logout() {
  removeToken();
  window.location.href = "/login"; // Redirect to login page
}

export {
  isTokenExpired,
  getToken,
  setToken,
  removeToken,
  checkTokenAndRedirect,
  logout,
};

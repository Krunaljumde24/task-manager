import React from "react";
import "../App.css";

function Login() {
  return (
    <div className="login-page">
      <h4>Login Page</h4>
      <div className="login-form">
        <form>
          <div class="mb-3">
            <label for="usernameInput" class="form-label">
             <b>Enter Username</b>
            </label>
            <input
              type="text"
              class="form-control"
              id="usernameInput"
              placeholder="Enter your username"
            />
            <br />
            <button type="button" className="btn btn-primary btn-sm">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

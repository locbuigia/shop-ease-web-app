import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <Link to="/">Back to Home</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

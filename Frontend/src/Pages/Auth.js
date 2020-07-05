import React from "react";
import "./Auth.css";

const Auth = () => {
  const loginHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={loginHandler}>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;

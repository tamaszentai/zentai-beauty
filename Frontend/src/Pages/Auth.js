import React, { useState } from "react";
import "./Auth.css";
import { useHistory } from "react-router-dom";

const Auth = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    if (props.userName === userName && props.password === password) {
      props.login();
      history.push("/Biography");
    }
  };

  return (
    <div className="form">
      <form onSubmit={loginHandler}>
        <input
          type="text"
          placeholder="username"
          onChange={userNameChangeHandler}
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={passwordChangeHandler}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;

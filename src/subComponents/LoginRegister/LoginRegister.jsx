import React from "react";
import "./LoginRegister.css";
const LoginRegister = (props) => {
  return (
    <div className="loginRegister">
      <a href="/">LogIn</a>
      <span>or</span>
      <a href="/">Register Now</a>
      <span>{props.lastText}</span>
    </div>
  );
};

export default LoginRegister;

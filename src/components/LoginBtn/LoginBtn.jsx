import React from "react";
import Btn from "../../subComponents/btn/Btn";
import "./LoginBtn.css";
const LoginBtn = (props) => {
  return (
    <div className={props.row ? "btn-container-flex" : "btn-container"}>
      <Btn href="#">Log In</Btn>
      <Btn href="#" btn="primary">
        Register
      </Btn>
    </div>
  );
};

export default LoginBtn;

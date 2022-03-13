import React from "react";
import "./Btn.css";
const Btn = (props) => {
  return (
    <a
      href={props.href}
      className={props.btn === "primary" ? "btn-primary" : "btn"}
    >
      {props.children}
    </a>
  );
};

export default Btn;

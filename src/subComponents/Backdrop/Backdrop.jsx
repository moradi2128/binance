import React from "react";
import "./Backdrop.css";
const Backdrop = (props) => {
  return <div className="close-menu-backdrop" onClick={props.click}></div>;
};

export default Backdrop;

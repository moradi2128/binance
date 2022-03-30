import React from "react";
import "./SpotBtn.css";
const SpotBtn = (props) => {
  return (
    <button
      type="button"
      onClick={props.click}
      className={
        props.type === "buy" ? "Spot-btn-item green" : "Spot-btn-item red"
      }
    >
      {props.children}
    </button>
  );
};

export default SpotBtn;

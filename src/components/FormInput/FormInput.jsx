import React, { useState } from "react";
import "./FormInput.css";
// === Icons ===
import { MdArrowDropDown } from "react-icons/md";

const FormInput = (props) => {
  const [value, setValue] = useState();
  const [typeProduct, setTypeProduct] = useState("Total");
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="spot-form-input">
      {(props.activeItemMenu === 1) & (props.first == "Amount") ? (
        <div className="dropdown-form-input">
          <span
            onClick={() => setActiveItem(typeProduct === "Total" ? 0 : 1)}
            className={
              (activeItem === 0 && "active") || (activeItem === 1 && "active")
            }
          >
            {typeProduct}
          </span>
          <div className="spot-dropdown-list">
            <MdArrowDropDown />
            <div className="dropdown-list-item">
              <span onClick={() => setTypeProduct("Amount") & setActiveItem(1)}>
                Amount
              </span>
              <span onClick={() => setTypeProduct("Total") & setActiveItem(0)}>
                Total
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>{props.first}</div>
      )}

      <input
        name="price"
        min="0.01"
        step="0.01"
        type={
          (props.activeItemMenu === 1) & (props.first === "Price")
            ? "text"
            : "number"
        }
        value={
          (props.activeItemMenu === 0) & (props.first === "Price")
            ? value
            : (props.activeItemMenu === 1) & (props.first === "Price")
            ? "Market"
            : props.first === "Limit"
            ? value
            : value
        }
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <div>{props.last}</div>
    </div>
  );
};

export default FormInput;

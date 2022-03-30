import React from "react";
import "./OrderBookItem.css";
// === Icon ===
import { AiFillStar } from "react-icons/ai";

const MarketItem = (props) => {
  return (
    <div
      className={
        props.switchList === 0
          ? "market-list-inner overflow-unset"
          : "market-list-inner"
      }
    >
      {props.data.map((item) => {
        return (
          <a href="/" className="market-list-header-container" key={item.id}>
            <div className="market-list-header-item">
              <p
                style={
                  props.type === "sell"
                    ? { color: "rgb(246, 70, 93) " }
                    : { color: "rgb(14, 203, 129)" }
                }
              >
                {item.price}
              </p>
            </div>
            <div className="market-list-header-item">
              <p>{item.amount}</p>
            </div>
            <div className={props.switchList ==0 ?"market-list-header-item display-none-flexM":"market-list-header-item"}>
              <p>{item.total}</p>
            </div>
          </a>
        );
      })}
      {props.data.map((item) => {
        return (
          <a href="/" className="market-list-header-container" key={item.id}>
            <div className="market-list-header-item">
              <p
                style={
                  props.type === "sell"
                    ? { color: "rgb(246, 70, 93) " }
                    : { color: "rgb(14, 203, 129)" }
                }
              >
                {item.price}
              </p>
            </div>
            <div className="market-list-header-item">
              <p>{item.amount}</p>
            </div>
            <div className={props.switchList ==0 ?"market-list-header-item display-none-flexM":"market-list-header-item"}>
              <p>{item.total}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default MarketItem;

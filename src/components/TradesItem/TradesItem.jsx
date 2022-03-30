import React from "react";
import "./TradesItem.css";
// === Icon ===

const MarketItem = (props) => {
  return (
    <div className="market-list-inner">
      {props.data.map((item) => {
        return (
          <a href="/" className="market-list-header-container" key={item.id}>
            <div className="market-list-header-item">
              <p
                style={
                  item.type === "sell"
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
            <div className="market-list-header-item">
              <p>{item.time}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default MarketItem;

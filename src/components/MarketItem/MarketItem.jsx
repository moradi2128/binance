import React, { useState } from "react";
import "./MarketItem.css";
// === Icon ===
import { AiFillStar } from "react-icons/ai";

const MarketItem = (props) => {
  
  // === Star List === 
  const [starList, setStarList] = useState("");
  const handlerStar = (e, item) => {
   
  
    e.preventDefault();
    if (e.target.style.color === "rgb(240, 185, 11)") {
      e.target.style.color = "";
      setStarList(starList.filter((i) => i.id !== item.id));
    } else {
      e.target.style.color = "rgb(240, 185, 11)";
      setStarList([...starList, ...props.data.filter((i) => i.id === item.id)]);
    }
  };
  return (
    <div className="market-list-inner">
      {props.starList ? (
        starList.length !== 0 ? (
          starList.map((item) => {
            return (
              <div className="market-list-header-container" key={item.id}>
                <div className="market-list-header-item">
                  <AiFillStar onClick={(e) => handlerStar(e, item)} />
                  <h4>
                    {item.pair} <span>/{item.title}</span>
                  </h4>
                </div>
                <div className="market-list-header-item">
                  <p style={{ color: "rgb(246, 70, 93) " }}>{item.lastPrice}</p>
                </div>
                <div className="market-list-header-item">
                  {props.change ? (
                    <p>{item.change}M</p>
                  ) : (
                    <p style={{ color: "rgb(14, 203, 129)" }}>
                      +{item.value24H}%
                    </p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="not-found">Not Found</p>
        )
      ) : (
        props.data.map((item) => {
          return (
            <div className="market-list-header-container" key={item.id}>
              <div className="market-list-header-item">
                <AiFillStar onClick={(e) => handlerStar(e, item)} />
                <h4>
                  {item.pair} <span>/{item.title}</span>
                </h4>
              </div>
              <div className="market-list-header-item">
                <p style={{ color: "rgb(246, 70, 93) " }}>{item.lastPrice}</p>
              </div>
              <div className="market-list-header-item">
                {props.change ? (
                  <p>{item.change}M</p>
                ) : (
                  <p style={{ color: "rgb(14, 203, 129)" }}>
                    +{item.value24H}%
                  </p>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MarketItem;

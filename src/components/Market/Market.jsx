import React, { useState } from "react";
import "./Market.css";

// === Components ===
import MarketList from "../MarketList/MarketList";
// === Data ===

// === Icons ===
import { AiOutlineClose } from "react-icons/ai";

const Market = (props) => {
  return (
    <div className="market">
      <div
        className="close-market"
        onClick={() => props.setCloseMarket(true)}
      ></div>
      <div className="market-backdrop">
        <div className="market-container">
          <div className="market-header">
            <h4>Market</h4>
            <AiOutlineClose onClick={() => props.setCloseMarket(true)} />
          </div>
          <MarketList />
        </div>
      </div>
    </div>
  );
};

export default Market;

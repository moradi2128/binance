import React from "react";
import "./Trades.css";

// === Data ===
import { trades } from "../../data";

// === components ===
import TradesItem from "../../components/TradesItem/TradesItem"

const Trades = () => {
  return <div className="trades">
      <div className="market-list-header-container">
          <div className="market-list-header-item">
            <h4>Price(USDT)</h4>
          </div>
          <div className="market-list-header-item">
            <h4>Amount(BTC)</h4>
          </div>
          <div className="market-list-header-item">
            <h4>Time</h4>
          </div>
        </div>
        <TradesItem
            data={trades["trades"]}
          />
          
  </div>;
};

export default Trades;

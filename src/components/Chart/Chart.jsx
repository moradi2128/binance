import React, { useState, useEffect } from "react";
import "./Chart.css";

// === Components ===
import TradeViewChart from 'react-crypto-chart';
import OrderBook from "../orderBook/OrderBook";
import Trades from "../Trades/Trades";

const Chart = () => {
  const [switchHeaderItem, setSwitchHeaderItem] = useState(0);

  // === Media Query 768 px ===
  const [matchesM, setMatchesM] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatchesM(e.matches));
  }, []);

  return (
    <div className="chart">
      {!matchesM && (
        <>
          <div className="chart-trHeader">
            <div
              className={
                switchHeaderItem === 0
                  ? "chart-trHeader-item active"
                  : "chart-trHeader-item"
              }
              onClick={() => setSwitchHeaderItem(0)}
            >
              <h3>Chart</h3>
            </div>
            <div
              className={
                switchHeaderItem === 1
                  ? "chart-trHeader-item active"
                  : "chart-trHeader-item"
              }
              onClick={() => setSwitchHeaderItem(1)}
            >
              <h3>Order Book</h3>
            </div>
            <div
              className={
                switchHeaderItem === 2
                  ? "chart-trHeader-item active"
                  : "chart-trHeader-item"
              }
              onClick={() => setSwitchHeaderItem(2)}
            >
              <h3>Trades</h3>
            </div>
          </div>
          <div className="chart-container">
            {switchHeaderItem === 0 && <TradeViewChart pair="BTCBUSD" />}
            {switchHeaderItem === 1 && <OrderBook />}
            {switchHeaderItem === 2 && <Trades />}
          </div>
        </>
      )}
    </div>
  );
};

export default Chart;

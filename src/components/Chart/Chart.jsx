import React, { useState, useEffect } from "react";
import "./Chart.css";

// === Components ===
import TradeViewChart from "react-crypto-chart";
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
      {!matchesM ? (
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
            {switchHeaderItem === 0 && (
              <TradeViewChart
              containerStyle={{
                minHeight: '300px',
                minWidth: '400px',
                width:"100%",
                height:"100%",
                zIndex:"0"
                
              }}
              candleStickConfig={{
                upColor: "#00c176",
                downColor: "#cf304a",
                borderDownColor: "#cf304a",
                borderUpColor: "#00c176",
                wickDownColor: "#838ca1",
                wickUpColor: "#838ca1",
              }}
              chartLayout={{
                layout: {
                  backgroundColor: "rgb(22, 26, 30)",
                  textColor: "rgb(234, 236, 239)",
                },
                grid: {
                  vertLines: {
                    color: "rgb(132, 142, 156)",
                  },
                  horzLines: {
                    color: "#838fa3",
                  },
                },
      
                priceScale: {
                  borderColor: "#485c7b",
                },
                timeScale: {
                  borderColor: "#485c7b",
                  timeVisible: true,
                  secondsVisible: false,
                },
              }}
              pair="BTCUSDT"
            />
            )}
            {switchHeaderItem === 1 && <OrderBook />}
            {switchHeaderItem === 2 && <Trades />}
          </div>
        </>
      ) : (
        <TradeViewChart
        containerStyle={{
          minHeight: '300px',
          minWidth: '400px',
          width:"100%",
          height:"100%",
          zIndex:"0"
          
        }}
        candleStickConfig={{
          upColor: "#00c176",
          downColor: "#cf304a",
          borderDownColor: "#cf304a",
          borderUpColor: "#00c176",
          wickDownColor: "#838ca1",
          wickUpColor: "#838ca1",
        }}
        chartLayout={{
          layout: {
            backgroundColor: "rgb(22, 26, 30)",
            textColor: "rgb(234, 236, 239)",
          },
          grid: {
            vertLines: {
              color: "rgb(132, 142, 156)",
            },
            horzLines: {
              color: "#838fa3",
            },
          },

          priceScale: {
            borderColor: "#485c7b",
          },
          timeScale: {
            borderColor: "#485c7b",
            timeVisible: true,
            secondsVisible: false,
          },
        }}
        pair="BTCUSDT"
      />
        
      )}
    </div>
  );
};

export default Chart;

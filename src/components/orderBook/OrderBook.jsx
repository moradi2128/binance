import React, { useState, useEffect } from "react";
import "./OrderBook.css";

// === Components ===
import OrderBookItem from "../OrderBookItem/OrderBookItem";

// === Data ===
import { orderBook } from "../../data";

// === Icons ===
import { GiBuyCard, GiSellCard } from "react-icons/gi";
import { VscArrowBoth } from "react-icons/vsc";
import { RiArrowDropDownFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const OrderBook = () => {
  const [switchList, setSwitchList] = useState(0);
  const [tickContent, setTickContent] = useState(0.01);
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
    <div className="orderBook">
      <div className="orderBook-header">
        {!matchesM ? (
          <>
            <VscArrowBoth
              onClick={() => setSwitchList(0)}
              style={switchList === 0 && { color: "white" }}
            />
            <GiSellCard
              onClick={() => setSwitchList(1)}
              style={switchList === 1 && { color: "white" }}
            />
            <GiBuyCard
              onClick={() => setSwitchList(2)}
              style={switchList === 2 && { color: "white" }}
            />
            <div className="tick-content">
              <span>{tickContent}</span>
              <RiArrowDropDownFill />
              <ul className="tick-content-container">
                <li onClick={() => setTickContent(0.01)}>0.01</li>
                <li onClick={() => setTickContent(0.1)}>0.1</li>
                <li onClick={() => setTickContent(1)}>1</li>
                <li onClick={() => setTickContent(10)}>10</li>
                <li onClick={() => setTickContent(50)}>50</li>
                <li onClick={() => setTickContent(100)}>100</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="orderBook-header-icons">
              <VscArrowBoth
                onClick={() => setSwitchList(0)}
                style={switchList === 0 && { color: "white" }}
              />
              <GiSellCard
                onClick={() => setSwitchList(1)}
                style={switchList === 1 && { color: "white" }}
              />
              <GiBuyCard
                onClick={() => setSwitchList(2)}
                style={switchList === 2 && { color: "white" }}
              />
            </div>
            <div className="orderBook-header-right">
              <div className="tick-content">
                <span>{tickContent}</span>
                <RiArrowDropDownFill />
                <ul className="tick-content-container">
                  <li onClick={() => setTickContent(0.01)}>0.01</li>
                  <li onClick={() => setTickContent(0.1)}>0.1</li>
                  <li onClick={() => setTickContent(1)}>1</li>
                  <li onClick={() => setTickContent(10)}>10</li>
                  <li onClick={() => setTickContent(50)}>50</li>
                  <li onClick={() => setTickContent(100)}>100</li>
                </ul>
              </div>
              {matchesM && (
                <div className="tick-content">
                  <BsThreeDotsVertical />
                  <ul className="tick-content-container">
                    <li onClick={() => setTickContent(0.01)}>
                      <input type="checkbox" name="market-checkbox"/>
                       <label htmlFor="market-checkbox">Display Avg.&Sum</label>
                       </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {matchesM && (
        <div className="market-list-header-container">
          <div className="market-list-header-item">
            <h4>Price(USDT)</h4>
          </div>
          <div className="market-list-header-item">
            <h4>Amount(BTC)</h4>
          </div>
          <div className="market-list-header-item">
            <h4>Total</h4>
          </div>
        </div>
      )}
      <div
        className={
          switchList === 1
            ? "orderBook-list-container orderBook-list-container-sell"
            : "orderBook-list-container"
        }
      >
        <div
          className={
            switchList === 1
              ? "market-list market-list-db"
              : switchList === 0
              ? "market-list"
              : "market-list market-list-dn"
          }
        >
          {!matchesM && (
            <div className="market-list-header-container">
              <div className="market-list-header-item">
                <h4>Price</h4>
              </div>
              <div className="market-list-header-item">
                <h4>Amount</h4>
              </div>
              {switchList === 1 && (
                <div className="market-list-header-item">
                  <h4>Total</h4>
                </div>
              )}
            </div>
          )}
          <OrderBookItem
            data={orderBook["sellOrder"]}
            type="sell"
            switchList={switchList}
          />
        </div>
        <div className="orderBook-sell-container">
          <div className="orderBook-header-sell">
            <h2 style={{ color: "rgb(14, 203, 129)" }}>40,912.88</h2>
            <p>$40,912.88</p>
          </div>
          <div className="orderBook-header-sell-right">
            <a href="/">More</a>
          </div>
        </div>
        <div
          className={
            switchList === 2
              ? "market-list market-list-db"
              : switchList === 0
              ? "market-list"
              : "market-list market-list-dn"
          }
        >
          {!matchesM && (
            <div className="market-list-header-container">
              <div className="market-list-header-item">
                <h4>Price</h4>
              </div>
              <div className="market-list-header-item">
                <h4>Amount</h4>
              </div>
              {switchList === 2 && (
                <div className="market-list-header-item">
                  <h4>Total</h4>
                </div>
              )}
            </div>
          )}

          <OrderBookItem
            data={orderBook["buyOrder"]}
            type="buy"
            switchList={switchList}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderBook;

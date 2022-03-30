import React, { useState, useEffect } from "react";
import "./Home.css";

// === Components ===
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import MarketList from "../../components/MarketList/MarketList";
import OrderBook from "../../components/orderBook/OrderBook";
import Chart from "../../components/Chart/Chart";
import Trades from "../../components/Trades/Trades";
import Spot from "../../components/Spot/Spot";
import UserInfo from "../../components/UserInfo/UserInfo";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  // === Media Query 768 px ===
  const [matchesM, setMatchesM] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatchesM(e.matches));
  }, []);

  // === Media Query 1024 px ===
  const [matchesL, setMatchesL] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatchesL(e.matches));
  }, []);

  return (
    <div className="grid">
      <Header />
      <SubHeader />
      <Chart />
      <Spot />
      {/* Media Query 1024px */}
      {matchesL && (
        <>
          <div id="market">
            <MarketList />
          </div>
          {/* <OrderBook /> */}
        </>
      )}
       {/* Media Query 768px */}
      {matchesM && (
        <>
          <Trades />
          <OrderBook />
        </>
      )}
      <UserInfo />
    </div>
  );
};

export default Home;

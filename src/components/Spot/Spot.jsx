import React, { useState, useEffect } from "react";
import "./Spot.css";

// === Icons ===
import { AiOutlineClose, AiFillQuestionCircle } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

// === Components ===
import SpotBtn from "../../subComponents/SpotBtn/SpotBtn";
import SpotForm from "../SpotForm/SpotForm";
import LoginRegister from "../../subComponents/LoginRegister/LoginRegister";

const Spot = () => {
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

  const [toggleList, setToggleList] = useState(false);
  const [switchForm, setSwitchForm] = useState(0);
  const [typeProduct, setTypeProduct] = useState("OCO");
  const [activeItemMenu, setActiveItemMenu] = useState(0);
  const [tickContent, setTickContent] = useState(0);
  return (
    <div className={toggleList ? "spot" : "spot t-unset"}>
      {!matchesM && (
        <>
          <div className="spot-btn">
            <SpotBtn
              type="buy"
              click={() => setToggleList(true) & setSwitchForm(0)}
            >
              Buy
            </SpotBtn>
            <SpotBtn
              type="sell"
              click={() => setToggleList(true) & setSwitchForm(1)}
            >
              Sell
            </SpotBtn>
          </div>
          <div
            className={toggleList ? "backdrop backdrop-open" : "backdrop"}
            onClick={() => setToggleList(false)}
          ></div>
        </>
      )}

      <div
        className={
          toggleList
            ? "spot-container-bottom spot-open"
            : "spot-container-bottom"
        }
      >
        <div className="spot-header">
          <div className="spot-header-left">
            <h4>Spot</h4>
          </div>
          <div className="spot-header-right">
            <a href="/" className="spot-header-right-link">
              <span href="/">Margin</span>
              <span className="spot-badge">10X</span>
            </a>
            {matchesM ? (
              <div className="tick-content">
                <BsThreeDotsVertical/>
                <ul className="tick-content-container">
                  <a href="" onClick={() => setTickContent(0)}>Trading Rules</a>
                  <a href="" onClick={() => setTickContent(1)}>FAQ</a>
                  <a href="" onClick={() => setTickContent(2)}>Spot Tutorial</a>
                </ul>
              </div>
            ) : (
              <div className="close-icon" onClick={() => setToggleList(false)}>
                <AiOutlineClose />
              </div>
            )}
          </div>
        </div>
        <div className="spot-body">
          {!matchesL && (
            <div className="spot-switch-form">
              <div
                className={
                  switchForm === 0
                    ? "switch-form-buy active"
                    : "switch-form-buy"
                }
                onClick={() => setSwitchForm(0)}
              >
                <h4>buy</h4>
                {switchForm === 0 && <MdArrowDropDown />}
              </div>
              <div
                className={
                  switchForm === 1
                    ? "switch-form-sell active"
                    : "switch-form-sell"
                }
                onClick={() => setSwitchForm(1)}
              >
                <h4>sell</h4>
                {switchForm === 1 && <MdArrowDropDown />}
              </div>
            </div>
          )}
          <div className="spot-type-product">
            <div className="spot-type-product-left">
              <span
                onClick={() => setActiveItemMenu(0)}
                className={activeItemMenu === 0 && "active"}
              >
                Limit
              </span>
              <span
                onClick={() => setActiveItemMenu(1)}
                className={activeItemMenu === 1 && "active"}
              >
                Market
              </span>
              <span
                onClick={() => setActiveItemMenu(typeProduct === "OCO" ? 3 : 2)}
                className={
                  (activeItemMenu === 2 && "active") ||
                  (activeItemMenu === 3 && "active")
                }
              >
                {typeProduct}
              </span>
              <div className="spot-dropdown-list">
                <MdArrowDropDown />
                <div className="dropdown-list-item">
                  <span
                    onClick={() =>
                      setTypeProduct("Stop-limit") & setActiveItemMenu(2)
                    }
                  >
                    Stop-limit
                  </span>
                  <span
                    onClick={() => setTypeProduct("OCO") & setActiveItemMenu(3)}
                  >
                    OCO
                  </span>
                </div>
              </div>
            </div>
            <div className="spot-type-product-right">
              <AiFillQuestionCircle />
              <div>
                A limit order is an order to buy or sell at a specific price or
                better. Limit orders are not guaranteed to execute.
              </div>
            </div>
          </div>
          <div className="spot-form-container">
            <SpotForm switchForm={switchForm} activeItemMenu={activeItemMenu} />
            {matchesL && (
              <SpotForm switchForm={1} activeItemMenu={activeItemMenu} />
            )}
          </div>
          <div className="LoginRegister-container">
            <LoginRegister />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spot;

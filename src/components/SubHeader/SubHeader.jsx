import React, { useState, useEffect } from "react";
import "./SubHeader.css";

// === components ===
import Market from "../Market/Market";

// === Data ===
import { subHeaderData } from "../../data";

// === Icon ===
import { MdArrowDropDown } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import { BsArrowRightCircle } from "react-icons/bs";
import Modal from "../Modal/Modal";

const SubHeader = () => {
  const [closeMarket, setCloseMarket] = useState(false);
  const [modal, setModal] = useState(false);
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
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  // === Hover Market In size screen max-width:768px ===
  const handlerMouseEnterMarket = () => {
    if (!matchesM) {
      document.querySelector(".market").style.height = "100vh";
      document.querySelector(".market-backdrop").style.paddingTop = "13px";
    }
  };

  if (closeMarket) {
    if (!matchesM) {
      document.querySelector(".market").style.height = "";
      document.querySelector(".market-backdrop").style.paddingTop = "";
      setCloseMarket(false);
    }
  }

  return (
    <div className="subHeader">
      <div className="subHeader-container">
        <div className="subHeader-left">
          <div className="subHeader-left-left">
            <div
              className="subheader-left-title"
              onMouseEnter={handlerMouseEnterMarket}
            >
              <h2>BTC/USDT</h2>

              {/* === Min-Width:1024px is false === */}
              {matches === false && (
                <>
                  <span className="arrow-down">
                    <MdArrowDropDown />
                  </span>
                  <Market setCloseMarket={setCloseMarket} />
                </>
              )}
            </div>
            <a href="">
              <RiQuestionnaireFill />
              <span>Bitcoin Price</span>
            </a>
          </div>
          <div className="subHeader-left-right">
            <h3 style={{ color: "rgb(14, 203, 129)" }}>
              {subHeaderData.subHeaderLeft[1].title}
            </h3>
            {!matchesM ? (
              <p style={{ color: "rgb(246, 70, 93)" }}>
                {subHeaderData.subHeaderRight[0].subTitle}
                <span>{subHeaderData.subHeaderRight[0].secTitle}</span>
              </p>
            ) : (
              <p>$ {subHeaderData.subHeaderLeft[1].title}</p>
            )}
          </div>
        </div>
        <div className="subHeader-right">
          {subHeaderData.subHeaderRight.map((item) => {
            return (
              <div className="subHeader-item" key={item.id}>
                <h4>{item.title}</h4>
                {item.href ? (
                  <a href={item.href}>{item.subTitle}</a>
                ) : (
                  <p>${item.subTitle}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="subHeader-arrow" onClick={() => setModal(true)}>
        <i>
          <BsArrowRightCircle />
        </i>
        <span>Spot Tutorial</span>
      </div>
      <Modal
        title="Welcome to Binance Spot"
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
};

export default SubHeader;

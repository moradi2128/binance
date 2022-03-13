import React from "react";
import "./SubHeader.css";

// === Data ===
import { subHeaderData } from "../../data";

// === Icon ===
import { MdArrowDropDown } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import { BsArrowRightCircle } from "react-icons/bs";

const SubHeader = () => {
  return (
    <div className="subHeader">
      <div className="subHeader-container">
        <div className="subHeader-left">
          <div className="subHeader-left-left">
            <div>
              <h2>BTC/USDT</h2>
              <span className="arrow-down">
                <MdArrowDropDown />
              </span>
            </div>
            <a href="">
              <RiQuestionnaireFill/>
              <span>Bitcoin Price</span>
            </a>
          </div>
          <div className="subHeader-left-right">
            <h3 style={{ color: "rgb(14, 203, 129)" }}>39,188,01</h3>
            <p style={{ color: "rgb(246, 70, 93)" }}>
              {subHeaderData.subHeaderRight[0].subTitle}
            </p>
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
      <div className="subHeader-arrow">
        <i>
          <BsArrowRightCircle/>
        </i>
        <span>Spot Tutorial</span>
      </div>
    </div>
  );
};

export default SubHeader;

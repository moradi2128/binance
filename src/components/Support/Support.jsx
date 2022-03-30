import React, { useState } from "react";
import "./Support.css";

// === Data ===
import { supportData } from "../../data";

// === Icon ===
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Support = () => {
  const [closeList, setCloseList] = useState(true);
  const [arrow, setArrow] = useState(false);
  return (
    closeList && (
      <div className="support-container">
        <div className="support-list">
          {supportData.slice(0, arrow ? supportData.length : 3).map((item) => {
            return (
              <a href={item.href} className="support-item" key={item.id}>
                <p>{item.title}</p>
                <span>({item.date})</span>
              </a>
            );
          })}
        </div>
        <div className="support-right">
          <div
            className={arrow ? "support-arrow" : "support-arrow arrow-open"}
            onClick={() => setArrow(!arrow)}
          >
            <RiArrowDownSLine />
          </div>
          <div className="support-close-icon" onClick={()=>setCloseList(false)}>
            <AiOutlineClose />
          </div>
        </div>
      </div>
    )
  );
};

export default Support;

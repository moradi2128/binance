import React, { useState } from "react";
import "./Support.css";

// === Data ===
import { supportData } from "../../data";

// === Icon ===
import { RiArrowDownSLine } from "react-icons/ri";

const Support = () => {
  const [arrow, setArrow] = useState(false);
  return (
    <div className="support-container">
      <div className="support-list">
        {supportData
          .slice(0, arrow ? supportData.length  : 3)
          .map((item) => {
            return (
              <a href={item.href} className="support-item" key={item.id}>
                <p>{item.title}</p>
                <span>({item.date})</span>
              </a>
            );
          })}
      </div>
      <div
        className={arrow ? "support-arrow" : "support-arrow arrow-open"}
        onClick={() => setArrow(!arrow)}
      >
        <RiArrowDownSLine />
      </div>
    </div>
  );
};

export default Support;

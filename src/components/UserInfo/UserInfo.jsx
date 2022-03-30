import React, { useState } from "react";
import "./UserInfo.css";

// === Components ===
import LoginRegister from "../../subComponents/LoginRegister/LoginRegister";
const UserInfo = () => {
  const [switchHeaderItem, setSwitchHeaderItem] = useState(0);
  return (
    <div className="userInfo">
      <div className="userInfo-container">
        <div className="userInfo-header">
          <div className="userInfo-header-body">
            <div
              className={
                switchHeaderItem === 0
                  ? "chart-trHeader-item active"
                  : "chart-trHeader-item"
              }
              onClick={() => setSwitchHeaderItem(0)}
            >
              <h3>Open Orders(0)</h3>
            </div>
            <div
              className={
                switchHeaderItem === 1
                  ? "chart-trHeader-item active"
                  : "chart-trHeader-item"
              }
              onClick={() => setSwitchHeaderItem(1)}
            >
              <h3>Order History</h3>
            </div>
            <div
              className={
                switchHeaderItem === 2
                  ? "chart-trHeader-item active"
                  : "chart-trHeader-item"
              }
              onClick={() => setSwitchHeaderItem(2)}
            >
              <h3>Trade History</h3>
            </div>
            <div
              className={
                switchHeaderItem === 3
                  ? "chart-trHeader-item active"
                  : "chart-trHeader-item"
              }
              onClick={() => setSwitchHeaderItem(3)}
            >
              <h3>Funds</h3>
            </div>
          </div>
        </div>
        <div className="userInfo-body">
          <LoginRegister lastText="to trade" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

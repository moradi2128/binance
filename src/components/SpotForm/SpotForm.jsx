import React from "react";
import "./SpotForm.css"
// === Components ===
import FormInput from "../FormInput/FormInput";
import PercentItem from "../PercentItem/PercentItem";

const SpotForm = ({ activeItemMenu, switchForm }) => {
  return (
    <div className="spot-form-list">
      <div className="spot-type-avbl">
        <div>
          Avbl <span>{switchForm === 0 ? "-USDT" : "-BTC"}</span>
        </div>
      </div>
      <form className="spot-form">
        {activeItemMenu !== 2 && (
          <FormInput
            first="Price"
            last="USDT"
            activeItemMenu={activeItemMenu}
          />
        )}
        {(activeItemMenu === 2 && (
          <>
            <FormInput first="Stop" last="USDT" />
            <FormInput
              first="Limit"
              last="USDT"
              value={activeItemMenu === 4 && "41881.07"}
            />
          </>
        )) ||
          (activeItemMenu === 3 && (
            <>
              <FormInput first="Stop" last="USDT" />
              <FormInput
                first="Limit"
                last="USDT"
                value={activeItemMenu === 4 && "41881.07"}
              />
            </>
          ))}
        <FormInput first="Amount" last="BTC" />
        <div className="percent-container">
          <PercentItem value="25%" />
          <PercentItem value="50%" />
          <PercentItem value="75%" />
          <PercentItem value="100%" />
        </div>
        
      </form>
    </div>
  );
};

export default SpotForm;

import React from "react";
import "./Modal.css";

// === Icons ===
import { AiOutlineClose } from "react-icons/ai";
// Components ===

const Modal = (props) => {
  return (
    <div className={props.modal ? "modal modal-open" : "modal"}>
      <div className="modal-backdrop" onClick={()=>props.setModal(false)}></div>
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">
            <h3>{props.title}</h3>
          </div>
          <div className="modal-close-icon" onClick={()=>props.setModal(false)}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="modal-body"></div>
      </div>
    </div>
  );
};

export default Modal;

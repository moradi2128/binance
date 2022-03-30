import React, { useState, useEffect } from "react";
import "./NavSidebar.css";

// === Components ===
import Badge from "../../subComponents/badges/Badge";
import Backdrop from "../../subComponents/Backdrop/Backdrop";

// === Icons ===
import { MdArrowDropDown } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

const NavItem = (props) => {
  const [arrow, setArrow] = useState("");
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
    <>
      {props.data.slice(props.itemFirst, props.item).map((item) => {
        return (
          <a href={item.href} className="navItem" key={item.id}>
            <div
              className="nav-item"
              onClick={() => setArrow(item.id === arrow ? false : item.id)}
            >
              <div className="navItem-title">
                <i className="navbar-icon">{item.icon && <item.icon />}</i>
                <div className="navItem-description">
                  <div className="title-container">
                    {/* === Title Item List ==== */}
                    <h4>{item.title}</h4>
                    {/* === Badge */}
                    {item.badge && <Badge>{item.badge}</Badge>}
                  </div>
                  {item.description && <p>{item.description}</p>}
                </div>
                {props.arrowRight && (
                  <span className="arrow-right">
                    <BsArrowRightShort />
                  </span>
                )}
              </div>
              <div
                className={
                  !item.subset
                    ? "none"
                    : arrow === item.id
                    ? "arrow arrow-down"
                    : "arrow"
                }
              >
                <MdArrowDropDown />
              </div>
            </div>
            {item.subset && (
              <ul
                className={
                  arrow === false
                    ? "nav-list-inner nav-list-inner-close"
                    : arrow === item.id
                    ? "nav-list-inner"
                    : "nav-list-inner nav-list-inner-close"
                }
              >
                {item.subset.map((subsetItem) => {
                  return matchesM ? (
                    <a
                      href=""
                      key={subsetItem.id}
                      className="nav-item-container"
                    >
                      <span className="nav-item-inner">{subsetItem.title}</span>
                      {props.arrowRightInner && (
                        <span className="arrow-right">
                          <BsArrowRightShort />
                        </span>
                      )}
                    </a>
                  ) : (
                    <a href="" className="nav-item-inner" key={subsetItem.id}>
                      {subsetItem.title}
                    </a>
                  );
                })}
              </ul>
            )}
          </a>
        );
      })}
      {arrow !== "" && <Backdrop click={() => setArrow("")} />}
    </>
  );
};

export default NavItem;

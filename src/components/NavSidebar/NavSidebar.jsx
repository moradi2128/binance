import React, { useState } from "react";
import "./NavSidebar.css";

// === Components ===
import Badge from "../../subComponents/badges/Badge";
import Backdrop from "../../subComponents/Backdrop/Backdrop";

// === Icons ===
import { MdArrowDropDown } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

const NavItem = (props) => {
  const [arrow, setArrow] = useState("");
  return (
    <>
      {props.data.slice(props.itemFirst, props.item).map((item) => {
        return (
          <div className="navItem" key={item.id}>
            <div
              className="nav-item"
              onClick={() => setArrow(item.id === arrow ? false : item.id)}
            >
              <div className="navItem-title">
                <i className="navbar-icon">{item.icon && <item.icon />}</i>
                <div className="navItem-description">
                  <div className="title-container">
                    {/* === Title Item List ==== */}
                    {item.href ? (
                      <a href={item.href}>{item.title}</a>
                    ) : (
                      <h4>{item.title}</h4>
                    )}
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
                  return (
                    <a key={subsetItem.id} href="" className="nav-item-inner">
                      {subsetItem.title}
                    </a>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
      {arrow !== "" && <Backdrop click={() => setArrow("")} />}
    </>
  );
};

export default NavItem;

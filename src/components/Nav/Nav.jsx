import React, { useState } from "react";
import "./Nav.css";

import LoginBtn from "../LoginBtn/LoginBtn";
import NavSidebar from "../NavSidebar/NavSidebar";

// === Icon ===
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose, AiFillSetting } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { RiQuestionnaireFill } from "react-icons/ri";

// === Data ===
import { navItem, navItemSecond } from "../../data";
import Backdrop from "../../subComponents/Backdrop/Backdrop";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleProjectMenu, setToggleProjectMenu] = useState(false);

  return (
    <nav>
      <div className="navbar-left">
        <a href="" className="logo">
          <h1>BINANCE</h1>
        </a>
        <div className="project-menu">
          <span
            className="project-menu-icon"
            onClick={() => setToggleProjectMenu(!toggleProjectMenu)}
          >
            <CgMenuGridR />
          </span>
          <div
            className={
              toggleProjectMenu
                ? "project-menu-inner-container project-menu-show"
                : "project-menu-inner-container"
            }
          >
            <div className="project-menu-inner">
              <NavSidebar
                data={navItem[navItem.length - 1].subset}
                arrowRight="true"
              />
            </div>
          </div>
        </div>
        {toggleProjectMenu && (
          <Backdrop click={() => setToggleProjectMenu(false)} />
        )}
        <div className="navbar-left-right">
          <NavSidebar data={navItem} item={7} />
        </div>
      </div>
      <div className="navbar-right">
        <LoginBtn row="true" />
        <div className="navbar-right-container">
          <NavSidebar data={navItemSecond} />
        </div>
        <div className="icon-menu" onClick={() => setToggleMenu(true)}>
          <BiMenu />
        </div>
        <div className="setting">
          <AiFillSetting />
        </div>
        <div className="question">
          <RiQuestionnaireFill />
        </div>
      </div>
      {/* nav slide bar */}
      <div
        className={
          toggleMenu === true ? "slide-bar" : "slide-bar slide-bar-close"
        }
      >
        <div className="close-menu" onClick={() => setToggleMenu(false)}>
          <AiOutlineClose />
        </div>
        <LoginBtn />
        <div className="nav-list">
          <div className="navSlide-top border-bottom">
            <NavSidebar data={navItem} className="none" />
          </div>
          <div className="navSlide-bottom">
            <NavSidebar data={navItemSecond} />
          </div>
        </div>
      </div>
      {toggleMenu && <Backdrop click={() => setToggleMenu(false)} />}
    </nav>
  );
};

export default Nav;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./sideBar.css";
import Light_Icon from "../../Image/Light_Icon.svg";
import Faq_Icon from "../../Image/Faq_Icon.svg";
import Upgrade_Icon from "../../Image/Upgrade_Icon.svg";
import Settings_Icon from "../../Image/Setting_Icon.svg";
const SideBar = () => {
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }: any) => {
    return {
      backgroundColor: isActive ? "rgba(38, 74, 88, 1)" : "",
      fontWeight: isActive ? "bold" : "normal",
      color: "white",
      textDecoration: "none",
    };
  };

  return (
    <>
      <div className="title  d-flex ">
        <div className="logo line1">ChatBot</div>
        <NavLink to="/" className="gap " style={navLinkStyles}>
          <img src={Faq_Icon} alt="" />
          <div className="p-font">Chat</div>
        </NavLink>
        <NavLink to="/data" className="gap  " style={navLinkStyles}>
          <img src={Upgrade_Icon} alt="" />
          <div className="p-font">Data</div>
        </NavLink>
      </div>

      <div className="left-sidebar-footer line2">
        <div className="gap">
          <img src={Settings_Icon} alt="" />
          <div className="p-font">Settings</div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

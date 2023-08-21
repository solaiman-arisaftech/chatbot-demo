import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./sideBar.css";
import Light_Icon from "../../Image/Light_Icon.svg";
import Faq_Icon from "../../Image/Faq_Icon.svg";
import Upgrade_Icon from "../../Image/Upgrade_Icon.svg";
import Settings_Icon from "../../Image/Setting_Icon.svg";
const SideBar = () => {
  const navigate = useNavigate();
  // const navLinkStyles =({isActive})=>{
  //   return{
  //     background: isActive ? 'rgba(38, 74, 88, 1);' : 'none',
  //     fontWeight: isActive ? 'bold' : 'normal',
  //   }
  // }

  return (
    <>
      <div className="title  d-flex ">
        <div className="logo line1">Chat Bot</div>
        {/* <hr style={{height:"1px", backgroundColor:"rgba(210, 210, 210, 0.3)"}}/>           */}
        <div className="gap " onClick={() => navigate("/")}>
          <img src={Faq_Icon} alt="" />
          <div className="p-font" style={{ cursor: "pointer" }}>
            Chat
          </div>
        </div>
        <div className="gap  " onClick={() => navigate("/data")}>
          <img src={Upgrade_Icon} alt="" />
          <div className="p-font" style={{ cursor: "pointer" }}>
            Data
          </div>
        </div>
      </div>

      {/* </div> */}

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

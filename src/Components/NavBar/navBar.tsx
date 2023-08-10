import React from "react";
import MenuIcon from "../../Image/Menu_Icon.svg"
import './navBar.css'

const NavBar = () => {
  

  return (
    <>
        <div className="menu-icon">
          <img className="" src={MenuIcon} alt="" style={{height: "25px", width:"25px"}}/>
        </div>
    </>
  );
};

export default NavBar;

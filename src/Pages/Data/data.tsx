import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/navBar";
import SideBar from "../../Components/SideBar/sideBar";
import AddNewFile from "../../Components/UploadData/addFile";
import './data.css'

const Data = () => {
  

  return (
    <>
      <div className="main ">
        <div className="left-sider ">
          <SideBar />
        </div>
        <div className="right-sider">
          <div className="navbar">
            <NavBar />
          </div>
          <div className="middle ">
            <AddNewFile/>
          </div>
        </div>
      </div>

    </>
  );
};

export default Data;

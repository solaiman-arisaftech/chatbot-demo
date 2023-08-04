import React from "react";
import './home.css'

const Home = () => {
  

  return (
    <>
    <div className="main ">
        <div className="left-sidebar ">
          <div className="title">
            <h2>Chat Bot</h2>
          </div>
           
          <div className="left-sidebar-footer">
            <div>Light Mode</div>
            <div>FAQ</div>
            <div>New Upgrade</div>
            <div>Settings</div>
          </div>
        </div>
        <div className="right-sider">
            <div className="navbar ">
              navBar
            </div>
            <div className="middle">
              main
            </div>
            <div className="footer">
              <div className="input-box">
                <input type="text" />
              </div>
              
            </div>
        </div>

    </div>

    </>
  );
};

export default Home;

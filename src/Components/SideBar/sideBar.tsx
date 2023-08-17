import React from "react";

import './sideBar.css'
import Light_Icon from '../../Image/Light_Icon.svg'
import Faq_Icon from '../../Image/Faq_Icon.svg'
import Upgrade_Icon from '../../Image/Upgrade_Icon.svg'
import Settings_Icon from '../../Image/Setting_Icon.svg'
const SideBar = () => {
  

  return (
   
    <>
         <div className="title  d-flex ">
            <div className="logo line1">Chat Bot</div>  
            {/* <hr style={{height:"1px", backgroundColor:"rgba(210, 210, 210, 0.3)"}}/>           */}
            <div className="gap ">
              <img src={Faq_Icon} alt="" />
              <div className="p-font">Chat</div>
            </div>
            <div className="gap ">
              <img src={Upgrade_Icon} alt="" />
              <div className="p-font">Data</div>
            </div>
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

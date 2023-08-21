import React, { useEffect, useState } from "react";
import "./home.css";
import NavBar from "../../Components/NavBar/navBar";
import MidContent from "../../Components/MiddleContent/midContent";
import SideBar from "../../Components/SideBar/sideBar";
import InitialMessage from "../../Components/MiddleContent/initialMsg";

interface Item {
  p: string;
  q: string;
}

const Home = () => {
  const [arr, setArr] = useState<Item[]>([{ p: "", q: "" }]);
  // useEffect(() => {
  // }, [arr]);

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
          <div className="middle-home ">
            <MidContent arr={arr} setArr={setArr} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

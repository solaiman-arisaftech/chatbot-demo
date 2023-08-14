import React, { useEffect, useState } from "react";
import "./home.css";
import NavBar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/footer";
import InitialMessage from "../../Components/MiddleContent/initialMsg";
import MidContent from "../../Components/MiddleContent/midContent";
import SideBar from "../../Components/SideBar/sideBar";

interface Item {
  p: string;
  q: string;
}

const Home = () => {
  const [arr, setArr] = useState<Item[]>([{ p: "", q: "" }]);
  useEffect(() => {
    console.log("from home ", arr);
  }, [arr]);

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
            {/* <InitialMessage/> */}
            <MidContent arr={arr} setArr={setArr} />

            {/* {arr.length===0 ?<InitialMessage/>:<MidContent/>} */}
          </div>
          {/* <div className="footer">
            <Footer/>
          </div> */}
        </div>
      </div>
      {/* {response && (<Footer setResponse={setResponse}/>)} */}
    </>
  );
};

export default Home;

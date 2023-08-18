import React, { useEffect, useRef, useState } from "react";
import "./midContent.css";
import ProfileIcon from "../../Image/Profile_Icon.svg";
import EditIcon from "../../Image/Edit_Icon.svg";
import ChatBotLogo from "../../Image/ChatBot_Logo.svg";
import CopyIcon from "../../Image/Copy_Icon.svg";
import SendIcon from "../../Image/Send_Icon.svg";
import UploadIcon from "../../Image/add.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Footer from "../Footer/footer";
import { log } from "console";
import InitialMessage from "./initialMsg";

interface Item {
  p: string;
  q: string;
}

interface MidContentProps {
  arr: Item[];
  setArr: React.Dispatch<React.SetStateAction<Item[]>>;
}

const MidContent: React.FC<MidContentProps> = ({ arr, setArr }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  // const [clearInput, setClearInput] = useState('')
  const promptRef = useRef<any>(null);
  const fileRef = useRef<any>(null);
  const [flag, setFlag] = useState(false);
  // const [arr, setArr] = useState<Item[]>([{ p: "", q: "" }]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    console.log(promptRef.current?.value);
    const res = await axios({
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        type: "formData",
      },
      url: "http://5.189.160.223:8054/chat",
      data: {
        query: promptRef.current?.value,
        file: fileRef.current?.value,
      },
    });

    // const obj = {answer: res.data}
    setData(res.data.response);
    console.log(res.data.response);

    if (res.data.response) {
      setFlag(!flag);
      const obj = {
        p: promptRef.current?.value,
        q: res.data.response,
      };
      const updatedArr = [...arr, obj];
      setArr(updatedArr);
    }
    setLoading(false);
  };
  useEffect(() => {}, [arr]);
  return (
    <>
      {arr.length !== 0 ? (
        <div className="mid-d">
          <div className="mid-box  ">
            <div className="prompt-box ">
              <div className="mt-1">
                <img
                  className=" "
                  src={ProfileIcon}
                  alt="logo"
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="input ">
                {promptRef.current ? promptRef.current?.value : ""}
              </div>
              <div className="">
                <img className="mt-1 " src={EditIcon} alt="logo" />
              </div>
            </div>
            <div className="answer mb-1 ">
              <div className="mt-1">
                <img
                  className=" "
                  src={ChatBotLogo}
                  alt="logo"
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="input ">
                {/* {!loading && promptRef ? data : " "} */}
                {loading && <p>Loading...</p>}
                {promptRef ? data : " "}
              </div>
              <div className="mt-1">
                <img className=" " src={CopyIcon} alt="logo" />
              </div>
            </div>
          </div>
          <div className="footer">
            <form className="input-div " onSubmit={handleSubmit}>
              <label htmlFor="upload">
                <img
                  className="img1"
                  src={UploadIcon}
                  alt=""
                  style={{ color: "white" }}
                />
              </label>
              <input
                id="upload"
                type="file"
                ref={fileRef}
                style={{ display: "none", visibility: "hidden" }}
              />

              <input
                className="input"
                type="text"
                placeholder="Send a message"
                ref={promptRef}
                // value={clearInput}
                // onChange={(e)=> setClearInput(e.target.value)}
              />

              <label htmlFor="submit">
                <img className="img1" src={SendIcon} alt=" " />
              </label>
              <input
                className="input"
                type="submit"
                id="submit"
                // onClick={handleClick}
                style={{ display: "none", visibility: "hidden" }}
              />
            </form>
          </div>
        </div>
      ) : (
        // <div>
        //         <InitialMessage />
        // </div>

        // <div className="mid-scroll">
        arr.map((m: any) => (
          <div>
            <div className="mid-box  ">
              <div className="prompt-box ">
                <div className="mt-1">
                  <img
                    className=" "
                    src={ProfileIcon}
                    alt="logo"
                    style={{
                      height: "25px",
                      width: "25px",
                      borderRadius: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="input ">{m.p}</div>
                <div className="">
                  <img className="mt-1 " src={EditIcon} alt="logo" />
                </div>
              </div>
              <div className="answer mb-1 ">
                <div className="mt-1">
                  <img
                    className=" "
                    src={ChatBotLogo}
                    alt="logo"
                    style={{
                      height: "25px",
                      width: "25px",
                      borderRadius: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="response input ">
                  {/* {m.q} */}
                  {!loading && m.q}
                  {loading && <p>Loading...</p>}
                </div>
                <div className="mt-1">
                  <img className=" " src={CopyIcon} alt="logo" />
                </div>
              </div>
            </div>
            <div className="footer">
              <form className="input-div " onSubmit={handleSubmit}>
                <label htmlFor="upload">
                  <img
                    className="img1"
                    src={UploadIcon}
                    alt=""
                    style={{ color: "white" }}
                  />
                </label>
                <input
                  id="upload"
                  type="file"
                  ref={fileRef}
                  style={{ display: "none", visibility: "hidden" }}
                />

                <input
                  className="input"
                  type="text"
                  placeholder="Send a message"
                  ref={promptRef}
                />

                <label htmlFor="submit">
                  <img className="img1" src={SendIcon} alt="" />
                </label>
                <input
                  className="input"
                  type="submit"
                  id="submit"
                  // onClick={handleClick}
                  style={{ display: "none", visibility: "hidden" }}
                />
              </form>
            </div>
          </div>
        ))
        // </div>
      )}
    </>
  );
};

export default MidContent;

import React, { useEffect, useRef, useState } from "react";
import "./midContent.css";
import ProfileIcon from "../../Image/Profile_Icon.svg";
import EditIcon from "../../Image/Edit_Icon.svg";
import ChatBotLogo from "../../Image/ChatBot_Logo.svg";
import CopyIcon from "../../Image/Copy_Icon.svg";
import SendIcon from "../../Image/Send_Icon.svg";
import DisableSendIcon from "../../Image/disableSendIcon.svg";
import UploadIcon from "../../Image/add.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Footer from "../Footer/footer";
import { log } from "console";
import InitialMessage from "./initialMsg";
// import { Loading } from "react-loading-dot";
import Loading from "../Loading/loading";

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
  const promptRef = useRef<any>(null);
  const fileRef = useRef<any>(null);
  const [flag, setFlag] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const scrollContRef = useRef<any>(null);

  const getImageSource = () => {
    if (inputValue === "") {
      return DisableSendIcon;
    } else {
      return SendIcon;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setInputValue(promptRef.current?.value);
    console.log(promptRef.current?.value);

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

    if (scrollContRef.current) {
      scrollContRef.current.scrollTop = scrollContRef.current.scrollHeight;
    }
    setData(res.data.response);
    console.log(res.data.response);

    if (res.data.response) {
      setFlag(flag);
      const obj = {
        p: promptRef.current?.value,
        q: res.data.response,
      };
      const updatedArr = [...arr, obj];
      setArr(updatedArr);
    }
    setLoading(false);
    setInputValue("");
  };

  return (
    <>
      {arr.length == 1 ? (
        <div className="mid-d">
          <InitialMessage />
          <div className="footer">
            <form className="input-div " onSubmit={handleSubmit}>
              <input
                className="input"
                type="text"
                placeholder="Send a message"
                ref={promptRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <label htmlFor="submit">
                <img className="img1" src={getImageSource()} alt=" " />
              </label>
              <input
                className="input"
                type="submit"
                id="submit"
                style={{ display: "none", visibility: "hidden" }}
              />
            </form>
          </div>
        </div>
      ) : (
        <div className="mid-scroll" ref={scrollContRef}>
          {arr.map((m: any, index: number) => (
            <div style={{ display: index == 0 ? "none" : "hidden" }}>
              <div className="mid-box">
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
                    {!loading && m.q}
                    {loading && (
                      <Loading
                        // dots={4}
                        // size="10px"
                        // margin="0"
                        // background="rgba(59, 111, 131, 1)"
                      />
                      // <div>"Loading"</div>
                    )}
                  </div>
                  <div className="mt-1">
                    <img className=" " src={CopyIcon} alt="logo" />
                  </div>
                </div>
              </div>
              <div className="footer">
                <form className="input-div " onSubmit={handleSubmit}>
                  <input
                    className="input"
                    type="text"
                    placeholder="Send a message"
                    ref={promptRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />

                  <label htmlFor="submit">
                    <img className="img1" src={getImageSource()} alt=" " />
                  </label>
                  <input
                    className="input"
                    type="submit"
                    id="submit"
                    style={{ display: "none", visibility: "hidden" }}
                  />
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MidContent;

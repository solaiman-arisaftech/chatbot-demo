import React, {useEffect, useRef, useState} from "react";
import "./midContent.css";
import ProfileIcon from "../../Image/Profile_Icon.svg"
import EditIcon from "../../Image/Edit_Icon.svg"
import ChatBotLogo from "../../Image/ChatBot_Logo.svg"
import CopyIcon from "../../Image/Copy_Icon.svg"
import SendIcon from "../../Image/Send_Icon.svg"
import UploadIcon from "../../Image/add.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Footer from "../Footer/footer";

type queryType = {
  query: string,
  answer: string
}

const MidContent = () => {

  const [data, setData] = useState ("")
  const promptRef =  useRef<any>(null)
  const fileRef =  useRef<any>(null)

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    console.log(promptRef.current?.value);
    const res = await axios({
      method: 'post',
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "type": "formData"
      },
      url: 'http://5.189.160.223:8054/chat',
      data: {
        query: promptRef.current?.value,
        file: fileRef.current?.value
      }
    });
    // const obj = {answer: res.data}
    setData(res.data.response);
    console.log(res.data.response);
    }
    // useEffect(() => {
    //   const apiCall = async() => {
    //     const res = await axios.get("")
    //   }
    //   apiCall()
    // })
  return (
    <>
        <div className="mid-box  ">
            <div className="prompt-box ">
              <div className="mt-1">
                  <img className=" " src= {ProfileIcon} alt="logo" style={{height: "25px", width:"25px", borderRadius: "100%", objectFit: "cover"}} />                  
              </div>
              <div className="input ">{promptRef.current?  promptRef.current?.value : ""}</div>
              <div className="">
                <img className="mt-1 " src= {EditIcon} alt="logo"  />
              </div>
                   
            </div>
            <div className="answer mb-1 ">
            <div className="mt-1">
                  <img className=" " src= {ChatBotLogo} alt="logo" style={{height: "25px", width:"25px", borderRadius: "100%", objectFit: "cover"}} />                  
              </div>
              <div className="input " >
                {promptRef? data : " "}
              </div>
              <div className="mt-1">
                <img className=" " src= {CopyIcon} alt="logo"  />
              </div>

            </div>
        </div>
       <div className="footer">
        <form className="input-div " onSubmit={handleSubmit}>
            <label htmlFor="upload"><img className="img1"  src={UploadIcon} alt="" style={{color:"white" }} /></label>
            <input id="upload" type="file" ref={fileRef} style={{display:"none", visibility:"hidden"}} />

            <input className="input"  type="text" placeholder="Send a message"  ref={promptRef}/>

            <label htmlFor="submit"><img className="img1"  src={SendIcon} alt=""  /></label>
            <input className="input" type="submit" id="submit" style={{display:"none", visibility:"hidden"}} />
            {/* <input className="input"  type="text" placeholder="Send a message"  ref={promptRef}/>
            <input className="input" type="submit" id="submit"  /> */}
          </form>
        
       </div>
        
    </>
  );
};

export default MidContent;

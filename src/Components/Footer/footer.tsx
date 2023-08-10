import React, {useRef} from "react";
import Axios from 'axios'
import './footer.css'
import SendIcon from "../../Image/Send_Icon.svg"
import UploadIcon from "../../Image/add.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Footer = () => {
  
  
  const promptRef =  useRef<HTMLInputElement>(null)
  const fileRef =  useRef<HTMLInputElement>(null)
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
    console.log(res);
    }

  return (
    <>
        <form className="input-div " onSubmit={handleSubmit}>
          <label htmlFor="upload"><img className="img1"  src={UploadIcon} alt="" style={{color:"white" }} /></label>
          <input id="upload" type="file" ref={fileRef} style={{display:"none", visibility:"hidden"}} />

          <input className="input"  type="text" placeholder="Send a message"  ref={promptRef}/>

          <label htmlFor="submit"><img className="img1"  src={SendIcon} alt=""  /></label>
          <input className="input" type="submit" id="submit" style={{display:"none", visibility:"hidden"}} />
        </form>

    </>
  );
};

export default Footer;

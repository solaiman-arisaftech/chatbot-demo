import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./upload.css";
import DataTable from "react-data-table-component";
import Download_Icon from "../../Image/download_Icon.svg";
import Close_Icon from "../../Image/Close.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type fileType = {
  name: string;
  content: string;
  time: string;
};

const AddNewFile = () => {
  const [modal, setModal] = useState(false);
  const [files, setFiles] = useState<fileType[]>([]);
  const [name, setName] = useState("");
  const [data, setData] = useState({});
  const [rend, setRend] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://5.189.160.223:8054/all");
      setFiles(res.data);
      console.log(res.data);
    };
    fetchData();
  }, [rend]);

  const handleToast = async () => {
    setModal(false);
    try {
      const res = await axios.post("http://5.189.160.223:8054/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data) {
        setRend(!rend);
        console.log("File uploaded successfully:", res.data);
        toast.success("File Uploaded Successfully", {
          position: toast.POSITION.TOP_CENTER,
          className: "toast-message-success",
        });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setModal(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setName(e.target.files[0].name);
    // setModal(true);
    setData(formData);
  };

  return (
    <div className="upload-box  ">
      <ToastContainer />
      <div className="title-box ">
        <div className="font1">Upload data</div>
        <div>
          <input
            type="file"
            style={{ display: "none", visibility: "hidden" }}
            id="id"
            onChange={handleSubmit}
          />
          <label className="button" htmlFor="id">
            {" "}
            Add file{" "}
          </label>
        </div>
      </div>
      <div className="upload mid-scroll hide-scrollbar">
        {files.map((m) => (
          <div className="file-box" style={{ width: "100%" }}>
            <div className="font2" style={{ width: "50%" }}>
              {m.name}
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div className="font2">100kb</div>
              <div>
                <a
                  style={{ textDecoration: "none" }}
                  href={`data:application/octet-stream;base64,${m.content}`}
                  download={m.name}
                ></a>
                <img src={Download_Icon} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content ">
            <div className="title-box line">
              <div className="font1">Upload data</div>
            </div>

            <div className="file-box line">
              <div className="font2">{name ? name : ""}</div>
              <div className="font2">100kb</div>
              <div>
                <img
                  className="close-btn"
                  src={Close_Icon}
                  onClick={toggleModal}
                  alt=""
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="upload-button font2"
                onClick={handleToast}
                type="submit"
              >
                Upload
              </button>
            </div>
            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewFile;

import React, { useEffect } from "react";
import { useState } from "react";
import "./upload.css";
import DataTable from "react-data-table-component";
import Download_Icon from "../../Image/download_Icon.svg";
import Close_Icon from "../../Image/Close.svg";
import axios from "axios";

type fileType = {
  name: string;
  content: string;
  time: string;
};

const AddNewFile = () => {
  const [modal, setModal] = useState(false);
  const [files, setFiles] = useState<fileType[]>([]);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/all");
      console.log(res);

      setFiles(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="upload-box  ">
      <div className="title-box ">
        <div className="font1">Upload data</div>
        <div>
          <button onClick={toggleModal} className="button ">
            Add new
          </button>
        </div>
      </div>
      <div className="upload mid-scroll ">
        {files.map((m) => (
          <div className="file-box">
            <div className="font2">{m.name}</div>
            <div className="font2">100kb</div>
            <div>
              <a
                style={{ textDecoration: "none" }}
                href={`data:application/octet-stream;base64,${m.content}`}
                download={m.name}
              >
                <img src={Download_Icon} alt="" />
              </a>
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
              <div className="font2">file08.pdf</div>
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

            <button className="upload-button font2">
              <form action="">
                <input
                  type="file"
                  style={{ display: "none", visibility: "hidden" }}
                />
                Upload
              </form>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewFile;

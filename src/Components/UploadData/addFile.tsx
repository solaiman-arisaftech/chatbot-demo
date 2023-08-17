import React, { useEffect } from "react";
import { useState } from "react";
import "./upload.css";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div className="">Upload data</div>
        <div>
          <button onClick={toggleModal} className="button ">
            Add new
          </button>
        </div>
      </div>
      <div className="upload mid-scroll">
        {files.map((m) => (
          <div className="file-box">
            <div>{m.name}</div>
            <div>100kb</div>
            <div>
              <Link
                to={`data:application/octet-stream;base64,${m.content}`}
                download={m.name}
              >
                {" "}
                Download{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content ">
            <div className="title-box">
              <div className="">Upload data</div>
            </div>
            <hr />
            <div className="file-box">
              <div>file08.pdf</div>
              <div>100kb</div>
              <div>
                <button className="" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>
            <hr />
            <div>
              <button className="upload-button ">Upload</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewFile;

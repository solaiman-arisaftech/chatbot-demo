import React from "react";
import { useState } from "react";
import "./upload.css";
import DataTable from "react-data-table-component";


const AddNewFile = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };


  return (
     
        <div className="upload-box  ">
            <div className="title-box ">
                <div className="">Upload data</div>
                <div><button onClick={toggleModal} className="button ">Add new</button></div>
            </div>
            <div className="upload mid-scroll">
                <div className="file-box">
                    <div>file01.pdf</div>
                    <div>100kb</div>
                    <div>download</div>
                </div>
                <div className="file-box">
                    <div>file02.pdf</div>
                    <div>100kb</div>
                    <div>download</div>
                </div>
                <div className="file-box">
                    <div>file03.pdf</div>
                    <div>100kb</div>
                    <div>download</div>
                </div>
                <div className="file-box">
                    <div>file04.pdf</div>
                    <div>100kb</div>
                    <div>download</div>
                </div>
                <div className="file-box">
                    <div>file05.pdf</div>
                    <div>100kb</div>
                    <div>download</div>
                </div>
                <div className="file-box">
                    <div>file06.pdf</div>
                    <div>100kb</div>
                    <div>download</div>
                </div>
                <div className="file-box">
                    <div>file07.pdf</div>
                    <div>100kb</div>
                    <div>download</div>
                </div>
                <div className="file-box">
                    <div>file08.pdf</div>
                    <div>100kb</div>
                    <div>download</div>
                </div>  
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
                        <div><button className="" onClick={toggleModal}>CLOSE</button></div>
                    </div>
                    <hr />
                    <div><button className="upload-button ">Upload</button></div>
                   


                    
                </div>
                </div>
            )}  
        </div>
   
  );
};

export default AddNewFile;

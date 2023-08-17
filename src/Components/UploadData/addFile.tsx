import React from "react";
import { useState } from "react";
import "./upload.css";
import DataTable from "react-data-table-component";
import Download_Icon from '../../Image/download_Icon.svg'
import Close_Icon from '../../Image/Close.svg'


const AddNewFile = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };


  return (
     
        <div className="upload-box  ">
            <div className="title-box ">
                <div className="font1">Upload data</div>
                <div><button onClick={toggleModal} className="button ">Add new</button></div>
            </div>
            <div className="upload mid-scroll ">
                <div className="file-box">
                    <div className="font2">file01.pdf</div>
                    <div className="font2">100kb</div>
                    <div><img src={Download_Icon} alt="" /></div>
                </div>
                <div className="file-box">
                    <div className="font2">file02.pdf</div>
                    <div className="font2">100kb</div>
                    <div><img src={Download_Icon} alt="" /></div>
                </div>
                <div className="file-box">
                    <div className="font2">file03.pdf</div>
                    <div className="font2">100kb</div>
                    <div><img src={Download_Icon} alt="" /></div>
                </div>
                <div className="file-box">
                    <div className="font2">file04.pdf</div>
                    <div className="font2">100kb</div>
                    <div><img src={Download_Icon} alt="" /></div>
                </div>
                <div className="file-box">
                    <div className="font2">file05.pdf</div>
                    <div className="font2">100kb</div>
                    <div><img src={Download_Icon} alt="" /></div>
                </div>
                <div className="file-box">
                    <div className="font2">file06.pdf</div>
                    <div className="font2">100kb</div>
                    <div><img src={Download_Icon} alt="" /></div>
                </div>
                <div className="file-box">
                    <div className="font2">file07.pdf</div>
                    <div className="font2">100kb</div>
                    <div><img src={Download_Icon} alt="" /></div>
                </div>
                <div className="file-box">
                    <div className="font2">file08.pdf</div>
                    <div className="font2">100kb</div>
                    <div><img src={Download_Icon} alt="" /></div>
                </div>
                <div className="file-box">
                    <div className="font2">file09.pdf</div>
                    <div className="font2">100kb</div>
                    <div><img src={Download_Icon} alt="" /></div>
                </div>
                
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
                        <div ><img className="close-btn" src={Close_Icon} onClick={toggleModal} alt="" /></div>
                    </div>
                    
                    <button className="upload-button font2">
                        <form action="">
                            <input type="file" style={{display:'none', visibility:'hidden'}} />
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

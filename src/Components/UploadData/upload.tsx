import React from "react";
import "./upload.css";
import { useState } from "react";
import DataTable from "react-data-table-component";


const Upload = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };


  return (
     
        // <div className="upload-box  ">
        //     <div className="title-box ">
        //         <div className="">Upload data</div>
                
        //     </div>
        //     <div className="upload mid-scroll">
        //         <div className="file-box">
        //             <div>file01.pdf</div>
        //             <div>100kb</div>
        //             <div>download</div>
        //         </div>
        //     </div>   
        // </div>
        <>
            <button onClick={toggleModal} className="btn-modal">
            Open
            </button>

            {modal && (
                <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2>Hello Modal</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                    perferendis suscipit officia recusandae, eveniet quaerat assumenda
                    id fugit, dignissimos maxime non natus placeat illo iusto!
                    Sapiente dolorum id maiores dolores? Illum pariatur possimus
                    quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                    placeat tempora vitae enim incidunt porro fuga ea.
                    </p>
                    <button className="close-modal" onClick={toggleModal}>
                    CLOSE
                    </button>
                </div>
                </div>
            )}
        
        
        </>
   
  );
};

export default Upload;

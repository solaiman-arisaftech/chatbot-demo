import React from "react";
import "./midContent.css";
import DataTable from "react-data-table-component";


const Upload = () => {


    // const columns=[
    //     {
    //         name:'Upload data',
    //         selector: (row) => row.name,

    //     },
    //     {
    //         name:'Size',
    //         selector: (row: { size: any; }) => row.size

    //     },
        
    // ]
    // const data=[
    //     {
    //         id:1,
    //         name: 'name',
    //         size: '100',
    //     },
    //     {
    //         id:2,
    //         name: 'name',
    //         size: '100',
    //     },
    //     {
    //         id:3,
    //         name: 'name',
    //         size: '100',
    //     },

    // ]


  return (
    // <div className="upload-div">  
        <div className="upload-box  ">
            <div className="title-box ">
                <div className="">Upload data</div>
                
                <div><button className="button">Add new</button></div>
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
           
            
        </div>
    // </div>
    // <div className="container">
    //     <DataTable>

    //     </DataTable>

    // </div>
  );
};

export default Upload;

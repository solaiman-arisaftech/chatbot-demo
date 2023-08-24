import React from "react";
import './loading.css'
const Loading = () => {


    return (
        <>
            <div className="loader">
                <span style={{background:"rgba(59, 111, 131, 1)"}}></span>
                <span style={{background:"rgba(59, 111, 131, 1)"}}></span>
                <span style={{background:"rgba(59, 111, 131, 1)"}}></span>
                <span style={{background:"rgba(59, 111, 131, 1)"}}></span>
            </div>


        </>
    );
};

export default Loading;
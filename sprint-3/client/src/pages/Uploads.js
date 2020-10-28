import React from "react";
import './Uploads.scss';
import Header from '../components/Header/Header.js';
import UploadPrev from '../components/UploadPrev/UploadPrev.js';
import UploadForm from '../components/UploadForm/UploadForm.js';

function Uploads(){

    return(
        <>
            <div className="header-uploads">
                <Header />
            </div>
            <UploadTitle/>
            <div className="preview-upoads">
                <UploadPrev/>  
                <UploadForm />
            </div>
        </>
    )
}

function UploadTitle(){
    return(
        <>
        <div className="upload">
            <h1 className="upload-title">Upload Video</h1>
        </div>
        </>
    )
}

export default Uploads;
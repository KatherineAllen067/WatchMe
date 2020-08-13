import React from "react";
import './Uploads.scss';
import Header from '../components/Header/Header.js';
import UploadPrev from '../components/UploadPrev/UploadPrev.js';
import UploadForm from '../components/UploadForm/UploadForm.js';
import UploadButtons from '../components/UploadButtons/UploadButtons.js';


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
            <UploadButtons />
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
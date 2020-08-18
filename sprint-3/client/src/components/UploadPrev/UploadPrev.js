import React from "react";
import VideoPreview from '../../assets/images/Upload-video-preview.jpg';
import './UploadPrev.scss';

function UploadPrev(){
    return(
        <div className="upload-preview">
            <h3 className="upload-preview__title">VIDEO THUMBNAIL</h3>
            <img className="upload-preview__photo" src={VideoPreview} alt="bike handles"/>
        </div>
    )   
}

export default UploadPrev;
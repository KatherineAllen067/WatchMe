import React from "react";
import './UploadForm.scss';

function UploadForm(){
    return(
        <div className="upload-form">
            <label className="videotitle">TITLE YOUR VIDEO
                <input className="videotitle-text" placeholder="Add a title to your video"></input>   
            </label>
            <label className="videodescription">ADD A VIDEO DESCRIPTION
                <textarea className="videodescription-text"placeholder="Add a description to your video">
                </textarea>
            </label>
        </div>
    )
}

export default UploadForm;
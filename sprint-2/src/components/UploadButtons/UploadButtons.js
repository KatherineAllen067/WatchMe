import React from "react";
import './UploadButtons.scss';

function UploadButtons(){
    return(
        <div className="upload-buttons">
            <button className="upload-buttons__publish">PUBLISH</button>
            <button className="upload-buttons__cancel" >CANCEL</button>
        </div>
    )
}

export default UploadButtons;
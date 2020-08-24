import React from "react";
import './UploadButtons.scss';

function UploadButtons (props){

        return(
            <div className="upload-buttons">
                <button type="submit" className="upload-buttons__publish">PUBLISH</button>
                <button className="upload-buttons__cancel" >CANCEL</button>
            </div>
        )
}

export default UploadButtons;
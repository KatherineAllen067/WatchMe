import React from "react";
import './UploadForm.scss';
import axios from 'axios';
import UploadButtons from "../UploadButtons/UploadButtons";

class UploadForm extends React.Component{
 
    publishV = e =>{
        e.preventDefault();
        axios.post("http://localhost:8080/videos/", {
            title : e.target.title.value,
            description : e.target.description.value
        })
            .then(result=>{
                     
            })
                .catch(err=>{
                    
                })
            // form.reset();
    }
    render(){
        return(
            <div className="upload-container">
            <div className="upload-form">
                <label className="videotitle">TITLE YOUR VIDEO
                    <input name="title"className="videotitle-text" placeholder="Add a title to your video"></input>   
                </label>
                <label className="videodescription">ADD A VIDEO DESCRIPTION
                    <textarea name="description" className="videodescription-text"placeholder="Add a description to your video">
                    </textarea>
                </label>
            </div>
                <UploadButtons/>
            </div>
        )
    }    
}

export default UploadForm;
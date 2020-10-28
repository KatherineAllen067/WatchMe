import React from "react";
import './UploadForm.scss';
import axios from 'axios';
import Preview from '../../assets/images/Upload-video-preview.jpg';

class UploadForm extends React.Component{

    //publish new video to backend
    publishV = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8080/videos/",
           { title : e.target.title.value,
            description : e.target.description.value })
            .then(result=>{
                console.log(result);
                     
            })
                .catch(err=>{
                    console.log('there is an error', err)
                })
            // form.reset();
    }

    render(){
        return(
            <form className="upload-container">
                <div className="upload-form">
                    <label className="videotitle">TITLE YOUR VIDEO
                        <input name="title"className="videotitle-text" 
                        placeholder="Add a title to your video"></input>   
                    </label>
                    <label className="videodescription">ADD A VIDEO DESCRIPTION
                        <textarea name="description" className="videodescription-text"
                        placeholder="Add a description to your video">
                        </textarea>
                    </label>
                </div>
                <div className="upload-buttons">
                    <button type="submit" className="upload-buttons__publish" onSubmit={(e)=>this.publishV()}>PUBLISH</button>
                    <button className="upload-buttons__cancel" >CANCEL</button>
                </div>
            </form>
        )
    }    
}

export default UploadForm;
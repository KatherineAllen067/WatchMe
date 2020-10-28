import React from "react";
import './UploadForm.scss';
import axios from 'axios';
import Preview from '../../assets/images/Upload-video-preview.jpg';

class UploadForm extends React.Component{

    render(){
    //publish new video to backend
    function publishV(e){
        let form = document.querySelector('form');
        console.log(form)
        e.preventDefault();
        axios.post("http://localhost:8080/videos/", {
            title : e.target.title.value,
            description : e.target.description.value,
            image: "https://i.imgur.com/5qyCZrD.jpg"
             })
            .then(result=>{
                console.log(result.data); 
                this.setState({
                    sideVideo:result.data
                })      
            })
            .catch(err=>{
                console.log('there is an error', err)
            })
            form.reset();
    }

        return(
            <form className="upload-container" onSubmit={(e)=>{publishV(e)}}>
                <div className="upload-form">
                    <label className="videotitle">TITLE YOUR VIDEO
                        <input 
                        type="text" 
                        name="title" 
                        className="videotitle-text" 
                        placeholder="Add a title to your video"></input>   
                    </label>
                    <label className="videodescription">ADD A VIDEO DESCRIPTION
                        <textarea 
                        type="text" 
                        name="description" 
                        className="videodescription-text"
                        placeholder="Add a description to your video">
                        </textarea>
                    </label>
                </div>
                <div className="upload-buttons">
                    <button type="submit" className="upload-buttons__publish">PUBLISH</button>
                    <button className="upload-buttons__cancel" >CANCEL</button>
                </div>
            </form>
        )
    }    
}

export default UploadForm;
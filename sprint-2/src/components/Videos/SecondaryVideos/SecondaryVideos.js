import React from 'react';
// import { v4 as uuid } from 'uuid';
import './SecondaryVideos.scss';
import axios from 'axios';


class SecondaryVideos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            thumbnail:[]
          }
      }
        
    componentDidMount(){
        axios.get('https://project-2-api.herokuapp.com?api_key=408e5c34-9475-4512-a5bd-27932580cec9/videos')
        .then(res=>{ 
            console.log(res)
            this.setState({thumbnail:res})
        }
        )      
    }
   
    render(){
        return(
            //passing the data to the component
            <>
            <div className="thumbnail">
                <SideTitle />
                <div className="thumbnail-box__column">
                    {/* // {thumbnailVideo.map(videoObj=> */}
                        <SideVideo
                        />
                        {/* // key={}
                        // image={videoObj.image}
                        // title={videoObj.title}
                        // channel={videoObj.channel}  */}
                </div>
            </div>
            </>
        )
    }
} 

const SideTitle =()=>{
    return(
        <h3 className="thumbnail-title">NEXT VIDEO</h3>
    )
}

function SideVideo(props){
        return(
            //how the data will be displayed on the page
            <div className="thumbnail-box__cell">
                <div>{props.image}</div>
                <div className="thumbnail-box__cell--info">
                    <h4 className="thumbnail-box__cell--info-title">{}</h4>
                    <span className="thumbnail-box__cell--info-description">{}</span>
                </div>
                
            </div>
        )
}  
// •	Data displayed in the app must be retrieved from the provide mock API using axios.
// •	The site must use the provided API to retrieve the video links and video details.
// •	Hint: Use component lifecycle methods
// •	The site must use the comments provided with the video details response
// •	All data for videos and comments must come from the provided mock API
export default SecondaryVideos;
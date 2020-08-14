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
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=408e5c34-9475-4512-a5bd-27932580cec9')
        .then(res=>{ 
            console.log(res.data)
            this.setState({thumbnail:res.data})
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
                     {this.state.thumbnail.map(videoObj=>
                        <SideVideo
                        id={videoObj.id}
                        image={videoObj.image}
                        channel={videoObj.channel}
                        description={videoObj.title}
                        />)} 
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
                <div><img className="side-video" src={props.image} alt="first thumbnail"/></div>
                <div className="thumbnail-box__cell--info">
                    <h4 className="thumbnail-box__cell--info-title">{props.channel}</h4>
                    <span className="thumbnail-box__cell--info-description">{props.description}</span>
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
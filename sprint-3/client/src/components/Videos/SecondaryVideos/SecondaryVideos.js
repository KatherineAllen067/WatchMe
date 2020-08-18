import React from 'react';
import './SecondaryVideos.scss';
import { v4 as uuid } from 'uuid';
import {Link} from 'react-router-dom';

class SecondaryVideos extends React.Component{
    render(props){
//filter the side videos to not show the current selected one
        let filtervideo = this.props.thumbnail.filter(v=> v.id !== this.props.mainVideo.id)
        return(
            //passing the data to the component
            <>
            <div className="thumbnail">
                <SideTitle />
                <div className="thumbnail-box__column">
                    { 
                    filtervideo.map(video=>{
                        return( <SideVideo
                        key={uuid()}
                        id={video.id}
                        image={video.image}
                        channel={video.channel}
                        title={video.title}
                        />
                        )
                    })}                  
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
    // console.log(props.id) checking that I'm getting the video Id
        return(
            //how the data will be displayed on the page and the Link that changes the path to display the specfic details of the selected video
                <div className="thumbnail-box__cell">
                    <Link to={"/"+props.id}>
                        <div><img className="side-video" src={props.image} alt="first thumbnail"/></div>
                    </Link>
                    <div className="thumbnail-box__cell--info">
                        <h4 className="thumbnail-box__cell--info-title">{props.title}</h4>
                        <span className="thumbnail-box__cell--info-description">{props.channel}</span>
                    </div> 
                </div>
        )
}  

export default SecondaryVideos;
import React from 'react';
import './PrimaryVideo.scss';
import Video1 from '../../../assets/videos/brainstation-sample.mp4';
import VPoster from '../../../assets/images/video-list-0.jpg';
import Play from '../../../assets/icons/Icon-play.svg';
import FullScreen from '../../../assets/icons/Icon-fullscreen.svg';
import Volume from '../../../assets/icons/Icon-volume.svg';
import mainVideo from './PrimaryVideoDataStructure.js';
import axios from 'axios';

class PrimaryVideo extends React.Component{
    //import the data structure as state will be  changing state later
    constructor(props){
        super(props);
        this.state = {
            mainVideo
        }
    }

    componentDidMount(){
        axios.get('https://project-2-api.herokuapp.com?api_key=408e5c34-9475-4512-a5bd-27932580cec9/videos/:1af0jruup5gu')
        .then(res=>{ 
            console.log(res)
            this.setState({mainVideo:res})
        }
        )      
    }

    render(){
        return(
            <>
            <HeroVideo
               key={this.state.mainVideo.id} 
               image={this.state.mainVideo.image}
               title={this.state.mainVideo.title}
               author={this.state.mainVideo.channel}
               time={this.state.mainVideo.timestamp}
               views={this.state.mainVideo.views}
               likes={this.state.mainVideo.likes}
               description={this.state.mainVideo.description}
               duration={this.state.mainVideo.duration}
               />                  
               </>
       )
    }
  
}

function HeroVideo(props){
        return(
            //how the data will be display in the html on the DOM 
            <div className="hero">
                <figure>
                    <video className="primary-video"
                    poster={VPoster} alt={props.image}>
                        <source src={Video1} type="mp4"/>
                    </video>
                    <div className="primary-video__controls">
                        <div className="primary-video__controls--play"><img src={Play} alt="play"/></div>
                        <div className="primary-video__controls--duration"><progress max="100" value="0"></progress>{props.duration}</div>
                        <div className="primary-video__controls--left"> 
                            <div className="primary-video__controls--left-fullscreen"><img src={FullScreen} alt="fullscreen"/></div>
                            <div className="primary-video__controls--left-volume"><img src={Volume} alt="volume"/></div>
                        </div>
                    </div>
                </figure>   
            </div>
        )
} 

export default PrimaryVideo;
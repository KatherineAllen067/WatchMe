import React from 'react';
import './PrimaryVideo.scss';
import Video1 from '../../../assets/videos/brainstation-sample.mp4';
import VPoster from '../../../assets/images/video-list-0.jpg';
import Play from '../../../assets/icons/Icon-play.svg';
import FullScreen from '../../../assets/icons/Icon-fullscreen.svg';
import Volume from '../../../assets/icons/Icon-volume.svg';
import axios from 'axios';

class PrimaryVideo extends React.Component{
    //import the data structure as state will be  changing state later
    constructor(props){
        super(props);
        this.state = {
            mainVideo:[]
        }
    }

    componentDidMount(){
        axios.get('https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=24bb5348-1a24-4271-bdb9-a54c38908b34')
        .then(res=>{ 
            console.log(res.data)
            this.setState({mainVideo:res.data})
        }
        )      
    }

    render(){
        return(
            <>
            <HeroVideo
               id={this.state.mainVideo.id} 
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
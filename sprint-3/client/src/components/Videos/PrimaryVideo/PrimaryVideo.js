import React from 'react';
import './PrimaryVideo.scss';
import Play from '../../../assets/icons/Icon-play.svg';
import FullScreen from '../../../assets/icons/Icon-fullscreen.svg';
import Volume from '../../../assets/icons/Icon-volume.svg';

class PrimaryVideo extends React.Component{
    render(props){
        return(
            <>
            <HeroVideo
                mainVideo={this.props.mainVideo}
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
                    poster={props.mainVideo.image} 
                    alt="video loading poster">
                        <source src={props.mainVideo.video} type="mp4"/>
                    </video>
                    <div className="primary-video__controls">
                        <div className="primary-video__controls--play">
                            <img src={Play} alt="play"/>
                        </div>
                        <div className="primary-video__controls--duration">
                            <progress max="100" value="0"></progress>
                            0:00/{props.mainVideo.duration}</div>
                        <div className="primary-video__controls--left"> 
                            <div className="primary-video__controls--left-fullscreen">
                                <img src={FullScreen} alt="fullscreen"/>
                            </div>
                            <div className="primary-video__controls--left-volume">
                                <img src={Volume} alt="volume"/>
                            </div>
                        </div>
                    </div>
                </figure>   
            </div>
        )
} 

export default PrimaryVideo;
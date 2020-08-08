import React from 'react';
import './PrimaryVideo.scss';
import { v4 as uuid } from 'uuid';
import Video1 from '../../assets/videos/brainstation-sample.mp4';
// import Pause from '../../assets/icons/Icon-pause.svg';
// import Play from '../../assets/icons/Icon-play.svg';
// import FullScreen from '../../assets/icons/Icon-fullscreen.svg';
import Likes from '../../assets/icons/Icon-likes.svg';
import Views from '../../assets/icons/Icon-views.svg';
// import Volume from '../../assets/icons/Icon-volume.svg';
// import Scrubber from '../../assets/icons/Icon-scrubber-control.svg';

function PrimaryVideo(props){
    const mainVideo = {
        id: uuid(),
        title: 'BMX Rampage:2018',
        description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was neededfor event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        channel: 'Red Cow',
        // image: src={Video1},
        views: {Views},
        likes:  {Likes},
        duration: 'type of <string>',
        video:{Video1},
        timestamp: '12/18/2018',
        comments: 'comment Array' 
    };

    return(
        <>
                {mainVideo.map(mainVideoObj=>
                    {return(
                        <HeroVideo
                        key={mainVideoObj.id}
                        video={mainVideoObj.video}
                        title={mainVideoObj.title}
                        author={mainVideoObj.channel}
                        time={mainVideoObj.timestamp}
                        views={mainVideoObj.views}
                        likes={mainVideoObj.likes}
                        description={mainVideoObj.description}
                        comments={mainVideoObj.comments}
                        /> 
                    );
                })}
        </>
    )
}

function HeroVideo(props){
        return(
            <div className="hero">
                <video
                poster={props.video} width="318px" height="183px">
                </video>
                <div className="hero-caption">
                    <h1 className="hero-caption__title">{props.title}</h1>
                    <h3 className="hero-caption__author">By {props.author}</h3>
                    <h3 className="hero-caption__time">{props.time}</h3>
                    <img className="hero-caption__views"
                    scr={props.views}
                    alt="views icon"/>
                    <img className="hero-caption__views"
                    src={props.likes}
                    alt="likes icon"/> 
                </div>
                <div className="hero-description">
                <span>{props.description}</span>
                </div>
            </div>
        )
} 

export default PrimaryVideo;
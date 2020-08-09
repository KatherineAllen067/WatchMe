import React from 'react';
import './PrimaryVideo.scss';
import { v4 as uuid } from 'uuid';
import Video1 from '../../assets/videos/brainstation-sample.mp4';
import {ReactComponent as Likes} from '../../assets/icons/Icon-likes.svg';
import {ReactComponent as Views} from '../../assets/icons/Icon-views.svg';
// import Pause from '../../assets/icons/Icon-pause.svg';
// import Play from '../../assets/icons/Icon-play.svg';
// import FullScreen from '../../assets/icons/Icon-fullscreen.svg';
// import Volume from '../../assets/icons/Icon-volume.svg';
// import Scrubber from '../../assets/icons/Icon-scrubber-control.svg';

function PrimaryVideo(props){
    const mainVideo = {
        id: uuid(),
        title: 'BMX Rampage: 2018 Highlights',
        description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was neededfor event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        channel: 'Red Cow',
        image: "two bmx bikers",
        views: "1,001,023",
        likes:  "110,985",
        duration: 'type of <string>',
        timestamp: '12/18/2018',
        comments: 'comment Array' 
    };

    return(
         <HeroVideo
            key={mainVideo.id} 
            image={mainVideo.image}
            title={mainVideo.title}
            author={mainVideo.channel}
            time={mainVideo.timestamp}
            views={mainVideo.views}
            likes={mainVideo.likes}
            description={mainVideo.description}
            comments={mainVideo.comments}
            /> 
    )
}

function HeroVideo(props){
        return(
            <div className="hero">
                <video
                poster={Video1} alt={props.image} width="318px" height="183px" controls="controls">
                    <source src={Video1} type="mp4"/>
                </video>
                <div className="hero-caption">
                    <h1 className="hero-caption__title">{props.title}</h1>
                    <div className="hero-caption__header">
                        <h3 className="hero-caption__header--author">By {props.author}</h3>
                        <h3 className="hero-caption__header--time">{props.time}</h3>
                    </div>
                    <div className="hero-caption__info">
                        <Views />
                        <span className="hero-caption__info--views">{props.views}</span>
                        <Likes />
                        <span className="hero-caption__info--likes">{props.likes}</span> 
                    </div>                   
                </div>
                <div className="hero-description">
                <span className="hero-description--print">{props.description}</span>
                </div>
            </div>
        )
} 
// const mainVideo = {
//     id: 'type of <string>',
//     title: 'type of <string',
//     description: 'type of <string>',
//     channel: 'type of <string>',
//     image: 'type of <string>',
//     views: 'type of <string>',
//     likes: 'type of <string>',
//     duration: 'type of <string>',
//     video: 'type of <string>',
//     timestamp: 'type of <number>',
//     comments: 'type of <array>' 
// };


export default PrimaryVideo;
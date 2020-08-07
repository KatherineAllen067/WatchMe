import React from 'react';
// import Video1 from '../../assets/videos/brainstation-sample.mp4 ';
import Video2 from '../../assets/images/video-list-0.jpg';
import Video3 from '../../assets/images/video-list-1.jpg';
import Video4 from '../../assets/images/video-list-3.jpg';
import Video5 from '../../assets/images/video-list-4.jpg';
import Video6 from '../../assets/images/video-list-5.jpg';
import Video7 from '../../assets/images/video-list-6.jpg';
import Video8 from '../../assets/images/video-list-7.jpg';
import Video9 from '../../assets/images/video-list-8.jpg';
import Pause from '../../assets/icons/Icon-pause.svg';
import Play from '../../assets/icons/Icon-play.svg';
import FullScreen from '../../assets/icons/Icon-fullscreen.svg';
import Likes from '../../assets/icons/Icon-likes.svg';
import Views from '../../assets/icons/Icon-views.svg';
import Volume from '../../assets/icons/Icon-volume.svg';
import Scrubber from '../../assets/icons/Icon-scrubber-control.svg';
import { render } from 'node-sass';


const thumbnailVideo = [
    // {
    //     id: 'video-1', 
    //     title: 'BMX Rampage: 2018 Highlights', 
    //     channel: 'Red Cow', 
    //     image: ""
    // },
    {
        id: 'video-2', 
        title: 'Become A Travel Pro In One Easy Lesson...', 
        channel: 'Scotty Cranmer', 
        image: <img src={Video2}/> 
    },
    {
        id: 'video-3', 
        title: 'Les Houches The Hidden Gem Of The...', 
        channel: 'Scotty Cranmer', 
        image: <img src={Video3}/> 
    },
    {
        id: 'video-4', 
        title: 'Travel Health Useful Medical Information...', 
        channel: 'Scotty Cranmer', 
        image: <img src={Video4}/>
    },
    {
        id: 'video-5', 
        title: 'Cheap Airline Tickets Great Ways To Save', 
        channel: 'Emily Harper', 
        image: <img src={Video5}/> 
    },
    {
        id: 'video-6', 
        title: 'Take A Romantic Break In A Boutique Hotel', 
        channel: 'Ethan Owen', 
        image: <img src={Video6}/> 
    },
    {
        id: 'video-7', 
        title: 'Choose The Perfect Accommodations', 
        channel: 'Lydia Perez', 
        image: <img src={Video7}/>
    },
    {
        id: 'video-8', 
        title: 'Cruising Destination Ideas', 
        channel: 'Timothy Austin', 
        image: <img src={Video8}/>
    },
    {
        id: 'video-9', 
        title: 'Train Travel On Track For Safety', 
        channel: 'Scotty Cranmer', 
        image: <img src={Video9}/> 
    }
];

//side video object
class Videos extends React.Component{
    state = {
        thumbanil: true
    }
    render(){
        return(
            <>
            <HeroVideo />
            <div className="thumbnail-box">
                <SideTitle />
                <SideVideo />
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

class SideVideo extends React.Component{
    render(){
        return(
            <div className="collpased">
                {/* <img className="side-image"
                src={props.}
                alt={props.}/>
                <h2>{props.title}</h2>
                <h3>{props.author}</h3> */}
            </div>
        )
    }
}   

//Main Video Object
// const mainVideo = {
//     id: '',
//     title: 'By: ',
//     description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was neededfor event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
//     channel: 'type of <string>',
//     image: <poster></poster>,
//     views: <img src={Views}/>,
//     likes: <img src={Likes}/>,
//     duration: 'type of <string>',
//     video:"poster tag",
//     timestamp: 'type of <number>',
//     comments: 'comment Array' 
// };

class HeroVideo extends React.Component{
    render(){
        return(
            <div className="Hero">
                {/* <video></video>
                <poster></poster>
                <h1>{props.title}</h1>
                <h3>By {props.author}</h3>
                <h3>{props.date}</h3>
                <img className="views"
                scr={props.}
                alt={props.}/>
                <img className="likes"
                src={props.}
                alt={props.}/>
                <span {props.mainVideo.description}/> */}
            </div>
        )
    } 
}


// export default Videos;
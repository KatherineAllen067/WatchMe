import React from 'react';
import { v4 as uuid } from 'uuid';
import './SecondaryVideos.scss';
import Video2 from '../../../assets/images/video-list-0.jpg';
import Video3 from '../../../assets/images/video-list-1.jpg';
import Video4 from '../../../assets/images/video-list-3.jpg';
import Video5 from '../../../assets/images/video-list-4.jpg';
import Video6 from '../../../assets/images/video-list-5.jpg';
import Video7 from '../../../assets/images/video-list-6.jpg';
import Video8 from '../../../assets/images/video-list-7.jpg';
import Video9 from '../../../assets/images/video-list-8.jpg';


function SecondaryVideos(){
    //data structure for the secondary videos that are in a collapsed state while primary video is playing
    const thumbnailVideo = [
        {
            id: uuid(), 
            title: 'Become A Travel Pro In One Easy Lesson', 
            channel: 'Scotty Cranmer', 
            image: <img className="side-video" src={Video2} alt="Man with bike" /> 
        },
        {
            id: uuid(), 
            title: 'Les Houches The Hidden Gem Of The Chamonix', 
            channel: 'Scotty Cranmer', 
            image: <img className="side-video" src={Video3} alt="beach front" /> 
        },
        {
            id: uuid(), 
            title: 'Travel Health Useful Medical Information For', 
            channel: 'Scotty Cranmer', 
            image: <img className="side-video" src={Video4} alt="blue smoothie bowl" />
        },
        {
            id: uuid(), 
            title: 'Cheap Airline Tickets Great Ways To Save', 
            channel: 'Emily Harper', 
            image: <img className="side-video" src={Video5} alt="skyline of Turkey" /> 
        },
        {
            id: uuid(), 
            title: 'Take A Romantic Break In A Boutique Hotel', 
            channel: 'Ethan Owen', 
            image: <img className="side-video" src={Video6} alt="resort on the ocean" /> 
        },
        {
            id: uuid(), 
            title: 'Choose The Perfect Accommodations', 
            channel: 'Lydia Perez', 
            image: <img className="side-video" src={Video7} alt="chair and window" />
        },
        {
            id: uuid(), 
            title: 'Cruising Destination Ideas', 
            channel: 'Timothy Austin', 
            image: <img className="side-video" src={Video8} alt="cruise ship" />
        },
        {
            id: uuid(), 
            title: 'Train Travel On Track For Safety', 
            channel: 'Scotty Cranmer', 
            image: <img className="side-video"src={Video9} alt="train and mountains" /> 
        }
    ];
 
        return(
            //passing the data to the component
            <>
            <div className="thumbnail">
                <SideTitle />
                <div className="thumbnail-box__column">
                    {thumbnailVideo.map(videoObj=>
                    {return(
                        <SideVideo
                        key={videoObj.id}
                        image={videoObj.image}
                        title={videoObj.title}
                        channel={videoObj.channel} 
                        />
                    );
                })}
                </div>
            </div>
            </>
        )
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
                    <h4 className="thumbnail-box__cell--info-title">{props.title}</h4>
                    <span className="thumbnail-box__cell--info-description">{props.channel}</span>
                </div>
                
            </div>
        )
}   

export default SecondaryVideos;
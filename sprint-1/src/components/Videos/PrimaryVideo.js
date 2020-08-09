import React from 'react';
import './PrimaryVideo.scss';
import { v4 as uuid } from 'uuid';
import Avatar from '../Avatar/Avatar.js';
import Video1 from '../../assets/videos/brainstation-sample.mp4';
import VPoster from '../../assets/images/video-list-0.jpg';
import {ReactComponent as Likes} from '../../assets/icons/Icon-likes.svg';
import {ReactComponent as Views} from '../../assets/icons/Icon-views.svg';
import CommentBox from '../CommentBox/CommentBox.js';
// import Pause from '../../assets/icons/Icon-pause.svg';
// import Play from '../../assets/icons/Icon-play.svg';
// import FullScreen from '../../assets/icons/Icon-fullscreen.svg';
// import Volume from '../../assets/icons/Icon-volume.svg';
// import Scrubber from '../../assets/icons/Icon-scrubber-control.svg';

class PrimaryVideo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mainVideo:{
                id: uuid(),
                title: 'BMX Rampage: 2018 Highlights',
                description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was neededfor event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
                channel: 'Red Cow',
                image: "two bmx bikers",
                views: "1,001,023",
                likes:  "110,985",
                duration: 'type of <string>',
                timestamp: '12/18/2018',      
                comments: [    {
                        id: uuid(),
                        name: "Micheal Lyons",
                        time: "12/18/2018",
                        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
                    },
                    {
                        id: uuid(),
                        name: "Gary Wong",
                        time: "12/12/2018",
                        comment: " Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
                    },
                    {
                        id: uuid(),
                        name: "Theodore Duncan",
                        time: "11/15/2018",
                        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
                    }
                ]
            }   
        }
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
               /> 
               <CommentBox />
               <div className="comment-holder">
                {this.state.mainVideo.comments.map(comment=>{
                    return(
                    <UserComments
                        key={comment.id}
                        name={comment.name}
                        date={comment.time}
                        post={comment.comment} />
                    );
                })}
            </div>    
               </>
       )
    }
  
}

function HeroVideo(props){
        return(
            <div className="hero">
                <video
                poster={VPoster} alt={props.image} width="318px" height="183px" controls="controls">
                    <source src={Video1} type="mp4"/>
                </video>
                <div className="hero-caption">
                    <h1 className="hero-caption__title">{props.title}</h1>
                    <div className="hero-caption__header">
                        <h3 className="hero-caption__header--author">By {props.author}</h3>
                        <h3 className="hero-caption__header--time">{props.time}</h3>
                    </div>
                    <div className="hero-caption__info">
                        <div className="hero-caption__info-cell">
                            <Views />
                            <span className="hero-caption__info-cell--views">{props.views}</span>
                        </div>
                        <div className="hero-caption__info-cell">
                            <Likes />
                            <span className="hero-caption__info-cell--likes">{props.likes}</span>
                        </div> 
                    </div>                   
                </div>
                <div className="hero-description">
            <span className="hero-description--print">{props.description}</span>
                </div> 
            </div>
        )
} 

function UserComments(props){
    return(
        <div className="comment-holder__row">
            <Avatar />
            <div className="comment-info">
                <div className="comment-info__user">
                    <span className="comment-info__user--name">{props.name}</span>
                    <span className="comment-info__user--date">{props.date}</span> 
                </div>
                <span className="comment-info__post">{props.post}</span>
            </div>
        </div>  
    );
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
import React from 'react';
import {ReactComponent as Likes} from '../../../assets/icons/Icon-likes.svg';
import {ReactComponent as Views} from '../../../assets/icons/Icon-views.svg';
import mainVideo from '../PrimaryVideo/PrimaryVideoDataStructure';
import './VideoDescription.scss';


class VideoDescription extends React.Component{
    state={
        mainVideo
    }

    render(){
        return(
            <div className="hero-box">
                        <div className="hero-caption">
                            <h1 className="hero-caption__title">{mainVideo.title}</h1>
                            <div className="hero-caption__container">
                                <div className="hero-caption__header">
                                    <h3 className="hero-caption__header--author">By {mainVideo.channel}</h3>
                                    <h3 className="hero-caption__header--time">{mainVideo.time}</h3>
                                </div>
                                <div className="hero-caption__info">
                                    <div className="hero-caption__info-cell">
                                        <Views />
                                        <span className="hero-caption__info-cell--views">{mainVideo.views}</span>
                                    </div>
                                    <div className="hero-caption__info-cell">
                                        <Likes />
                                        <span className="hero-caption__info-cell--likes">{mainVideo.likes}</span>
                                    </div> 
                                </div>   
                            </div>               
                        </div>
                        <div className="hero-description">
                            <span className="hero-description--print">{mainVideo.description}</span>
                        </div> 
                    </div>
        )
    }
}

export default VideoDescription;
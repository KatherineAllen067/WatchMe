import React from 'react';
import {ReactComponent as Likes} from '../../../assets/icons/Icon-likes.svg';
import {ReactComponent as Views} from '../../../assets/icons/Icon-views.svg';
import './VideoDescription.scss';

function formatDate(t){
    let time = t
    var myDate = new Date(time);
    var year = myDate.getFullYear()
    var month = myDate.getMonth()+1;
    var date = myDate.getDate();
    var dateFormat = date +"/" + month + "/" + year;
    return dateFormat
}

class VideoDescription extends React.Component{
    render(props){
        return(
            <div className="hero-box">
                <div className="hero-caption">
                    <h1 className="hero-caption__title">{this.props.mainVideo.title}</h1>
                    <div className="hero-caption__container">
                        <div className="hero-caption__header">
                            <h3 className="hero-caption__header--author">By {this.props.mainVideo.channel}</h3>
                            <h3 className="hero-caption__header--time">{formatDate(this.props.mainVideo.timestamp)}</h3>
                        </div>
                        <div className="hero-caption__info">
                            <div className="hero-caption__info-cell">
                                <Views />
                                <span className="hero-caption__info-cell--views">{this.props.mainVideo.views}</span>
                            </div>
                            <div className="hero-caption__info-cell">
                                <Likes />
                                <span className="hero-caption__info-cell--likes">{this.props.mainVideo.likes}</span>
                            </div> 
                        </div>   
                    </div>               
                </div>
                <div className="hero-description">
                    <span className="hero-description--print">{this.props.mainVideo.description}</span>
                </div> 
            </div>
        )
    }
}

export default VideoDescription;
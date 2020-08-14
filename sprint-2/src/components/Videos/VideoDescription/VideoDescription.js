import React from 'react';
import {ReactComponent as Likes} from '../../../assets/icons/Icon-likes.svg';
import {ReactComponent as Views} from '../../../assets/icons/Icon-views.svg';
import './VideoDescription.scss';
import axios from 'axios';


class VideoDescription extends React.Component{
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
            <div className="hero-box">
                        <div className="hero-caption">
                            <h1 className="hero-caption__title">{this.state.mainVideo.title}</h1>
                            <div className="hero-caption__container">
                                <div className="hero-caption__header">
                                    <h3 className="hero-caption__header--author">By {this.state.mainVideo.channel}</h3>
                                    <h3 className="hero-caption__header--time">{this.state.mainVideo.timestamp}</h3>
                                </div>
                                <div className="hero-caption__info">
                                    <div className="hero-caption__info-cell">
                                        <Views />
                                        <span className="hero-caption__info-cell--views">{this.state.mainVideo.views}</span>
                                    </div>
                                    <div className="hero-caption__info-cell">
                                        <Likes />
                                        <span className="hero-caption__info-cell--likes">{this.state.mainVideo.likes}</span>
                                    </div> 
                                </div>   
                            </div>               
                        </div>
                        <div className="hero-description">
                            <span className="hero-description--print">{this.state.mainVideo.description}</span>
                        </div> 
                    </div>
        )
    }
}

export default VideoDescription;
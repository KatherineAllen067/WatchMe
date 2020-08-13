import React from 'react';
import Avatar from '../../Avatar/Avatar.js';
import './UserComment.scss';
import mainVideo from '../PrimaryVideo/PrimaryVideoDataStructure.js';

class UserComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mainVideo 
        }
    } 
    render(){
        return(
            //passing the props to the comment component
                <div className="comment-holder">
                    {this.state.mainVideo.comments.map(comment=>{
                        return(
                        <Comment
                            key={comment.id}
                            name={comment.name}
                            date={comment.time}
                            post={comment.comment} />
                        );
                    })}   
                </div>  
            )
            }
        }
           

function Comment(props){
        return(
            //displaying the props in the html on the DOM 
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
    )
}

export default UserComments;
import React from 'react';
import Avatar from '../../Avatar/Avatar.js';
import './UserComment.scss';
import { v4 as uuid } from 'uuid';

class UserComments extends React.Component{

    render(props){
        return(
            //passing the props to the comment component
                <div className="comment-holder">
                    {
                        this.props.mainVideo.comments.map(v=>{
                            return(
                                <Comment
                                key={uuid()}
                                name={v.name}
                                date={v.timestamp}
                                post={v.comment}
                                />
                            )
                        })
                    }
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
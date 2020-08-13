import React from 'react';
import './CommentBox.scss';
import Avatar from '../Avatar/Avatar.js';

class CommentBox extends React.Component{
    render(){
        return(
            <div className="comment">
                <h3 className="comment-title">3 Comments</h3>
                <div className="comment-input">
                    <Avatar />
                    <CommentInput />
                </div>
                <div className="comment-posts">
                </div>
            </div>
        )}
}

const CommentInput = () =>{
    return(
            <form class="comment-join" action="submit" method="post">
                <label className="comment-join__title">JOIN THE CONVERSATION
                    <input className="comment-join__text" name="join" for="join" type="text" placeholder="Write comment here">
                    </input>
                </label>
                <button className="comment-button" type="submit">COMMENT</button>
            </form>
        );
}

export default CommentBox;
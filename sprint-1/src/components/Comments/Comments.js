import React from 'react';
import { v4 as uuid } from 'uuid';
import Avatar from '../Avatar/Avatar.js';
import './Comments.scss';


function Comments(props){
    //array of object holding comment post information
  const commentArr = [
        {
            id: uuid(),
            name: "Micheal Lyons",
            time: "12/18/2018",
            comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of aconcert I have EVER witnessed."
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
    ];     
         
        return (
            <div className="comment-holder">
                {commentArr.map(postObj =>{
                    return(
                    <UserPost
                        key={postObj.id}
                        name={postObj.name}
                        date={postObj.time}
                        post={postObj.comment} />
                    );
                })}
            </div>    
        )
}

function UserPost(props){
    return(
        <div className="comment-holder__row">
            <Avatar />
            <div className="comment-info">
                <span className="comment-info__name">{props.name}</span>
                <span className="comment-info__date">{props.date}</span>
                <span className="comment-info__post">{props.post}</span>
            </div>
        </div>  
    );
}

export default Comments;
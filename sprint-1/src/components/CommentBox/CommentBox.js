import React from 'react';
import './CommentBox.scss';



const CommentBox =()=>{
    return(
        <div className="comment">
            <Avatar />
            <CommentInput />
            <Comments />
        </div>
    )

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
    )
}

const Avatar = () =>{
    return(
        <div class="comment-avatar"></div>
    )
}

const commentArr = [
    {
        "name": "Micheal Lyons",
        "time": "12/18/2018",
        "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of aconcert I have EVER witnessed."
    },
    {
        "name": "Gary Wong",
        "time": "12/12/2018",
        "comment": " Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
    },
    {
        "name": "Theodore Duncan",
        "time": "11/15/2018",
        "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
    }
];

class Comments extends React.Component{
    render(){

        const commentArr= this.props.commentArr;
        
        let commentPost=[];
        // for (var i=0; i<commentArr.length; i++){
        //     commentPost.push(<div name={commentArr[i].name} time={commentArr[i].time} comment={commentArr[i].comment}/>)
        // }
    
        return (
            <div>
                {commentPost}
            </div>    
        )
    }
}

export default CommentBox;
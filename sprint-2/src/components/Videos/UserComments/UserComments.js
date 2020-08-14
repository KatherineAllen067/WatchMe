import React from 'react';
import Avatar from '../../Avatar/Avatar.js';
import './UserComment.scss';
import axios from 'axios';

class UserComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mainVideo :[]
        }
    } 
    componentDidMount(){
        axios.get('https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=24bb5348-1a24-4271-bdb9-a54c38908b34')
        .then(res=>{ 
            console.log(res.datacomments)
            this.setState({mainVideo:res.data.comments})
        }
        )      
    }

    render(){
        return(
            //passing the props to the comment component
                <div className="comment-holder">
                    {this.state.mainVideo.map(comment=>{
                        return(
                        <Comment
                            key={comment.id}
                            name={comment.name}
                            date={comment.timestamp}
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
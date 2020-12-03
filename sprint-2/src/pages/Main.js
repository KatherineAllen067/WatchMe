import React from "react";
import Header from '../components/Header/Header.js';
import PrimaryVideo from '../components/Videos/PrimaryVideo/PrimaryVideo.js';
import SecondaryVideos from '../components/Videos/SecondaryVideos/SecondaryVideos.js';
import CommentBox from '../components/CommentBox/CommentBox.js';
import VideoDescription from '../components/Videos/VideoDescription/VideoDescription.js';
import UserComments from '../components/Videos/UserComments/UserComments.js';
import './Main.scss';
import axios from 'axios';

const KEY = "?api_key=24bb5348-1a24-4271-bdb9-a54c38908b34";
const APIGrab ="https://project-2-api.herokuapp.com/videos";

//create a function to format the date object use .find() on the comments array inside the main video and video description to change the dates posted
//make sure to format the date on the comments and description of the main video object not side videos they dont have timestamps
class Main extends React.Component {

  state={
    mainVideo: null,
    thumbnail:[]
  }

    componentDidMount(){
      let defaultVideo = "1af0jruup5gu";
      if(this.props.match.params.videoId){
        defaultVideo = this.props.match.params.videoId
      }

      // console.log(this.props.match)
      axios.get(APIGrab+KEY)
      .then(res=>{ 
          console.log(res.data)
          let sideV= res.data
          //axios request to the main video with the details and comments
          axios.get(APIGrab+"/"+defaultVideo+KEY)
          .then(mainres=>{
            console.log(mainres.data)
            let mainV= mainres.data
            //setting state for both get requests
            this.setState({
              thumbnail:sideV,
              mainVideo:mainV
            })
          })    
      }
      )      
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.videoId !== this.props.match.params.videoId){
      axios.get(APIGrab+"/"+this.props.match.params.videoId+KEY)
      .then(response=>{
        console.log(response.data)
        this.setState({
          mainVideo: response.data
        })
      })
    }
  }

  render(){
  //conditional statement here, in order to avoid putting it at every individual component
  //I passed mainVideo to
    if(!this.state.mainVideo){
      return null;
    }

    return (
      <>
      <Header />
      <PrimaryVideo
        mainVideo={this.state.mainVideo}
      />
      <main className="lower-block">
        <div className="part-2">
          <VideoDescription
            mainVideo={this.state.mainVideo}
          />
          <CommentBox />
          <UserComments 
            mainVideo={this.state.mainVideo}
          />
        </div>
        <div className="part-3">
          {/* passed both thumbnail and mainVideo to secondary video component in order to compare and filter the array with the id's */}
          <SecondaryVideos
            thumbnail={this.state.thumbnail}
            mainVideo={this.state.mainVideo}
          />
        </div>
      </main>
      </>
    )
  }
}

export default Main;







import React from "react";
import Header from '../components/Header/Header.js';
import PrimaryVideo from '../components/Videos/PrimaryVideo/PrimaryVideo.js';
import SecondaryVideos from '../components/Videos/SecondaryVideos/SecondaryVideos.js';
import CommentBox from '../components/CommentBox/CommentBox.js';
import VideoDescription from '../components/Videos/VideoDescription/VideoDescription.js';
import UserComments from '../components/Videos/UserComments/UserComments.js';
import './Main.scss';
import axios from 'axios';

class Main extends React.Component {

  state={
    mainVideo: null,
  }

    componentDidMount(){
      let defaultV = "1af0jruup5gu";
      if(this.props.match.params.videoId){
        defaultV = this.props.match.params.videoId
        }
        // console.log(this.props.match)
          axios.get("http://localhost:8080/videos/")
              .then(response=>{
                  axios.get("http://localhost:8080/videos/"+defaultV)
                    .then(res=>{
                      //setting state for both get requests
                      this.setState({
                        sideVideo:response.data,
                        mainVideo:res.data                      
                      })
                    })
              })          
    }

    componentDidUpdate(prevProps){
      if(prevProps.match.params.videoId !== this.props.match.params.videoId){
        axios.get("http://localhost:8080/videos/"+this.props.match.params.videoId)
          .then(response=>{
            this.setState({
              mainVideo: response.data
            })
        })
      }
    }

  render(){
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
            mainVideo={this.state.mainVideo}
            sideVideo={this.state.sideVideo}            
          />
        </div>
      </main>
      </>
    )
  }
}

export default Main;







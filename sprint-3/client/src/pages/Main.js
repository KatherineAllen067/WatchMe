import React from "react";
import Header from '../components/Header/Header.js';
import PrimaryVideo from '../components/Videos/PrimaryVideo/PrimaryVideo.js';
import SecondaryVideos from '../components/Videos/SecondaryVideos/SecondaryVideos.js';
import CommentBox from '../components/CommentBox/CommentBox.js';
import VideoDescription from '../components/Videos/VideoDescription/VideoDescription.js';
import UserComments from '../components/Videos/UserComments/UserComments.js';
import './Main.scss';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class Main extends React.Component {

  state={
    mainVideo: null,
    thumbnail:[]
  }

    componentDidMount(){
      // let defaultVideo = "1af0jruup5gu";
      // if(this.props.match.params.videoId){
      //   defaultVideo = this.props.match.params.videoId
      // }

      console.log(this.props.match)
      axios.get(`${API_URL}/videos`)
      .then(res=>{ 
          console.log(res.data)
          let sideV= res.data
          //axios request to the main video with the details and comments
          axios.get(`http://localhost:8080/videos/1af0jruup5gu`)
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

  //+this.props.match.params.videoId   --moved this out of the get request while debugging 
  
  // componentDidUpdate(prevProps){
  //   if(prevProps.match.params.videoId !== this.props.match.params.videoId){
  //     axios.get(`${API_URL}/videos/1af0jruup5gu`+this.props.match.params.videoId)
  //     .then(response=>{
  //       console.log(response)
  //       this.setState({
  //         mainVideo: response.data
  //       })
  //     })
  //   }
  // }

  render(){
  //conditional statement here, in order to avoid putting it at every individual component I passed mainVideo to
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







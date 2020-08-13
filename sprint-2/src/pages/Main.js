import React from "react";
import Header from '../components/Header/Header.js';
import PrimaryVideo from '../components/Videos/PrimaryVideo/PrimaryVideo.js';
import SecondaryVideos from '../components/Videos/SecondaryVideos/SecondaryVideos.js';
import CommentBox from '../components/CommentBox/CommentBox.js';
import VideoDescription from '../components/Videos/VideoDescription/VideoDescription.js';
import UserComments from '../components/Videos/UserComments/UserComments.js';
import './Main.scss';



function Main() {
    return (
      <>
      <Header />
      <PrimaryVideo />
      <main className="lower-block">
        <div className="part-2">
          <VideoDescription />
          <CommentBox />
          <UserComments />
        </div>
        <div className="part-3">
          <SecondaryVideos />
        </div>
      </main>
      </>
    )
  }


export default Main;







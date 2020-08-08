import React from 'react';
import './Videos.scss';
import SecondaryVideos from './SecondaryVideos.js';
import PrimaryVideo from './PrimaryVideo.js';
import CommentBox from'../CommentBox/CommentBox.js';


function Videos(props){ 
        return(
            <>
            <PrimaryVideo />
            <CommentBox />
            <SecondaryVideos />
            </>
        )
} 
 export default Videos;
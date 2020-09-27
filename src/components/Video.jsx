import React from "react";
import "./styles/Video.css";
import { MdFullscreen, MdPause, MdPlayArrow, MdVolumeDown } from 'react-icons/md'
import { useState, useEffect, createRef } from "react";
import {  } from "react";

const Video = (props) => {

  const[playing, setPlaying] = useState(false)
  const video = createRef()
  // const video = document.getElementById('theVideo')

  // function playingToggle() {
  //   playing? setPlaying(false) && video.play(): setPlaying(true) && video.pause()
  // }
function playingToggle(){
  if(playing){
    setPlaying(false)
    video.play()
  }
  else{
    setPlaying(true)
    video.pause()
  }
}
  // useEffect(() =>{
  //   playing ? video.play() : video.pause();
  // })

  return (
    <div className="Video" id="Video">
      <div className="video-container">
        <div className="course-video">
          <video
            className="theVideo"
            id="theVideo"
            controlsList="nodownload"
            src={props.video}
            ref={video}
            type="video"
          ></video>
          <div className="Video-controls">
            <div className="Video-bar">
              <div className="Video-juice">

              </div>
            </div>
            <div className="Video-buttons">
              <button 
              id="play-pause"
              className="Video-button"
              onClick={playingToggle}
              >
                {playing?<MdPause/> : <MdPlayArrow/>}
              </button>
              <button className="Video-button">
              <MdVolumeDown></MdVolumeDown>
              </button>
              <button
              className="Video-button"
              >
                <MdFullscreen/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

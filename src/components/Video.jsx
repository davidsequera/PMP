import React from "react";
import "./styles/Video.css";


const Video = (props) => {
  return (
    <div className="Video">
      <div className="video-container">
        <div className="course-video">
          <video
            className="theVideo"
            controls
            controlsList="nodownload"
            src={`http://192.168.0.10:3030/video/${props.video}`}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Video;

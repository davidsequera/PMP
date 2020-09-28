import React from "react";
import "./styles/Video.css";


const Video = (props) => {
  return (
    <div className="Video" id="Video">
      <div className="video-container">
        <div className="course-video">
          <video
            className="theVideo"
            controls
            controlsList="nodownload"
            src={props.video}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Video;

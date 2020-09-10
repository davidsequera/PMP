import React from 'react'
import './styles/Video.css'

class Footer extends React.Component{
    render(){
        return(
        <div className='Video' id="Video">
			<div className="video-container">
                <div className="course-video">
                    {/* <h1 className="theVideo">{this.props.video}</h1> */}
                    <video className="theVideo" controls="controls" src={this.props.video}></video>
                </div>
            {/* <iframe className="theVideo" title="unique" width="560" height="315" src="https://www.youtube.com/embed/CS9OO0S5w2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
			</div>
		</div>
        )
    }
}

export default Footer
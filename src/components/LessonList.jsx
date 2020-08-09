import React from 'react'
import { Link } from 'react-router-dom'
import './styles/LessonList.css'

class LessonList extends React.Component{
        constructor(props){
        super(props)
        this.state = {
            user: 28,
            chapter: undefined
        }
    }
    render(){
        return(
                <ul className="component-container" id="LessonList">
                    {this.props.restaurant.map((chapter) =>{
                        return(
                            <li className="chapter" id={chapter.name} key={chapter.id}>
                                <div className="chapter-container">
                                    <div
                                    role="button"
                                    className="chapter-button"
                                    onClick={ () => {
                                        if(this.state.chapter === chapter.name){
                                            this.setState({chapter : undefined})
                                        }
                                        else{
                                            this.setState({chapter :chapter.name})
                                        }
                                        }}
                                    >
                                        <h2 className='chapter-text '>{chapter.name}</h2>
                                        <div className="progress-bar">
                                                <div className={this.state.user < chapter.number ? "progress-ball" : "progress-ball active-ball"}>
                                                    <div className="progress-mini-ball"></div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div 
                                className={this.state.chapter === chapter.name ? "lesson-container" : " hidden lesson-container"} 
                                >
                                {chapter.lessons ? chapter.lessons.map((lesson) =>{
                                    return(
                                        <div className="lesson">
                                            <Link to={lesson.link}className='lesson-link' key={lesson.number}>
                                                <h4 className="lesson-text">{lesson.name}</h4>
                                            </Link>
                                            <div className="progress-bar">
                                                <div className={this.state.user < lesson.number ? "progress-ball" : "progress-ball active-ball"}>
                                                    <div className="progress-mini-ball"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : console.error(`${chapter.name} Lección no encontrada`)}
                                </div>         
                            </li>
                        )
                    })}
                </ul>
        )
    }
}

export default LessonList
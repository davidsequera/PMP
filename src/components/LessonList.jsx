import React from 'react'
import './styles/LessonList.css'

class LessonList extends React.Component{
        constructor(props){
        super(props)
        this.state = {
            user: {
                data:{
                    user_lessons: [
                        {
                            user: 'id',
                            lesson: '5f55707f19351c2a05fc135e'
                        },
                        '5f55707f19351c2a05fc135e' // hacer un map de solo strings si true en la query
                    ]
                }
            },
            chapter: undefined
        }
    }
    render(){
        return(
                <ul className="component-container" id="LessonList">
                    {this.props.chapters.map((chapter) =>{
                        return(
                            <li className="chapter" id={chapter.name} key={chapter._id}>
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
                                                <div className={ chapter.number ? "progress-ball active-ball" : "progress-ball inactive-ball"}>
                                                    <div className="progress-mini-ball"></div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <ul 
                                className={this.state.chapter === chapter.name ? "lesson-container" : " hidden"} 
                                >
                                {chapter.lessons ? chapter.lessons.map((lesson) =>{
                                    return(
                                        <li className="lesson" id={lesson._id} key={lesson._id}>
                                            <button 
                                            onClick={ () =>{
                                                this.props.videoChanger(lesson.link)
                                            }}
                                            className='lesson-link'>
                                                <h4 className="lesson-text">{lesson.name}</h4>
                                            </button>
                                            <div className="progress-bar">
                                                <div className={this.state.user.data.user_lessons.includes(lesson._id)? "progress-ball active-ball" : "progress-ball inactive-ball"}>
                                                    <div className="progress-mini-ball"></div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }) : console.error(`${chapter.name} Lección no encontrada`)}
                                </ul>         
                            </li>
                        )
                    })}
                </ul>
        )
    }
}

export default LessonList
import React from 'react'
import CoursesList from '../components/CourseList'
import './styles/Courses.css'



class Courses extends React.Component{
    render(){
        return(
                <div className="Page-container" id="Courses">
                        <h1 className="Courses-title">Cursos</h1>
                        <CoursesList/>
                </div>
            )
    }
}

export default Courses
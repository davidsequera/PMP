import React from 'react'
import { Link } from 'react-router-dom'
import './styles/UserCourse.css'

function UserCourse(props) {
        return(
        <Link to={"courses/"+props.link} className="UserCourse">
            <h1 className="UserCourse-tite">{props.title || 'Title'}</h1>
            <progress className="UserCourse-bar" max={props.total} value={props.value}> 70% </progress>
        </Link>
        )
}

export default UserCourse;
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/CourseItem.css'

function CourseItem (props){
        return(
            <div className="CourseItem">
                    <Link to={"courses/"+props.link}>
                       <p className="CourseItem-text">{props.title}</p> 
                    </Link>
            </div>
        )
    }

export default CourseItem
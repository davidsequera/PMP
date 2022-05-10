import React from 'react'
import CourseItem from '../microcomponents/CouseItem'
import { useQuery, gql } from "@apollo/client";
import './styles/CoursesList.css'
import Loading from '../microcomponents/Loading';
import { Redirect } from 'react-router-dom';

const COURSES = gql`
query Courses{
    courses{
        id
        name
    }
}
`;



function CoursesList (){
  const { loading, error, data } = useQuery(COURSES)

  if(loading){
    return <Loading/>
  }
  if (error) {
    return <Redirect to="/" />
  }
  return(
        <ul className="CoursesList">
          {data.courses.map((course) => {
        return (
          <CourseItem key={course.id} title={course.name} link={course.id}/>)
        })}
        </ul>
        )
    }

export default CoursesList
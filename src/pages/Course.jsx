import React from 'react'
import LessonList from '../components/LessonList'
import Video from '../components/Video'
import './styles/Course.css'
import V11 from '../assets/video/11.mp4'
import {useQuery, gql } from '@apollo/client'
import { useState } from 'react'
import Loading from '../microcomponents/Loading'


const api = gql`
      query Chapters{
        chapters(course_id: "5f5426d165730f810b643129") {
          name
            lessons{
            _id
            name
            link
          }
        }
      }
`

const Course = () =>{
    const [video, setVideo] = useState(V11);
    const {loading, error, data} = useQuery(api);

    function videoChanger(link){
        setVideo(link)
    }
    if(loading){
        return(
          <Loading/>
        )
      }
    if(error){
        return(
            <h1>Error</h1>
        )
    }
      return(
              <div className="Page-container" id="Course">
                  <div className="courses">
                      <Video
                      video={video}
                      />
                      <LessonList
                      videoChanger={videoChanger}
                      chapters={data.chapters}
                      />
                  </div>
              </div>
      )
};


export default Course;
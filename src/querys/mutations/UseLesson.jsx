import React, {useState} from 'react'

export default function Lesson (){
    const [userLesson, setUserLesson] = useState(tem())
    function tem(props){
        let temporal =  props.viewed
        let tem = temporal.filter(e => e.viewed !== false)
        tem = tem.map(e => e.lesson_id)
        return tem
      }
      function toogleViewed(props, lesson){
        let copy = userLesson.filter(word => word !== lesson)
        if(userLesson.includes(lesson)){
          setUserLesson(copy)
          props.viewedHandler(lesson, false)
        }
        else if(!(userLesson.includes(lesson))){
          copy.unshift(lesson)
          setUserLesson(copy)
          props.viewedHandler(lesson, true)
        }
        else{
          console.error('Unable to Commit Lesson Viewed')
        }
      }
    }

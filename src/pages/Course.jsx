import React,{useContext, useEffect} from "react";
import LessonList from "../components/LessonList";
import Video from "../components/Video";
import "./styles/Course.css";
import V11 from "../assets/video/11.mp4";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useState} from "react";
import Loading from "../microcomponents/Loading";
import NotFound from "../components/NotFound";
import { Redirect } from "react-router-dom";
import  UserContextProvider from "../layout/context/UserContext";


const CHAPTERS = gql`
  query Chapters($chapterId: ID!) {
    chapters(course_id: $chapterId) {
      id
      name
      lessons {
        id
        name
        link
      }
    }
  }
`;

const LESSONLIST = gql`
query users{
  user{
    id
    name
    lessons{
      id
      user_id
      lesson_id
      viewed
    }
  }
}
`;
const LESSONVIEWED = gql`
  mutation createViewed($type: lessonViewedInput) {
    lessonViewed(input: $type) {
      id
      user_id
      lesson_id
      viewed
    }
  }
`;
//capitulo 5 leccion 4,5
const Course = () => {
  const [video, setVideo] = useState(V11);
  const { client, loading, error, data } = useQuery(CHAPTERS, {variables: {chapterId: "1"}});
  const viewed = useQuery(LESSONLIST);
  const [updateViewed] = useMutation(LESSONVIEWED)
  const {setJWT} = useContext(UserContextProvider);
  


  function viewedHandler(lesson, state){
    let userInfo = {user_id: viewed.data.user.id,lesson_id: lesson, viewed: state}
    updateViewed({variables: {type: userInfo}})
  }
  function videoChanger(link) {
    setVideo(link);
  }
  useEffect(() =>{
    return ()=>{
      client.stop()
    }
  }, )
  if (loading || viewed.loading) {
    return <Loading />;
  }
  if(viewed.error) {        
    client.stop()
    client.resetStore()
    localStorage.removeItem("token")
    setJWT()
    return <Redirect to="/signin" />
  }
  if (error) {

    return <NotFound />;
  }
  return (
    <div className="Page-container" id="Course">
      <div className="courses">
        <Video video={video} />
        <LessonList videoChanger={videoChanger} chapters={data.chapters} viewed={viewed.data.user.lessons} viewedHandler={viewedHandler} />
      </div>
    </div>
  );
};

export default Course;

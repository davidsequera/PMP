import React,{useContext, useEffect} from "react";
import LessonList from "../components/LessonList";
import Video from "../components/Video";
import "./styles/Chapters.css";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useState} from "react";
import Loading from "../microcomponents/Loading";
import NotFound from "../components/NotFound";
import { Redirect, useParams } from "react-router-dom";
import  UserContextProvider from "../layout/context/UserContext";
import logo from '../assets/logo/round_logo.png'



const CHAPTERS = gql`
  query Chapters($CourseId: ID!) {
    chapters(course_id: $CourseId) {
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
const Chapters = () => {
  const {courseId} = useParams();
  const [video, setVideo] = useState(undefined);
  const { client, loading, error, data } = useQuery(CHAPTERS, {variables: {CourseId: courseId }});
  const viewed = useQuery(LESSONLIST);
  const [updateViewed] = useMutation(LESSONVIEWED)
  const {jwt, setJWT} = useContext(UserContextProvider);
  


  function viewedHandler(lesson, state){
    let userInfo = {token: jwt, user_id: viewed.data.user.id,lesson_id: lesson, viewed: state}
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
    <div className="Page-container" id="Chapters">
      <div className  ="chapters-video">
        {video? <Video video={video} /> : <img className="Chapters-logo" src={logo} alt={logo}/>}
        </div>      
        <LessonList videoChanger={videoChanger} chapters={data.chapters}  viewed={viewed.data.user.lessons} viewedHandler={viewedHandler} />
    </div>
  );
};

export default Chapters;

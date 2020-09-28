import React from "react";
import LessonList from "../components/LessonList";
import Video from "../components/Video";
import "./styles/Course.css";
import V11 from "../assets/video/11.mp4";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
import Loading from "../microcomponents/Loading";
import NotFound from "../components/NotFound";

const CHAPTERS = gql`
  query Chapters {
    chapters(course_id: "5f5426d165730f810b643129") {
      _id
      name
      lessons {
        _id
        name
        link
      }
    }
  }
`;

const LESSONLIST = gql`
query users{
  user(_id: "5f720a8e4823f406ec30b96e"){
    _id
    name
    lessons{
      _id
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
      _id
      user_id
      lesson_id
      viewed
    }
  }
`;
//capitulo 5 leccion 4,5
const Course = () => {
  const [video, setVideo] = useState(V11);
  const { loading, error, data } = useQuery(CHAPTERS);
  const viewed = useQuery(LESSONLIST);
  const [updateViewed] = useMutation(LESSONVIEWED) 

  function viewedHandler(lesson, state){
    let userInfo = {user_id: "5f720a8e4823f406ec30b96e",lesson_id: lesson, viewed: state}
    updateViewed({variables: {type: userInfo}})
  }

  function videoChanger(link) {
    setVideo(link);
  }
  if (loading || viewed.loading) {
    return <Loading />;
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

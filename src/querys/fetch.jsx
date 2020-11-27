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
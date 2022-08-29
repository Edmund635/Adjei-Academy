import CourseCard from './CourseCard'


function CourseContainer({courses}) {

    return (
        <div className="courseContainer">
             {courses.map(course => <CourseCard  key={course.id} course={course}  />)}
        </div>
    );
  }
  
export default CourseContainer
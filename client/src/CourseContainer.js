import CourseCard from './CourseCard'


function CourseContainer({courses}) {

    return (
     <div>
         <div className="courseContainer">
             {courses.map(course => <CourseCard  key={course.id} course={course}  />)}
         </div>
     </div>
    );
  }
  
export default CourseContainer
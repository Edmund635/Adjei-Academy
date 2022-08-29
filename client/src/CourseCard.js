import {Link} from 'react-router-dom'


function CourseCard({course}) {
    const {title, description, instructor, id} = course
    console.log(course)
    return (
      <div>
        <Link to={`/courses/${id}`}> <h2>{title}</h2></Link>
        <p>Course Description: {description}</p>
        <p>Course Instructor: {instructor}</p>
      </div>
     
    );
  }
  
  export default CourseCard
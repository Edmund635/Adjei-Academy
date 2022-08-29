import {Link} from 'react-router-dom'


function CourseCard({course}) {
    const {title, description, instructor, id} = course
    console.log(course)
    return (
      <div className='courseCard'>
        <Link to={`/courses/${id}`}> <h2>{title}</h2></Link>
      </div>
     
    );
  }
  
  export default CourseCard
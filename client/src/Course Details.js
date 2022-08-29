import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function CourseDetails() {
    const [course, setCourse] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState(false)
    
    const { id } = useParams();

    useEffect(() => {
      fetch(`/courses/${id}`)
        .then((res) =>{
            if(res.ok){
                res.json().then(courseData => {
                    setCourse(courseData)
                    setIsLoaded(true)
                });
            }
            else {
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>
    if(errors) return <h1>{errors}</h1>


    const { description, instructor  } = course
    return(
        <div className="card">
            <p>Course Description: {description}</p>
            <p>Course Instructor: {instructor}</p>
            <p>Students Enrolled: {course.users.length}</p>
            <p> Maximum # of students: 25 </p>
        </div>
    );
}

export default CourseDetails;
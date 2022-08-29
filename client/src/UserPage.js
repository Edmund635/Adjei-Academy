import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
function UserPage({updateUser}){
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()
    const {id} = params

    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    updateUser(user)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
       
    },[])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <div>
            <h2>Welcome to Adjei Academy, <br></br> {user.username}</h2>
            <h3>Courses</h3>
            <ul>
                {user.courses.map(course => (
                <li>
                    <h2>{course.title}</h2>
                    <p>Description: {course.description}</p>
                    <p>Instructors: {course.instructor} </p>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default UserPage
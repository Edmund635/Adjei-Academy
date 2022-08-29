import './App.css';
import { Route, Switch } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Home from './Home'
import UserPage from './UserPage';
import SignUp from './SignUp';
import Login from './Login'
import Navigation from './Navigation'
import CourseDetails from './Course Details';
import ContactInfo from './ContactInfo';
import EditContactInfo from './EditContactInfo';


function App() {
  const [courses, setCourses] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetchCourses()
  },[])

  const fetchCourses = () => {
    fetch('/courses')
    .then(res => {
      if(res.ok){
        res.json().then(courseData => setCourses(courseData))
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }


  const updateUser = (user) => setCurrentUser(user)
  if(errors) return <h1>{errors}</h1>


  return (
    <>
      <Navigation updateUser={updateUser} currentUser={currentUser}/>
      <Switch>
      <Route exact path='/users/new'>
        <SignUp updateUser={updateUser}/>
      </Route>

      <Route path='/users/:id'>
        <UserPage updateUser={updateUser}/>
      </Route>

      <Route path='/login'>
        <Login updateUser={updateUser}/>
      </Route>

    
      <Route exact path='/'>
        <Home courses={courses}/>
      </Route>

      <Route exact path="/courses/:id">
        <CourseDetails />
      </Route>
      <Route exact path="/contact_info/new">
        <ContactInfo currentUser={currentUser}/>
      </Route>

      <Route exact path="/:id/contact_info">
        <EditContactInfo currentUser={currentUser}/>
      </Route>
      </Switch>
    </>
  )
}

export default App

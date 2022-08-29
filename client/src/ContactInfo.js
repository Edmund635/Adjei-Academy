import React, { useState} from 'react'
import {useHistory, Link, useParams} from 'react-router-dom';
import ContactInfoDetails from './ContactInfoDetails';


function ContactInfo({currentUser}) {
  const [formData, setFormData] = useState({
    last_name:'',
    first_name:'',
    email:'',
    city:'',
    phone_number:'',
    age: '',
    user_id: currentUser.id
  })
  const [errors, setErrors] = useState([])
  const [ContactInfo, setContactInfo] = useState([]);
  const history = useHistory();
  const {id} = useParams()


  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const addContactInfo = (contact_info) => setContactInfo(current => 
    [...current,contact_info]
)


  function onSubmit(e){
    e.preventDefault()
    
    fetch('/contact_infos/',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({...formData, ongoing:true})
    })
    .then(res => {
      if(res.ok){
        res.json().then((newinfo) => {addContactInfo(newinfo)
        history.push(`/users/${currentUser.id}`)
    });
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data.errors))
        )}
    })
    }

    const deleteContact = (id) => setContactInfo(current => current.filter(p => p.id !== id)) 


    function handleDelete(){
      fetch(`/contact_infos/${currentUser.id}`,{
        method:'DELETE',
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => {
        if(res.ok){
          deleteContact(id)
          history.push(`/users/${currentUser.id}`)
        } else {
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
    }

    return (
      <div className='App'>
      {/* {errors ? <div>errors</div> : null} */}
      <form onSubmit={onSubmit}>
        <label>Last Name </label>
        <input type='text' name='last_name' value={formData.last_name} onChange={handleChange} />
        
        <label> First Name</label>
        <input type='text' name='first_name' value={formData.first_name} onChange={handleChange} />
      
        <label>Age</label>
        <input type='number' name='age' value={formData.age} onChange={handleChange} />
      
        <label>Email</label>
        <input type='text' name='email' value={formData.email} onChange={handleChange} />
      
        <label>City</label>
        <input type='text' name='city' value={formData.city} onChange={handleChange} />
      
        <label>Phone Number</label>
        <input type='text' name='phone_number' value={formData.phone_number} onChange={handleChange} />
      
        <input type='submit' value='Add Contact Information' />
      </form>
      <br></br>
      <br></br>
      <div className='Update Contact Information'>
        <button><Link to={`/${currentUser.id}/contact_info`}> <h2>Update Contact Info</h2></Link></button>
      </div>
      <button onClick={handleDelete}>Delete Contact Info</button>
      
      </div>
    )
    }
  export default ContactInfo
import React, { useState} from 'react'
import {useHistory} from 'react-router-dom';


function ContactInfo(currentUser) {
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

  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const addContactInfo = (contact_info) => setContactInfo(current => 
    [...current,contact_info]
)


  function onSubmit(e){
    e.preventDefault()
    
    fetch('/contact_infos',{
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
        res.json().then(data => {setErrors(data.errors)}
        )}
    })
    }

    return (
      <div className='App'>
      {errors ? errors.map(e => <div>{e[0]} {e[1]}</div>):null}
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
      
        <input type='submit' value='Update ContactInfo' />
      </form>
      </div>
    )
    }
  export default ContactInfo
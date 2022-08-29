import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function EditContactInfo({currentUser}) {
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
  const {id} = useParams()

  useEffect(() => {
    fetch(`/contact_infos/${id}`)
    .then(res => res.json())
    .then(setFormData)
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const updateContactInfo = (updatedContact) => setContactInfo(current => {
    return current.map(ContactInfo => {
     if(ContactInfo.id === updatedContact.id){
       return updatedContact
     } else {
       return ContactInfo
     }
    })
  })

  function onSubmit(e){
    e.preventDefault()
    fetch(`/contact_infos/${id}`,{
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    })
    .then(res => {
      if(res.ok){
        res.json().then(updateContactInfo);
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }
    return (
      <div className='App'>
      {errors?errors.map(e => <div>{e}</div>):null}
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
      
        <input type='submit' value='Update Contact Information' />
      </form>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    )
  }
  
  export default EditContactInfo
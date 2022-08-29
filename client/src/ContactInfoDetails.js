import  {useEffect, useState} from "react";
function ContactInfoDetails() {
    const [ContactInfo, setContactInfo] = useState([]);
    const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetchContactInfo()
  },[])

  const fetchContactInfo = () => {
    fetch('/users')
    .then(res => {
      if(res.ok){
        res.json().then(data => setContactInfo(data.contact_info))
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  if(errors) return <h1>{errors}</h1>

console.log(ContactInfo)
  return (
    <div className="card">
            <p>Last Name: {ContactInfo.last_name}</p>
            <p>First Name: {ContactInfo.first_name}</p>
            <p>Email: {ContactInfo.email}</p>
            <p>Age: {ContactInfo.age}</p>
            <p>Phone Number: {ContactInfo.phone_number}</p>
            <p> City: {ContactInfo.city} </p>
    </div>
  )
}

export default ContactInfoDetails

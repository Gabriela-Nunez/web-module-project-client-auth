import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const AddFriends = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: ''
  })


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
     })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    axios.post('http://localhost:9000/api/friends', form, {
      headers: {
        authorization: token
      }
    })
    .then(res => {
      navigate('/friends');
    })
    .catch(err => {
      console.log(err.error)
    })
  }


  console.log(form);
  return (
    <div>
      <h2>Add Friend</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Friend Name</label>
          <input name="name" id="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Friend Email</label>
          <input  name="email" id="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="age">Friend Age</label>
          <input name="age" id="age" onChange={handleChange} />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
    
  )
}

export default AddFriends;
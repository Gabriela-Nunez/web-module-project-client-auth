import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate  = useNavigate();
  const [credentials, setCredentials] = useState({
    username:'',
    password:''
  });

const handleChange = (e) => {
  setCredentials({
    ...credentials,
    [e.target.name]: e.target.value
  })
}


const login = (e) => {
  e.preventDefault();
  axios.post('http://localhost:9000/api/login', credentials)
  .then(res => {
    console.log(res.data.token);
    localStorage.setItem("token", res.data.token);
    navigate('/friends');
  })
  .catch(err => {
    console.log(err.error);
  })
}

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={login}>
        <div>
          <label htmlFor="username">Username</label>
          <input onChange={handleChange} id="username" name="username"  />
        </div>
        <div>
          <label htmlFor="passowrd">Password</label>
          <input onChange={handleChange} id="password" name="password"  />
        </div>
        <button onClick={login}>SUBMIT</button>
      </form>
    </div>
  )
}

export default Login;
import React from "react";


const Login = () => {
  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username"/>
        </div>
        <div>
          <label htmlFor="passowrd">Password</label>
          <input id="password"/>
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default Login;
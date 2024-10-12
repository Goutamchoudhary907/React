import React, {useState,useContext} from 'react'
import UserContext from '../Context/userContext'
function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setuser}=useContext(UserContext)

    const handleSubmit= (e) =>{
    e.preventDefault()
    setuser({username,password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
       value={username}
       onChange={(e) => setUsername(e.target.value)}
      placeholder='username' />
      {"     "}
      <input type="text"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
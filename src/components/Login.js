import React, { useContext, useEffect, useState } from 'react'
import { useAuth } from './Auth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userList, setUerlist] = useState([])
  const [errorMessage,setErrorMessage] = useState('')
  const navigate = useNavigate()
 

  const auth = useAuth()

  useEffect(() => {
      axios.get("http://localhost:3002/users").then(
        res=>setUerlist(res.data)
      ).catch(
        (err)=>console.log(err)
      )
  }, [])


  // console.log(userList)

  // console.log(auth.user)


  const handleLogin = (e)=>{
    e.preventDefault()
    const user = userList.find(x=>x.email === email)
    if(user){
      if(password === user?.password){
        auth.login(user.name)
        navigate('/profile')
      }else{
        setErrorMessage('Incorrect password')
      }
    }else{
      setErrorMessage('user not found')
    }
    
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
        <label>password</label>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
        <button type="submit">Submit</button>
        {errorMessage}
      </form>
    </div>



  )
}

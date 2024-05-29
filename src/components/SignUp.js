import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassWord] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3002/users',
            {name,email,password}).then(
            res=>{
                alert("user added sucessfully")
                navigate('/login')
            }
        ).catch(err=>console.log(err))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nmae:</label>
            <input value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            <label>Email:</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
            <label>Password:</label>
            <input value={password} onChange={(e)=>setPassWord(e.target.value)}/><br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

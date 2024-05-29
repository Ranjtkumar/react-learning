import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()

    console.log(auth)

    const handleLogout= ()=>{
        auth?.logout()
        navigate('/')
    }

  return (
    <div style={{fontSize:"1.2rem"}}>

        welcome {auth.user}<br/>
        <button onClick={handleLogout} style={{marginTop:"10px"}}>Logout</button>
    </div>
  )
}

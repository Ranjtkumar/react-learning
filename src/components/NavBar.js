import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav className='header-nav'>
        <NavLink to="/" style={{color:"white",fontWeight:"bold",fontSize:"1.2rem",textDecoration:"none"}}>Home</NavLink>
        <NavLink to="/about" style={{color:"white",fontWeight:"bold",fontSize:"1.2rem",textDecoration:"none"}}>About</NavLink>
        <NavLink to="/product" style={{color:"white",fontWeight:"bold",fontSize:"1.2rem",textDecoration:"none"}}>Products</NavLink>
        <NavLink to="/service" style={{color:"white",fontWeight:"bold",fontSize:"1.2rem",textDecoration:"none"}}>Service</NavLink>
        <NavLink to="/user" style={{color:"white",fontWeight:"bold",fontSize:"1.2rem",textDecoration:"none"}}>User</NavLink>
        <NavLink to="/order" style={{color:"white",fontWeight:"bold",fontSize:"1.2rem",textDecoration:"none"}}>Order</NavLink>
        <NavLink to="/profile" style={{color:"white",fontWeight:"bold",fontSize:"1.2rem",textDecoration:"none"}}>profile</NavLink>
        <NavLink to="/login" style={{color:"white",fontWeight:"bold",fontSize:"1.2rem",textDecoration:"none"}}>Login</NavLink>
        <NavLink to="/signup" style={{color:"white",fontWeight:"bold",fontSize:"1.2rem",textDecoration:"none"}}>SignUp</NavLink>
    </nav>
  )
}

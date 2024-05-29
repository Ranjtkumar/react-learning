import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

 const AuthContext = React.createContext()

export default function Auth(props) {
    const [user,setUser] = useState(null)


    const login = (usr)=>{
        console.log(usr)
        // debugger
        setUser(usr)
    }



    const logout = ()=>{
        setUser(null)
    }

  return (
    <div>
        <AuthContext.Provider value={{user,login,logout}}>
            {props.children}
        </AuthContext.Provider>
    </div>
  )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}
import React from 'react'
import { Outlet , useParams, useSearchParams} from 'react-router-dom'


export default function User() {
    const [searchParms,setSerachParams] = useSearchParams()
    
    const isActive = searchParms.get('filter')

  return (
    <div>
        <h1>User</h1>
        <Outlet/>

        <button onClick={()=>setSerachParams({filter:"active"})}>ActiveUsers</button>
        <button onClick={()=>setSerachParams({})}>AllUsers</button>
        
        {isActive ? "Active Users" : "All Users"}

    </div>
  )
}

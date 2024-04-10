import React, { useEffect, useState } from 'react'

import "./index.css"


function Example() {

    const [count,setcount] = useState(0) //dynamically change data
    

   


  return (
    <div className='d-flex flex-column align-items-center bg-info py-4'>
        
        <h1>Counter</h1>

        <p style={{fontSize:"1.5rem"}}>{count}</p>


        <div className='d-flex'>
            <button style={{fontSize:"1.2rem",color:"white",backgroundColor:"green",marginRight:"10px",borderRadius:"10px"
                }} 
                onClick={()=> setcount(count+1)} >Increament</button>

           
            <button style={{fontSize:"1.2rem",color:"white",backgroundColor:"green",marginRight:"10px",borderRadius:"10px"
                }} 
                onClick={ count > 0 ? ()=>{setcount(count-1) } : ()=>{}}
            >
                decreament</button>
            
            
            <button style={{fontSize:"1.2rem",color:"white",backgroundColor:"green",marginRight:"10px",borderRadius:"10px"
                }} 
            onClick={()=>setcount(0)} >reset</button>
        </div>
        
    </div>
  )
}

export default Example

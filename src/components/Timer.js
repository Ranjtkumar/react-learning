import React, { useEffect,useMemo } from 'react'

export default function Timer() {

  
  

   

   const a = useEffect(()=>{
   
      return test(2)
    })

   const b = useMemo(()=> test(2),[])

   function test(a){
    return a*a
   }
   




  return (
    <div style={{padding:"10px"}}>
       a --{a} <br/>
       b -- {b}
    </div>
  )
}

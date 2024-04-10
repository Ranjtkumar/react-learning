import React, { useEffect, useState } from 'react'

export default function Timer() {

   const [count , setCount] = useState(0)


   const [isRuning,setIsRunning] = useState(true)

   const [intervalId,setIntervalId] = useState()

   useEffect(()=>{
    if(isRuning){
        const intervel = setInterval(() => {
            setCount(prev => prev+1)
        }, 1000);
    
        setIntervalId(intervel)
    }
    
   

    return()=>{
        clearInterval(intervalId)
    }
   },[])

   



   const handleStartStop = () => {
        if(isRuning){
            clearInterval(intervalId)
            setIsRunning(false)
        }else{
            
            setIntervalId(  setInterval(() => {
                setCount(prev => prev+1)
            }, 1000))

            setIsRunning(true)
        }
   }




  return (
    <div style={{padding:"10px"}}>
        <h1>Timer : {count} Seconds</h1> <br/>

        <button onClick={handleStartStop} style={{fontSize:"1.2rem"}}> {isRuning ? <>Stop</> : <>Start</>}</button>
    
        <button onClick={()=>{setCount(0)}} style={{fontSize:"1.2rem",marginLeft:"15px"}}> Reset </button>
    </div>
  )
}

import React, { useState } from 'react'


function Share() {

  const [operation,setOperation] = useState('')

  const numbers = [0,1,2,3,4,5,6,7,8,9]

  const operators = ["+","-","*","/"]

  return (

      <div style={{display:"flex",flexDirection:"column",marginTop:"10px",alignItems:"center"}}>
        <input value={operation} style={{fontSize:"1.2rem"}}/>

        <div style={{display:"flex",marginTop:"10px"}}>
          {
            numbers.map((each)=>
              <button style={{fontSize:"1.2rem"}} onClick={()=>{setOperation(prev => prev+each)}}>{each}</button>
            )
          }
        </div>
        
        <div style={{display:"flex",marginTop:"5px"}}>
        {
          operators.map((each)=>
            <button style={{fontSize:"1.2rem"}} onClick={()=>{setOperation(prev => prev+each)}}>{each}</button>
          )
        }
        </div>

        <button style={{fontSize:"1.2rem",marginTop:"5px"}} onClick={()=>{setOperation(eval(operation))}}>=</button>
        
        <div style={{display:"flex"}}>
          <button style={{fontSize:"1.2rem",marginTop:"5px"}} onClick={()=>{setOperation('')}}>c</button>
          <button style={{fontSize:"1.2rem",marginTop:"5px"}} 
            onClick={()=>{setOperation(operation.toString().substring(0,operation.toString().length-1))}}>del</button>
        </div>
       
      </div>
    

  )
}

export default Share
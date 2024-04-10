import React, { useState } from 'react'
import Direct from './Direct'
import { addCustomer as addCustomerAction } from './slice/customerSlice'
import { useDispatch } from 'react-redux'

export default function CustomerAdd() {


    const [customers,setCustomers] = useState([])
    const [input,setInput] = useState("")

    const dispatch = useDispatch()

    // console.log(input)


    function addCustomer(){
        if(input){
            // setCustomers((previousState)=>[...previousState,input])
            dispatch(addCustomerAction(input))
            setInput("")
        }
    }


  return (
    <div className='text-center'>
        
        <h2 style={{padding:"10px"}}>Add new Customer</h2>

        <input type='text' value={input} style={{fontSize:"1rem",margin:"10px"}} onChange={(e)=>setInput(e?.target?.value)}/>

        <button style={{fontSize:"1rem",colorL:"white"}} onClick={addCustomer}>Add</button>

        {/* <Direct customers={customers}/> */}

    </div>
  )
}

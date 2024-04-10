import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from './slice/customerSlice'

function Direct({}) {

  const customers = useSelector((state)=> state.customers)
  const dispatch = useDispatch();

//   console.log(customers)

    function deleteHandler(index){
        dispatch( deleteCustomer(index))
    }

  return (
    <div>

        <h3 style={{padding:"10px"}}>Customer List</h3>

        <ul style={{listStyle:"none"}}>
            {
                customers.map((each,index)=>{
                    return(
                        <div style={{display:"flex",columnGap:"20px",justifyContent:"center",marginTop:"10px"}}>
                            <li style={{fontSize:"1rem"}}>{each}</li>
                            <button style={{fontSize:"1rem"}} onClick={()=>deleteHandler(index)}>Delete</button>
                        </div> 
                    )
                })
            }
        </ul>
       
    </div>
  )
}

export default Direct
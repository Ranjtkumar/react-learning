import React from 'react'
import UpdatedComponent from './Hoc'

function Counter1(props) {
  return (
    <div>
        <div>{props?.count}</div><br/>
        <button onClick={props?.handelInc}>Inc</button>
        <button onClick={props?.handeldec}>Dec</button>
        {props?.name}
    </div>
  )
}

export default UpdatedComponent(Counter1)

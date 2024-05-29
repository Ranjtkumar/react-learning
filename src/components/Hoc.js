import React, { useState } from 'react'

 function UpdatedComponent(OriginalComponenet) {
    function NewComponent(props){
        const[count,setCount] = useState(0)
        const handleInc = ()=>{
            setCount(count+1)
        }
        const handelDec = () => {
            setCount(count-1)
        }

        return <OriginalComponenet count={count} handeldec={handelDec} handelInc={handleInc} {...props}/>
    }

    return NewComponent
}

export default UpdatedComponent
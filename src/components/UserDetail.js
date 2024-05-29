import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function UserDetail() {
    const params = useParams()
    

    console.log("user detail page")

  return (
    <div>
        <h1>Details of user {params.userId}</h1>
        


    </div>
  )
}

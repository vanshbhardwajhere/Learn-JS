import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
        

    const {userId} = useParams();
    console.log(`${userId}`)
  return (
    <div className='bg-gray-600 text-white' >User: {userId}</div>
  )
}

export default User
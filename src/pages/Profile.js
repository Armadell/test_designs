import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
    const data=useSelector((state)=>state.user.firstname)
  return (
    <div>
        <h1>this is profile{data}</h1>
    </div>
  )
}

export default Profile
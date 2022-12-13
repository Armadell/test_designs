import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {logOut} from '../Redux/reducer' 
const Profile = () => {

    const dispatch=useDispatch()
    const  user= useSelector((state)=>state.user.user.firstname)
    const auth=localStorage.getItem('refresh')
    const logoutHandler=()=>{
      dispatch(logOut())
      localStorage.removeItem('refresh')
      localStorage.removeItem('access')
    }
    console.log(user)
  return (
    <div>
      {auth ? (<p onClick={logoutHandler}>Logout</p>):(<Link to='/login'>login</Link>)}
        {user && <p>Hello{user}</p>}
    </div>
  )
}

export default Profile
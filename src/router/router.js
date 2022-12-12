import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import React from 'react'
import Register from "../pages/Register"
import Login from "../pages/Login"
import PrivateRouter from  './utils/PrivateRoute'
import Profile from "../pages/Profile"
const router = () => {
  return (
   <Routes>

    <Route path="/" element={<Home/>}></Route>
    <Route path="register/" element={<Register/>}></Route>
    <Route path="login/" element={<Login/>}></Route>
     <Route path='profile/' element={<PrivateRouter><Profile/></PrivateRouter>}></Route>

   </Routes>
  )
}

export default router
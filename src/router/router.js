import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import React from 'react'
import Register from "../pages/Register"
import Login from "../pages/Login"
const router = () => {
  return (
   <Routes>

    <Route path="/" element={<Home/>}></Route>
    <Route path="register/" element={<Register/>}></Route>
    <Route path="login/" element={<Login/>}></Route>


   </Routes>
  )
}

export default router
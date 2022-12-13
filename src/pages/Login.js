import jwt_decode from "jwt-decode";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosPrivate";
import {userData,setToken} from '../Redux/reducer'
import { useDispatch } from 'react-redux'
import LoginForm from "../components/LoginForm";


const Login = () => {
 
    // eslint-disable-next-line no-unused-expressions
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const loginUser = async (e) => {
        console.log(e.target.email.value)
        e.preventDefault()
        console.log('form submitted')
        try {
      
            const response = await axiosInstance.post(`token/`,{
                email:e.target.email.value,
                password:e.target.password.value
            })
            if(response.status === 200){
                console.log(response)
            dispatch(userData(jwt_decode(response.data.access)))
            dispatch(setToken(response.data.refresh))
            localStorage.setItem('refresh',response.data.access)
            localStorage.setItem('access',response.data.refresh)
            axiosInstance.defaults.headers['Authorization']=  'JWT ' + localStorage.getItem('access_token')
            navigate("/profile") 
            }else{
                alert('something went wrong')
            }
         
        } catch (error) {
            alert(error)
            console.log(error)
        }

    }

    return (
       <>
       <LoginForm loginUser={loginUser}></LoginForm>
       </>
    )
}

export default Login





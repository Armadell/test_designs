import { useState } from "react"
import { Navigate } from "react-router-dom"


const PrivateRoute=({children})=>{
    console.log(children)
    //data must come from redux for this
    const [isAuth,setAuth]=useState(true)
    console.log("private route works")
    return(
      isAuth ? children :<Navigate to="/login" />
    )
       
    
}
export default PrivateRoute
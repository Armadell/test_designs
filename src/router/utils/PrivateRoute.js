import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const PrivateRoute=({children})=>{
    console.log(useSelector(state=>state))
    const isAuth=localStorage.getItem('refresh')
    console.log(isAuth)

    //data must come from redux for this
   
    console.log("private route works")
    return(
      isAuth ? children :<Navigate to="/login" />
    )
       
    
}
export default PrivateRoute
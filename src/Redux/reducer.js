import { createSlice } from '@reduxjs/toolkit'

const initialState = {
user:{},
token:{},
}

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    
    userData: (state, action) => {
      console.log("hai",action.payload)
      const user = {
       
        user_id:action.payload.id,
        firstname:action.payload.name,
        email:action.payload.email,
        isLoggedIn: true
        
      }
      return {
        ...state,
        user


      }
    },
    logOut:(state,action)=>{
      const user={
        user:{},
        isLoggedIn:false
      }
      return{
        ...state,user
      }


    },
    setToken:(state,action)=>{
      const token={
        token:action.payload
      }
      return{
        ...state,
        token
      }
    }
    
    



  },
})

// Action creators are generated for each case reducer function
export const { logOut,userData,setToken } = userSlice.actions

export default userSlice.reducer
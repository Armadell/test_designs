import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstname:'krishnajith',
  email:'',
  is_auth:false
}

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addData: (state,action) => {
      state.initialState.push(action.payload)
    },
 
 
  },
})

// Action creators are generated for each case reducer function
export const { userData } = userSlice.actions

export default userSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    username: '',
    email:'',
    password:'',
    isValid: true
  },
  reducers: {
    registerSubmit: (state) => {
      state.username = '';
      state.email = '';
      state.password = '';
    },
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setEmail: (state, action) => {
        state.email = action.payload
      },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setIsValid: (state, action) => {
      state.isValid = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUsername, setPassword, setEmail, registerSubmit, setIsValid } = registerSlice.actions

export default registerSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password:'',
    telepon:'',
    isLoggedIn: false,
    decode: '',
    dataLogin:''
  },
  reducers: {
    setDecode: (state, action) => {
      state.decode = action.payload;
    },
    setDataLogin: (state, action) => {
      state.dataLogin = action.payload
    },
    setIsLoggedIn: (state,action) =>{
      state.isLoggedIn = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setTelepon: (state, action) => {
      state.telepon = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmail, setPassword, setIsLoggedIn, setDecode, setDataLogin, setTelepon } = loginSlice.actions

export default loginSlice.reducer
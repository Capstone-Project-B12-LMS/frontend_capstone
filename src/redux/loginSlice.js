import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: '',
    password:''
  },
  reducers: {
    loginSubmit: (state) => {
      state.username = '';
      state.password = '';
    },
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUsername, setPassword, loginSubmit } = loginSlice.actions

export default loginSlice.reducer
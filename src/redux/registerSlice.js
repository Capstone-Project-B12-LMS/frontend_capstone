import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    username: "",
    email: "",
    password: "",
    isValid: true,
    isSuccess: false,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setUsername,
  setPassword,
  setEmail,
} = registerSlice.actions;

export default registerSlice.reducer;

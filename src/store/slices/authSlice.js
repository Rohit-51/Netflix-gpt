import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    authChecked: false
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    clearUser: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
    setAuthChecked: (state) => {
      state.authChecked = true
    }
  }
})
export const { setUser, clearUser, setAuthChecked } = authSlice.actions
export default authSlice.reducer
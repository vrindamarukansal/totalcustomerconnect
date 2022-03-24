import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authenticated: false,
    userInfo: {},
  };

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login: (state, action) => {
            state.authenticated = true
            state.userInfo = action.payload
        },
        logout: (state) => {
            state.authenticated = false
            state.userInfo = {}
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer
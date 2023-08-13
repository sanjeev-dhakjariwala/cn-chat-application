import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null }; // Use null instead of an empty object

const userSlice = createSlice({
  name: 'userExpression',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log('<<<USER SET!!');
      state.user = action.payload;
    },
    logout: (state) => {
      console.log('USER LOGOUT!!!');
      state.user = null; // Set user to null when logging out
    }
  }
});

export const { setUser, logout } = userSlice.actions;
export default userSlice;

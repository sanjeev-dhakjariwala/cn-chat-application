import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const initialState = { user: {} };

const userSlice = createSlice({
  name: 'userExpression',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(`<<<USER SET!!`)
      state.user = action.payload;
    },
    logout:(state, action) => {
      console.log(`USER LOGOUT!!!`)
      state.user = action.payload;
    }
  }
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

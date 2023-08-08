import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const chatSlice = createSlice({
  name: "chatExpression",
  initialState,
  reducers: {
    appendChat: (state, action) => {
      return state;
    },
  },
});

export const { appendChat } = chatSlice.actions;
export default chatSlice.reducer;

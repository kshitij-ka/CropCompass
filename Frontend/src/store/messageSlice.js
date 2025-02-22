import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messages",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const messageActions = messageSlice.actions;

export default messageSlice;

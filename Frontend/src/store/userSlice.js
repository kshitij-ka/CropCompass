import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Unloggedin User",
    email: "Unlogged@gmail.com",
    avatar: "/images/default1.png",
    role: "unloggeduser",
    mainInterest: [],
  },
  reducers: {
    addUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice;

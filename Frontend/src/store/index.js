import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import messageSlice from "./messageSlice";
import loaderSlice from "./loaderSlice";

const MentifyStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    messages: messageSlice.reducer,
    loader: loaderSlice.reducer,
  },
});

export default MentifyStore;

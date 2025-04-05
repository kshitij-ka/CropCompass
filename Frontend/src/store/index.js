import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import messageSlice from "./messageSlice";
import loaderSlice from "./loaderSlice";
import { farmApi } from "./api/farmApi";
import { cropApi } from "./api/cropApi";
import { financeApi } from "./api/financeApi";
import { taskApi } from "./api/taskApi";

const MentifyStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    messages: messageSlice.reducer,
    loader: loaderSlice.reducer,
    [farmApi.reducerPath]: farmApi.reducer,
    [cropApi.reducerPath]: cropApi.reducer,
    [financeApi.reducerPath]: financeApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(farmApi.middleware)
      .concat(cropApi.middleware)
      .concat(financeApi.middleware)
      .concat(taskApi.middleware), // Add API middleware
});

export default MentifyStore;

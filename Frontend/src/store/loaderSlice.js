import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: false,
  reducers: {
    showLoader: (state) => {
      return true;
    },
    hideLoader: (state) => {
      return false;
    },
  },
});

export const loaderSliceActions = loaderSlice.actions;

export default loaderSlice;

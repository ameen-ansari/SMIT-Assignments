import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const slice1: any = createSlice({
  name: "slice1",
  initialState: {
    data: 123,
  },
  reducers: {},
});

const slice2: any = createSlice({
  name: "slice1",
  initialState: {
    data: 456,
  },
  reducers: {},
});

export default combineReducers({
  slice1: slice1.reducer,
  slice2: slice2.reducer,
});
// export default slice1.reducer

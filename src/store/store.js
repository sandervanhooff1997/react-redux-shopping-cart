import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// import all slices
import counters from "store/slices/counters";

// combines nested reducers into one single root reducer
const reducer = combineReducers({
  counters
});

// creates and exports the Redux store
export default configureStore({
  reducer
});

import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

// console.log(increment.toString());
// console.log(increment.type);
// "INCREMENT"

// creates a recuder with an initial state + a lookup table that replaces the regular switch statement
// [increment] uses toString()
const counter = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1
});

let store = configureStore({
  reducer: counter
});

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());

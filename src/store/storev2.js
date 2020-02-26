import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

// you can use object destruction to withdraw actions and recuder
const { actions, reducer } = counterSlice;
const { increment, decrement } = actions;

const store = configureStore({
  reducer: counterSlice.reducer
});

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
// store.dispatch(counterSlice.actions.increment());

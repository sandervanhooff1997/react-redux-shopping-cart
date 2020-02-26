import { createSlice } from "@reduxjs/toolkit";

const countersSlice = createSlice({
  name: "counters",
  initialState: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ],
  reducers: {
    incrementCounter: {
      reducer(state, action) {
        const { id } = action.payload;

        let counter = state.find(x => x.id === id);
        if (counter) {
          counter.value++;
        }
      },
      prepare(id) {
        return { payload: { id } };
      }
    },
    resetCounters: state => {
      state.map(x => {
        x.value = 0;
        return x;
      });
    },
    addCounter: state => {
      state.push({ id: 5, value: 0 });
    },
    deleteCounter: {
      reducer(state, action) {
        const { id } = action.payload;

        return state.filter(x => x.id !== id);
      },
      prepare(id) {
        return { payload: { id } };
      }
    }
  }
});

/* 
Redux community code convention the "ducks"
Simply put, it suggests that you should put all your action creators and reducers in one file, 
do named exports of the action creators, and a default export of the reducer function.
*/
export const {
  incrementCounter,
  resetCounters,
  addCounter,
  deleteCounter
} = countersSlice.actions;

export default countersSlice.reducer;

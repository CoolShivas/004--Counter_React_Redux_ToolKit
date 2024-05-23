import { createSlice } from "@reduxjs/toolkit";

// // Making first slice i.e, Counter ;
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterValue: 0 },
  reducers: {
    increment: (currState, action) => {
      currState.counterValue++; // Clicking +1 will increment the value ;
      //   console.log(currState, action);
    },
    decrement: (currState, action) => {
      currState.counterValue--; // Clicking -1 will decrement the value ;
      //   console.log(currState, action);
    },
    addition: (currState, action) => {
      currState.counterValue =
        currState.counterValue + Number(action.payload.num);
    },

    subtraction: (currState, action) => {
      currState.counterValue -= action.payload.num;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;

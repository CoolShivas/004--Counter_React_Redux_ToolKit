import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "private",
  initialState: false,
  reducers: {
    toggler: (currState, action) => {
      return (currState = !currState);
    },
  },
});

export const privacyActions = privacySlice.actions;

export default privacySlice;

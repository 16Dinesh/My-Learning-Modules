import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    handleIncBtn: (state, action) => {
      state.value += 1;
      console.log(action.payload)
      // console.log(state)
    },
    handleDecBtn: (state) => {
      state.value -= 1;
    },
    resetCount: (state) => {
      state.value = 0;
    },
  },
});


export const { handleIncBtn, handleDecBtn, resetCount } = counterSlice.actions;


export default counterSlice.reducer;

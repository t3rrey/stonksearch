import { createSlice } from "@reduxjs/toolkit";

export const mainChart = createSlice({
  name: "mainChart",
  initialState: { value: { name: "", data: {} } },
  reducers: {
    search: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default mainChart.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const tssDataSlice = createSlice({
  name: "tssdata",
  initialState: {
    tssData: [
      {
        id: Date.now(),
        longitude: "",
        latitude: "",
        placename: "",
      },
    ],
  },
  reducers: {
    setTssData: (state, action) => {
      state.tssData = action.payload;
    },
  },
});

export const { setTssData } = tssDataSlice.actions;

export default tssDataSlice.reducer;

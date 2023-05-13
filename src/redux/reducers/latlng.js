import { createSlice } from "@reduxjs/toolkit";

export const latlngSlice = createSlice({
  name: "latlng",
  initialState: {
    latlng: {
      
      latitude: null,
      longitude: null,
      date: null,
     
    },
  },
  reducers: {
    setLatLng: (state, action) => {
      state.latlng = action.payload;
    },
  },
});

export const { setLatLng } = latlngSlice.actions;

export default latlngSlice.reducer;

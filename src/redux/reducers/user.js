import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userdata",
  initialState: {
    userData: {
      id: null,
      token: null,
      email: null,
      username: null,
      companyname: null,
      purchasedDate: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

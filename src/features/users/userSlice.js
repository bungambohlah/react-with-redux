import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      state.push(action.payload);
    },
    delUser: (state, action) => {
      const index = state.indexOf(action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { setUser, delUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;

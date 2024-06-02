import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      console.log("hi" + action.payload);
      return state.filter((_, index) => index !== action.payload);
    },
    clearAllUsers(state) {
      return [];
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;

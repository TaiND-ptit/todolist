import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
type User = {
  username: string;
  password: string;
};

interface IInitialState {
  isLoggedIn: boolean;
  currentUser?: User;
}

const initialState: IInitialState = {
    isLoggedIn: false,
    currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state = initialState;
      state.currentUser = undefined;
    },
  },
});

export const { loginSuccess } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;
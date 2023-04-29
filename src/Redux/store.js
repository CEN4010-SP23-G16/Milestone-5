import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import settingsSlice from "./slices/settingsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    settings: settingsSlice,
  }
});
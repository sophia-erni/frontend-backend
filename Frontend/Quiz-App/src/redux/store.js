import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";

export const store = configureStore({
  reducer: {
    questions: questionReducer,
  },
});

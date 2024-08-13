import { configureStore } from "@reduxjs/toolkit";
import documentReducer from "./document-slice";

export const store = configureStore({
  reducer: {
    docs: documentReducer,
  },
});

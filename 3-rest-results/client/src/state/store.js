import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (dM) => dM().concat(api.middleware),
});

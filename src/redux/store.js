import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger]
});

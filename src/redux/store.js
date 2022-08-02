import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { batchedSubscribe } from "redux-batched-subscribe";
import _ from "lodash";
import rootReducer from "./reducer";
import signupReducer from "../pages/signup/redux/reducer";

const debounceNotify = _.debounce((notify) => notify());

export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
  middleware: [logger, thunk],
  devTools: true,
  enhancers: [batchedSubscribe(debounceNotify)],
});

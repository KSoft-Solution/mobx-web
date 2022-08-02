import { combineReducers } from "redux";
import signupReducer from "../pages/signup/redux/reducer";

const rootReducer = () => {
  return combineReducers({
    signup: signupReducer,
  });
};
export default rootReducer;

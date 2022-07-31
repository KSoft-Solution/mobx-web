import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";

import registerReducer from "../pages/login/redux/reducer";

const rootReducer = () =>
  combineReducers({
    notifications,
    register: registerReducer,
  });

export default rootReducer;

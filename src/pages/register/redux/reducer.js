import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "./constant";

const initialState = {
  loading: false,
  success: false,
  error:{},
  user: {},
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;

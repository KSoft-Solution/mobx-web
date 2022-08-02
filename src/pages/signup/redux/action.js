import {
  SIGNUP_CHANGE,
  SIGNUP_RESET,
  SET_SIGNUP_LOADING,
  SET_SIGNUP_SUBMITTING,
  SET_SIGNUP_FORM_ERRORS,
} from "./constant";
import { allFieldsValidation } from "../../../utils/validation";
import { registerUser } from "../../../services/api";
import { handleError } from "../../../utils/errorHandler";

export const signupChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: SIGNUP_CHANGE,
    payload: formData,
  };
};

export const signUp = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        email: "required|email",
        password: "required|min:6",
        name: "required",
        avatar: "required",
      };

      const newUser = getState().signup.signupFormData;

      const { isValid, errors } = allFieldsValidation(newUser, rules, {
        "required.email": "Email is required.",
        "required.password": "Password is required.",
        "required.name": "Name is required.",
        "required.avatar": "Avatar is required.",
      });

      if (!isValid) {
        return dispatch({ type: SET_SIGNUP_FORM_ERRORS, payload: errors });
      }

      console.log(registerUser(newUser))

      dispatch({ type: SET_SIGNUP_SUBMITTING, payload: true});
      dispatch({ type: SET_SIGNUP_LOADING, payload: false });
      dispatch({ type: SIGNUP_RESET });
    } catch (error) {
      const title = `Please try to signup again!`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_SIGNUP_SUBMITTING, payload: false });
      dispatch({ type: SET_SIGNUP_LOADING, payload: false });
    }
  };
};

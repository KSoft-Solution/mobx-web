import { bindActionCreators } from "redux";
import * as registerAction from "../pages/signup/redux/action";
import * as loginAction from "../pages/login/redux/action";

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...registerAction,
      ...loginAction,
    },
    dispatch
  );
}

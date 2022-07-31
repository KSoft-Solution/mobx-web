import { bindActionCreators } from "redux";
import * as registerAction from "../pages/register/redux/action";

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...registerAction,
    },
    dispatch
  );
}

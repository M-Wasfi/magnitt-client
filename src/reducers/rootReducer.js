import { combineReducers } from "redux";
import authReducer from "./authReducer";
import companyReducer from "./companyReducer";
import userReducer from "./userReducer";

export default combineReducers({
  authReducer,
  companyReducer,
  userReducer,
});

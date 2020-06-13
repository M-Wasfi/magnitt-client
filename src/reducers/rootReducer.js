import { combineReducers } from "redux";
import authReducer from "./authReducer";
import companyReducer from "./companyReducer";
import userReducer from "./userReducer";
import connectionReducer from "./connectionReducer";

export default combineReducers({
  authReducer,
  companyReducer,
  userReducer,
  connectionReducer,
});

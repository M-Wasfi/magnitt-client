import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTHENTICATING,
  UPDATE_PROFILE,
  CREATE_COMPANY,
} from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  errors: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case AUTHENTICATING:
      return {
        ...state,
        loading: true,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.user,
        token: payload.token,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.user,
        token: payload.token,
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        loading: false,
        errors: null,
        user: payload,
      };

    case CREATE_COMPANY:
      return {
        ...state,
        user: { ...state.user, company: payload },
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
}

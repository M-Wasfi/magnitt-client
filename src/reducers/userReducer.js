import {
  GET_ALL_USERS,
  GET_USER,
  GET_PROFILE,
  SEARCH_USERS,
  CANCEL_SEARCH,
  LOADING,
  LOGOUT,
} from "../actions/actionTypes";

const initialState = {
  loading: true,
  searching: false,
  users: [],
  searchResult: [],
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case SEARCH_USERS:
      return {
        ...state,
        loading: false,
        searchResult: payload,
        searching: true,
      };
    case CANCEL_SEARCH:
      return {
        ...state,
        loading: false,
        searching: false,
      };
    case GET_PROFILE:
      return {
        ...state,
        loading: false,
        profile: payload,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        searching: false,
        users: [],
        searchResult: [],
        user: null,
      };

    default:
      return state;
  }
}

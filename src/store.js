import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import methods from "./api/httpService";
import { logger } from "./helpers/reduxMiddlewares";

const initialState = {};

const middleware = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    // const store = createStore(
    //   rootReducer,
    //   initialState,

    applyMiddleware(...middleware)
  )
);

// set up a store subscription listener
// to store the users token in localStorage

// initialize current state from redux store for subscription comparison
// preventing undefined error
let currentState = store.getState();

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage and axios headers
  if (previousState.authReducer.token !== currentState.authReducer.token) {
    const token = currentState.authReducer.token;
    methods.setJwt(token);
  }
});

export default store;

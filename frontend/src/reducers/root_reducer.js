import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from './errors_reduceer';
import tweets from "./tweets_reducer";

const RootReducer = combineReducers({
  session,
  errors,
  tweets
});

export default RootReducer;

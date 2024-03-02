import { combineReducers } from "redux";
import userReducer from "./slices/user.slice";

export const rootReducers = combineReducers({
  user: userReducer,
});


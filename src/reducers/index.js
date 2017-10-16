import { combineReducers } from "redux";
import authReducer from "./authReducer";
import pinReducer from "./pinReducer";
import likeReducer from "./likeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  pins: pinReducer,
  social: likeReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import authReducer from './authReducer'
import logInReducer from './logInReducer'

const rootReducer = combineReducers({
    authReducer,
    logInReducer,
  });
  
  export default rootReducer;
  
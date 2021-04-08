import { combineReducers } from "redux";

import usersReducer from './users_reducer'
import errorsReducer from "./errors_reducer";
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
// import uiReducer from './ui_reducer'


const rootReducer = combineReducers({
    entities: entitiesReducer,
    users: usersReducer,
    errors: errorsReducer,
    session: sessionReducer
    // ui: uiReducer,
});
  
export default rootReducer;


import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger'


let middleware = [ thunk ];
if (process.env.NODE_ENV !== "production") {
  middleware = [ ...middleware, logger ];
}

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, logger));
}


export default configureStore;
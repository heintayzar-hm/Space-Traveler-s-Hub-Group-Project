import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/RocketReducer';

const rootReducer = combineReducers({
  rocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(thunk, logger));

export default store;

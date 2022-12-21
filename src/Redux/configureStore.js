import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import rocketsReducer from './rockets/RocketReducer';
import missionReducer from './mission/mission';

const rootReducer = combineReducers({
//   rocketsReducer,
  missionReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(thunk, logger));

export default store;

import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
  },
}, applyMiddleware(thunk, logger));

export default store;

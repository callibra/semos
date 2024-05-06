import { configureStore } from '@reduxjs/toolkit'; 
import logger from 'redux-logger'; 
import todosReducers from './reducers/todosReducers';

const store = configureStore({
  reducer: {
    todosReducers: todosReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger), 
});

export default store;
import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { usersReducer } from './components/users/duck';
import { authReducer } from './components/auth/duck';
import { postsReducer } from './components/posts/duck';

const reducer = {
    usersReducer:usersReducer,
    authReducer:authReducer,
    postsReducer:postsReducer
}

export default configureStore({
    reducer:reducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});
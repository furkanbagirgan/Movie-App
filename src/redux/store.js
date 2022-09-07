import {configureStore, combineReducers} from '@reduxjs/toolkit';

import AuthReducer from './authSlice';
import ThemeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    'auth': AuthReducer,
    'theme': ThemeReducer,
  },
});

export default store;

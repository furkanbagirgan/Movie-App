import {configureStore} from '@reduxjs/toolkit';

import AuthReducer from './authSlice';
import ThemeReducer from './themeSlice';
import MovieReducer from './movieSlice';
import SearchReducer from './searchSlice';
import DetailReducer from './detailSlice';

//A store is created by pulling reducers from all slices.
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    theme: ThemeReducer,
    movie: MovieReducer,
    search: SearchReducer,
    detail: DetailReducer,
  },
});

export default store;

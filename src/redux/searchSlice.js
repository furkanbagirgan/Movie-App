import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//The new incoming data is assigned to the existing searchedMovies.
export const getSearchedMovies = createAsyncThunk(
  'search/getSearchedMovies',
  async searchedText => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=8cafe31173adc15ddeaa1729dd482fc3&language=en-US&page=1&query=${searchedText}`,
      );
      if (response.status === 200) {
        const movies = response.data.results;
        return movies;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
);

//This is the slice where auth operations are made.
const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchedMovies: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getSearchedMovies.pending, (state, action) => {
        //The reducer that will be generated while the getSearchedMovies function is running.
        return {
          loading: true,
          error: false,
        };
      })
      .addCase(getSearchedMovies.fulfilled, (state, action) => {
        //The reducer that will occur when the getSearchedMovies function is positive.
        return {
          searchedMovies: action.payload,
          loading: false,
          error: false,
        };
      })
      .addCase(getSearchedMovies.rejected, (state, action) => {
        //The reducer that will occur when the getSearchedMovies function has failed.
        return {
          loading: false,
          error: true,
        };
      });
  },
});

export default searchSlice.reducer;

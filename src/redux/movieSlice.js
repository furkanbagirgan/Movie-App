import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//The new incoming data is assigned to the existing filteredMovies.
export const getFilteredMovies = createAsyncThunk(
  'movie/getFilteredMovies',
  async selectedFilter => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${selectedFilter}?api_key=8cafe31173adc15ddeaa1729dd482fc3&language=en-US`,
      );
      if (response.status === 200) {
        const movies =
          selectedFilter !== 'latest' ? response.data.results : [response.data];
        return movies;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
);

//This is the slice where auth operations are made.
const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    filteredMovies: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getFilteredMovies.pending, (state, action) => {
        //The reducer that will be generated while the getFilteredMovies function is running.
        return {
          loading: true,
          error: false,
        };
      })
      .addCase(getFilteredMovies.fulfilled, (state, action) => {
        //The reducer that will occur when the getFilteredMovies function is positive.
        return {
          filteredMovies: action.payload,
          loading: false,
          error: false,
        };
      })
      .addCase(getFilteredMovies.rejected, (state, action) => {
        //The reducer that will occur when the getFilteredMovies function has failed.
        return {
          loading: false,
          error: true,
        };
      });
  },
});

export default movieSlice.reducer;

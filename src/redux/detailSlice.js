import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//The new incoming data is assigned to the existing movie detail.
export const getMovieDetail = createAsyncThunk(
  'detail/getMovieDetail',
  async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=8cafe31173adc15ddeaa1729dd482fc3&language=en-US`,
      );
      if (response.status === 200) {
        const movie = response.data;
        return movie;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
);

//This is the slice where auth operations are made.
const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    movie: {},
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getMovieDetail.pending, (state, action) => {
        //The reducer that will occur when the getFilteredMovies function has failed.
        return {
          detailLoading: true,
          detailError: false,
        };
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        //The reducer that will occur when the getFilteredMovies function has failed.
        return {
          movie: action.payload,
          detailLoading: false,
          detailError: false,
        };
      })
      .addCase(getMovieDetail.rejected, (state, action) => {
        //The reducer that will occur when the getFilteredMovies function has failed.
        return {
          detailError: true,
          detailLoading: false,
        };
      });
  },
});

export default detailSlice.reducer;

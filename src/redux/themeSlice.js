import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    setTheme: (state,action) => {
      return {
        theme: action.payload,
      };
    },
  },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;

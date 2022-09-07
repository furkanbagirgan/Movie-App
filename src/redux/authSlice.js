import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: {},
  },
  reducers: {
    setCurrentUser: (state,action) => {
      return {
        currentUser: action.payload,
      };
    },
    resetUser: () => {
      return {
        currentUser: {},
      };
    },
  },
});

export const {setCurrentUser,resetUser} = authSlice.actions;
export default authSlice.reducer;

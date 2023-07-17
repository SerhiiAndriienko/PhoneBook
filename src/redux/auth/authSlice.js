import { createSlice } from '@reduxjs/toolkit';
import { register, login, refreshUser, logout } from './operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isAuthError: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
      state.isLoading = false;
    },
    [register.pending](state, _action) {
      state.isLoading = true;
    },
    [register.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },

    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
      state.isLoading = false;
    },
    [login.pending](state, _action) {
      state.isLoading = true;
    },
    [login.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    [logout.fulfilled](state, _action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isAuthError = false;
      state.isRefreshing = false;
      state.isLoading = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isLoading = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
      state.isLoading = false;
    },
  },
});

export const authSliceReduser = authSlice.reducer;

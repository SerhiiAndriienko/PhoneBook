export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsErorr = state => state.auth.isAuthError;
export const selectIsLoading = state => state.auth.isLoading;

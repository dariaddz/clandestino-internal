export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.userName;

export const selectIsUserFetching = state => state.auth.isFetchingCurrentUser;

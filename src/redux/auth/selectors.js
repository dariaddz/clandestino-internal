export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.userName;

export const selectIsUserFetching = state => state.auth.isFetchingCurrentUser;

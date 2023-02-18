import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsLoggedIn,
  selectIsUserFetching,
} from '../redux/auth/selectors';

export const useAuth = () => {
  return {
    isFetchingCurrentUser: useSelector(selectIsUserFetching),
    isLoggedIn: useSelector(selectIsLoggedIn),
    user: useSelector(selectUser),
  };
};

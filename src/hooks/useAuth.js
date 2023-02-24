import { useSelector } from 'react-redux';

import {
  selectUserName,
  selectIsLoggedIn,
  selectIsUserFetching,
} from '../redux/auth/selectors';

export const useAuth = () => {
  return {
    isFetchingCurrentUser: useSelector(selectIsUserFetching),
    isLoggedIn: useSelector(selectIsLoggedIn),
    user: useSelector(selectUserName),
  };
};

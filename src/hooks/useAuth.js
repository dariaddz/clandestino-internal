import { useSelector } from 'react-redux';

import {
  selectUserName,
  selectIsLoggedIn,
  selectIsUserFetching,
  selectIsPending,
} from '../redux/auth/selectors';

export const useAuth = () => {
  return {
    isFetchingCurrentUser: useSelector(selectIsUserFetching),
    isLoggedIn: useSelector(selectIsLoggedIn),
    user: useSelector(selectUserName),
    isPending: useSelector(selectIsPending),
  };
};

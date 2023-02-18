import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isFetchingCurrentUser } = useAuth();
  const shouldRedirect = !isFetchingCurrentUser && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

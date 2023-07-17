import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const ProtectedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

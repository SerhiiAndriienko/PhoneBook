import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectIsErorr,
  selectIsLoading,
} from 'redux/auth/selectors';
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isAuthErorr = useSelector(selectIsErorr);
  const IsRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    user,
    isAuthErorr,
    IsRefreshing,
    isLoading,
  };
};

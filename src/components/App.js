import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './routes/ProtectedRoutes';
import { PrivateRoute } from './routes/PrivateRoute';
import Loader from './Loader/Loader';
import { useDispatch } from 'react-redux';
import Header from './header/Header';
import Home from 'pages/home/Home';
import Register from 'pages/register/Register';
import Login from 'pages/login/Login';
import NotFound from 'pages/notFound/NotFound';
import Contacts from 'pages/contacts/Contacts';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operation';

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, IsRefreshing, isLoading } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  if (IsRefreshing || isLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={<ProtectedRoute redirectTo="/" component={<Register />} />}
          />
          <Route
            path="/login"
            index
            element={
              <ProtectedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
